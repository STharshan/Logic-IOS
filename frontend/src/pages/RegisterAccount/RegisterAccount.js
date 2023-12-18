import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Property1Black from "../../components/Property1Black/Property1Black";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import "./RegisterAccount.css";
import Axios from "axios";

const RegisterAccount = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const navigate = useNavigate();

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewpassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmpassword(e.target.value);
  };
  
  const register = async () => {
    try{
     if (newpassword !== confirmpassword){
       window.alert("Passwords do not match!");
       return;
     }

     if (!isValidEmailFormat(email)) {
       window.alert("Invalid email format!");
       return;
     }
    
     const response = await Axios.post("http://localhost:3001/register", {
       firstname,
       lastname,
       province,
       district,
       city,
       email,
       newpassword,
      
     });
     setRegisterStatus(response.data.message);

     if(response.status ===201){
       window.alert("ACCOUNT CREATED SUCCESSFULLY");
     }
   }catch (error){
     console.error(error);
     window.alert(`Error registering user: ${error.response.data.message || error.message}`);
   }

 }

 const isValidEmailFormat = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


  const onHaveAnAccountClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className="register-account">
      <Property1Black
        property1BlackPosition="absolute"
        batteryLeft="280px"
      />
      <b className="more3">Register Account</b>
      <Property1Primary
        button="Continue"
        property1PrimaryBackgroundColor="#f4b421"
        property1PrimaryWidth="342px"
        property1PrimaryPosition="absolute"
        property1PrimaryTop="1050px"
        property1PrimaryLeft="17px"
        property1PrimaryCursor="pointer"
        onButtonFullContainerClick={register}
      />
      <div className="have-an-account-container" onClick={onHaveAnAccountClick}>
        <span>Have an Account?</span>
        <span className="span">{`  `}</span>
        <span className="sign-in">Sign In</span>
      </div>
      <FullNameField
        fullNameInput="First Name"
        fullNameInputLabel="Enter your first name"
        changeEvent={handleFirstnameChange}
        propTop="228px"
        propLeft="17px"
        propFontColor="black"
        inputtype="text"
        inputname="firstname"
      />
      <FullNameField
        fullNameInput="Last Name"
        fullNameInputLabel="Enter your last name"
        inputtype="text"
        inputname="lastname"
        changeEvent={handleLastnameChange}
        propTop="329px"
        propLeft="17px"
        propFontColor="black"
      />
      <FullNameField
        fullNameInput="Province"
        fullNameInputLabel="Enter your province"
        changeEvent={handleProvinceChange}
        propTop="430px"
        propLeft="17px"
        propFontColor="black"
        inputtype="text"
        inputname="province"
      />
      <FullNameField
        fullNameInput="District"
        fullNameInputLabel="Enter your district"
        inputtype="text"
        inputname="district"
        changeEvent={handleDistrictChange}
        propTop="530px"
        propLeft="17px"
        propFontColor="black"
      />
      <FullNameField
        fullNameInput="Nearest City"
        fullNameInputLabel="Enter your nearest city"
        inputtype="text"
        inputname="city"
        changeEvent={handleCityChange}
        propTop="630px"
        propLeft="17px"
        propFontColor="black"
      />
      <img className="city" alt="city" src="/fluent_location-12-filled.png" />
      <FullNameField
        fullNameInput="Email"
        fullNameInputLabel="Enter your email"
        inputtype="email"
        inputname="email"
        changeEvent={handleEmailChange}
        propTop="730px"
        propLeft="17px"
        propFontColor="black"
      />
      <FullNameField
        fullNameInput="New Password"
        fullNameInputLabel="Enter your new password"
        changeEvent={handleNewPasswordChange}
        inputtype="password"
        propTop="831px"
        propLeft="17px"
        propFontColor="black"
      />
      <img className="ic-hide-pass-icon1" alt="" src="/ic-hide-pass.svg" />
      <FullNameField
        fullNameInput="Confirm Password"
        fullNameInputLabel="Confirm your password"
        changeEvent={handleConfirmPasswordChange}
        inputtype="password"
        propTop="932px"
        propLeft="17px"
        propFontColor="black"
      />
      <img className="ic-hide-pass-icon2" alt="" src="/ic-hide-pass.svg" />
      <div className="register-account-child">
        <img alt="" src="/rectangle-4440@2x.png" />
      </div>
    </div>
  );
};

export default RegisterAccount;
