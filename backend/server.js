const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt'); 
const multer = require('multer');
const path = require("path");
const nodemailer = require('nodemailer');
const crypto = require('crypto');


const app = express();
const port = 3001

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


var jwt = require('jsonwebtoken');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../frontend/public/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + uniqueSuffix + '-' + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Tharsan@6",
    database: "building"
})

con.connect(function(err) {
    if(err) {
        console.log("Error in Connection");
    } else {
        console.log("Connected");
    }
});


// register

app.post("/register", async (req, res) => {
    try {
      const { firstname, lastname, province, district, city, email, newpassword } = req.body;

      con.query(
        "SELECT * FROM building_record WHERE email = ?",
        [email],
        async (err, results) => {
          if (err) {
            console.error("Error checking existing user:", err);
            return res.status(500).json({ message: "Internal server error" });
          }
  
          if (results.length > 0) {
            return res.status(400).json({ message: "User already exists" });
          }

          const hashedPassword = await bcrypt.hash(newpassword, 10);
  
          con.query(
            "INSERT INTO building_record (firstname, lastname, province, district, city, email, newpassword) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [firstname, lastname, province, district, city, email, hashedPassword],
            (err) => {
              if (err) {
                console.error("Error inserting new user:", err);
                return res.status(500).json({ message: "Internal server error" });
              }
  
              res.status(201).json({ message: "User registered successfully" });
            }
          );
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // hashing

app.get('/hash', (req, res) => { 
    bcrypt.hash("123456", 10, (err, hash) => {
        if(err) return res.json({Error: "Error in hashing password"});
        const values = [
            hash
        ]
        return res.json({result: hash});
    } )
})

//login
 
app.post('/login', (req, res) => {
  const sql = "SELECT * FROM building_record Where email = ?";
  con.query(sql, [req.body.email], (err, result) => {
      if(err) return res.json({Status: "Error", Error: "Error in runnig query"});
      if(result.length > 0) {
          bcrypt.compare(req.body.newpassword.toString(), result[0].newpassword, (err, response)=> {
              if(err) return res.json({Error: "password error"});
              if(response) {    
                   const token = jwt.sign(
                  { userId: result[0].id, email: result[0].email },
                   process.env.JWT_SECRET || 'defaultSecretKey', 
                   { expiresIn: '1h' } // Token expiration time (1 hour in this example)
                );  
                  return res.json({Status: "Success", Token: token})
              } else {
                  return res.json({Status: "Error", Error: "Wrong Email or Password"});
              }
          })
      } else {
          return res.json({Status: "Error", Error: "Wrong Email or Password"});
      }
  })
})


// change password

app.post('/user', (req, res) => {
  const sql = "SELECT * FROM building_record Where newpassword = ?";
  con.query(sql, [req.body.newpassword], (err, result) => {
      if(err) return res.json({Status: "Error", Error: "Error in runnig query"});
      if(result.length > 0) {
          bcrypt.compare(req.body.newpassword.toString(), result[0].newpassword, (err, response)=> {
              if(err) return res.json({Error: "password error"});
              if(response) {
                  return res.json({Status: "Success", Token: token})
              } else {
                  return res.json({Status: "Error", Error: "Password"});
              }
          })
      } 
    })
  })
  

  app.get('/api/userdata', authenticateToken, (req, res) => {
    const userId = req.user.userId;
    // Retrieve user data from the database based on the userId
   
    if (user) {
      res.json({
        email: user.email,
        // Add other user data fields as needed
      });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });

app.put("/user/:id", (req, res) => {
  const userId = req.params.id;
  const q = "UPDATE building_record SET  `newpassword`= ? WHERE id = ?";

  const values = [
    req.body.newpassword,
  ];

  con.query(q, [...values,userId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


// const transporter = nodemailer.createTransport({
//   service: 'sivatharshan81@gmail.com',
//   auth: {
//     user: 'sivatharshan81@gmail.com',
//     pass: '5001384Tharshan',
//   },
// });

// transporter.verify((error, success) => {
//   if (error) {
//     console.error('Error during email transporter verification:', error);
//   } else {
//     console.log('Email transporter is ready to send emails');
//   }
// });

// // API endpoint to request a password reset
// app.post('/request-reset', async (req, res) => {
//   const { email } = req.body;

//   try {
//     // Check if the email exists in the database
//     const checkEmailSql = 'SELECT * FROM building_record WHERE email = ?';
//     const user = await con.promise().query(checkEmailSql, [email]);

//     if (user[0].length === 0) {
//       res.status(404).send('User not found');
//       return;
//     }

//     // Generate a unique reset token
//     const resetToken = crypto.randomBytes(20).toString('hex');

//     // Hash the reset token (optional)
//     // const hashedResetToken = await bcrypt.hash(resetToken, 10);

//     // Send an email with the reset link
//     const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
//     const mailOptions = {
//       from: 'sivatharshan81@gmail.com',
//       to: email,
//       subject: 'Password Reset',
//       text: `Click the following link to reset your password: ${resetLink}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send('Error sending email');
//       } else {
//         console.log('Email sent:', info.response);
//         res.status(200).send('Password reset email sent successfully');
//       }
//     });
//   } catch (error) {
//     console.error('Error requesting password reset:', error);
//     res.status(500).send('Error requesting password reset');
//   }
// });

// // API endpoint to reset the password
// app.post('/reset-password', async (req, res) => {
//   const { resetToken, newpassword } = req.body;

//   try {
//     // Hash the new password
//     const hashedPassword = await bcrypt.hash(newpassword, 10);

//     // Update the user's password in the database
//     const updateSql = 'UPDATE building_record SET password = ? WHERE resetToken = ?';
//     await con.promise().query(updateSql, [hashedPassword, resetToken]);

//     res.status(200).send('Password reset successfully');
//   } catch (error) {
//     console.error('Error resetting password:', error);
//     res.status(500).send('Error resetting password');
//   }
// });

// add shop

app.post("/api/addShop", upload.single("image"), (req, res) => {
  const {
    shopname,
    address,
    email,
    contact,
    contact2,
  } = req.body;

  const image = req.file;

  const imagePath = image ? image.filename : null;
  
  const query =
    "INSERT INTO shop (shopname, address, email, contact, contact2, image) VALUES (?, ?, ?, ?, ?, ?)";

  con.query(
    query,
    [shopname, address, email, contact, contact2, imagePath],
    (err, result) => {
      if (err) {
        console.log("MySQL Insert Error: " + err.message);
        res
          .status(500)
          .json({ success: false, message: "Error storing data" });
      } else {
        console.log("Data inserted successfully");
        res
          .status(200)
          .json({ success: true, message: "Data stored successfully" });
      }
    }
  );
});

app.get("/api/addShop", (req, res) => {
  const sql = "SELECT * FROM shop";
  con.query(sql, (error, result) => {
      if(error) return res.json({Error: "Get shop error in sql"});
      return res.json({Status: "Success", Result: result})
  })
})


// add job vacancy

app.post("/jobs", upload.single("image"), (req, res) => {
  const { shopname } = req.body;
  const image = req.file; 

  if (!shopname || !image) {
    return res.status(400).json({ success: false, message: "Shop name and image are required" });
  }

  const imagePath = image ? image.filename : null;

  const sql = "INSERT INTO jobvacancies (shopname, image) VALUES (?, ?)";
  con.query(sql, [shopname, imagePath], 
    (err, result) => {
    if (err) {
      console.log("MySQL Insert Error: " + err.message);
      res
        .status(500)
        .json({ success: false, message: "Error storing data" });
    } else {
      console.log("Job posted successfully");
      res.status(200).json({ message: "Job posted successfully" });

    }
  });
});

app.get("/api/job", (req, res) => {
  const sql = "SELECT * FROM jobvacancies";
  con.query(sql, (error, result) => {
      if(error) return res.json({Error: "Get shop error in sql"});
      return res.json({Status: "Success", Result: result})
  })
})

//add education course

app.post("/educationcourse", upload.single("image"), (req, res) => {
  const { shopName } = req.body;
  const image = req.file; 

  const imagePath = image ? image.filename : null;

  const sql = "INSERT INTO education (shopname, image) VALUES (?, ?)";
  con.query(sql, [shopName, imagePath], (err, result) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Job posted successfully");
      res.status(200).json({ message: "Job posted successfully" });
      
    }
  });
});


app.get("/api/educationcourse", (req, res) => {
  const sql = "SELECT * FROM education";
  con.query(sql, (error, result) => {
      if(error) return res.json({Error: "Get shop error in sql"});
      return res.json({Status: "Success", Result: result})
  })
})

// add job role    

app.post("/api/submitJobRole", upload.fields([{name: 'image', maxCount:1}, {name: 'cv' , maxCount:1}]), (req, res) => {
  const { name, contact, experience, jobcategory} = req.body;
  const image = req.files['image'][0];
  const cv = req.files['cv'][0];

  const imagePath = image ? image.filename : null;
  const cvPath = image ? image.filename : null;

  const sql = 'INSERT INTO job_roles (name, contact, experience, jobcategory, image, cv) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [name, contact, experience, jobcategory, cvPath,imagePath];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting job role:', err);
      res.status(500).json({ message: 'Error adding job role' });
    } else {
      res.status(200).json({ message: 'Job role added successfully' });
    }
  });
});

app.get("/api/submitjobrole", (req, res) => {
  const sql = "SELECT * FROM job_roles";
  con.query(sql, (error, result) => {
      if(error) return res.json({Error: "Get shop error in sql"});
      return res.json({Status: "Success", Result: result})
  })
})

//help data table 

app.post('/api/submitForm', (req, res) => {
  const { name, email, contact, address, message } = req.body;

  con.query(
    'INSERT INTO building_help (name, email, contact, address, message) VALUES (?, ?, ?, ?, ?)',
    [name, email, contact, address, message],
    (error, results) => {
      if (error) {
        console.error('Error inserting form data into the database:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }

        res.json({ success: true, message: 'Form submitted successfully!' });
      });
    });


// add advertisement

app.post("/api/submitAdvertisement", upload.fields([{ name: "image", maxCount:1 }, { name: "receipt", maxCount:1 }]), (req, res) => {
  const { shopname, contact, message, department, category, area } = req.body;

  const image = req.files['image'][0];
  const receipt = req.files['receipt'][0];

  const imagePath = image ? image.filename : null;
  const receiptPath = image ? image.filename : null;

  const sql = "INSERT INTO advertise (shopname, contact, message, department, category, area, image, receipt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  con.query(sql, [shopname, contact, message, department, category, area, imagePath, receiptPath], (err, result) => {
    if (err) {
      console.error('Error inserting job role:', err);
      res.status(500).json({ message: 'Error adding advertisement' });
    } else {
      res.status(200).json({ message: 'Advertisement added successfully' });
    }
  });
});

 // upload cv
 
 app.post("/api/cv", upload.single("image"), async(req, res) => {
  const {
    name,
    jobcategory,
    experience,
    contact,
  } = req.body;

  const image = req.file; 

  const imagePath = image ? image.filename : null;

  const query =
    "INSERT INTO uploadcv (name, jobcategory, experience, contact, image) VALUES (?, ?, ?, ?, ?)";

  con.query(
    query,
    [name, jobcategory, experience, contact, imagePath],
    (err, result) => {
      if (err) {
        console.log("MySQL Insert Error: " + err.message);
        res
          .status(500)
          .json({ success: false, message: "Error storing data" });
      } else {
        console.log("Data inserted successfully");
        res
          .status(200)
          .json({ success: true, message: "Data stored successfully" });
      }
    }
  );
});

app.get("/api/cv", (req, res) => {
  const sql = "SELECT * FROM uploadcv";
  con.query(sql, (error, result) => {
      if(error) return res.json({Error: "Get shop error in sql"});
      return res.json({Status: "Success", Result: result})
  })
})

// Add shop item

app.post("/api/item", upload.single("image"), async(req, res) => {
  const {
    itemname,
    department,
    rentmachinetype,
    contact,
    contact1,
    price,
    description,
  } = req.body;

  const image = req.file; 

  const imagePath = image ? image.filename : null;

  const query =
    "INSERT INTO shopitem (itemname, department, rentmachinetype, contact, contact1, price, image, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  con.query(
    query,
    [itemname, department, rentmachinetype, contact, contact1, price, imagePath, description],
    (err, result) => {
      if (err) {
        console.log("MySQL Insert Error: " + err.message);
        res
          .status(500)
          .json({ success: false, message: "Error storing data" });
      } else {
        console.log("Data inserted successfully");
        res
          .status(200)
          .json({ success: true, message: "Data stored successfully" });
      }
    }
  );
});
 
app.get("/api/item", (req, res) => {
  const sql = "SELECT * FROM shopitem";
  con.query(sql, (error, result) => {
      if(error) return res.json({Error: "Get shop error in sql"});
      return res.json({Status: "Success", Result: result})
  })
})

// add item 1

app.post("/api/item1", upload.single("image"), async(req, res) => {
  const {
    itemname,
    department,
    categorytype,
    subcategory,
    contact,
    contact1,
    price,
    description,
  } = req.body;

  const image = req.file; 

  const imagePath = image ? image.filename : null;

  const query =
    "INSERT INTO shopitem1 (itemname, department, categorytype, subcategory,contact, contact1, price, image, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  con.query(
    query,
    [itemname, department, categorytype, subcategory, contact, contact1, price, imagePath, description],
    (err, result) => {
      if (err) {
        console.log("MySQL Insert Error: " + err.message);
        res
          .status(500)
          .json({ success: false, message: "Error storing data" });
      } else {
        console.log("Data inserted successfully");
        res
          .status(200)
          .json({ success: true, message: "Data stored successfully" });
      }
    }
  );
});
 
app.get("/api/item1", (req, res) => {
  const sql = "SELECT * FROM shopitem1";
  con.query(sql, (error, result) => {
      if(error) return res.json({Error: "Get shop error in sql"});
      return res.json({Status: "Success", Result: result})
  })
})

 // apply job
 
 app.post("/api/apply", upload.single("image"), async(req, res) => {
  const {
    name,
    jobposition,
    email,
    contact,
  } = req.body;

  const image = req.file; 

  const imagePath = image ? image.filename : null;

  const query =
    "INSERT INTO applyjob (name, jobposition, email, contact, image) VALUES (?, ?, ?, ?, ?)";

  con.query(
    query,
    [name, jobposition, email, contact, imagePath],
    (err, result) => {
      if (err) {
        console.log("MySQL Insert Error: " + err.message);
        res
          .status(500)
          .json({ success: false, message: "Error storing data" });
      } else {
        console.log("Data inserted successfully");
        res
          .status(200)
          .json({ success: true, message: "Job applied successfully" });
      }
    }
  );
});

app.get("/api/apply", (req, res) => {
  const sql = "SELECT * FROM applyjob";
  con.query(sql, (error, result) => {
      if(error) return res.json({Error: "Get error in sql"});
      return res.json({Status: "Success", Result: result})
  })
})

app.listen(port, () => {
    console.log(`building_record app listening on port ${port}`)
  })



