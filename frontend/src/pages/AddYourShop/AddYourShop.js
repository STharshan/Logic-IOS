import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import DarkModeFalseTypesLTitle from "../../components/DarkModeFalseTypesLTitle/DarkModeFalseTypesLTitle";
import "./AddYourShop.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const AddYourShop = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onNext = useCallback(() => {
    navigate("/your-shop");
  }, [navigate]);

    
  const [formData, setFormData] = useState({
    shopname: "",
    address: "",
    email: "",
    contact: "",
    contact2: "",
  });
  const [image, setImage] = useState(null);

 const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };

  const onAddShop  = useCallback (async () => {

    const formDataWithFiles = new FormData();
    formDataWithFiles.append("shopname", formData.shopname);
    formDataWithFiles.append("address", formData.address);
    formDataWithFiles.append("email", formData.email);
    formDataWithFiles.append("contact", formData.contact);
    formDataWithFiles.append("contact2", formData.contact2);
    formDataWithFiles.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/addShop",
        formDataWithFiles
      );

      window.alert(response.data.message);
      navigate("/your-shop");
    } catch (error) {
      console.error("Error adding shop:", error);
      window.alert("Error adding shop:", error);
    }
  }, [formData, image, navigate]);

  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/addShop')
    .then(res => {
      if(res.data.Status === "Success") {
        setData(res.data.Result);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }, [])
 


  return (
    <div className="add-your-shop">
      <Footer
        footerTopmargin="1000px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <div className="field-parent6">
        <FullNameField
          fullNameInput="Shop Name"
          fullNameInputLabel="Enter your shop name"
          inputname="shopname"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="City"
          fullNameInputLabel="Enter your city"
          inputname="city"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="101px"
        />
        <FullNameField
          fullNameInput="Address"
          fullNameInputLabel="Enter your address"
          inputname="address"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="201px"
        />
        <FullNameField
          fullNameInput="Email"
          fullNameInputLabel="Enter your email"
          inputname="email"
          inputtype="email"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="302px"
        />
        <FullNameField
          fullNameInput="Contact Number"
          fullNameInputLabel="Enter your contact number"
          inputname="contact"
          inputtype="number"
          changeEvent={handleInputChange}
          propTop="403px"
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="Contact Number 02 (if any)"
          fullNameInputLabel="Enter your contact number 02"
          inputname="contact2"
          inputtype="number"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="504px"
        />
        <FullNameField
          fullNameInput="Image"
          fullNameInputLabel="Upload your image"
          inputname="image"
          inputtype="file"
          changeEvent={handleImageChange}
          propFontColor="black"
          propTop="605px"
        />
        <Property1Primary
          button="Add Shop"
          onButtonFullContainerClick={onAddShop}
          property1PrimaryBackgroundColor="#f4b421"
          property1PrimaryWidth="342px"
          property1PrimaryPosition="absolute"
          property1PrimaryTop="730px"
        />
      </div>
      <SectionCard3 />
      <DarkModeFalseTypesLTitle
        heading="Add Your Shop"
        darkModeFalseTypesLTitleWidth="375px"
        darkModeFalseTypesLTitlePosition="absolute"
        darkModeFalseTypesLTitleTop="44px"
        onClicknext={onNext}
      />
      <img className="icround-upload-icon8" alt="" src="/icroundupload.svg" />
    </div>
  );
};

export default AddYourShop;
