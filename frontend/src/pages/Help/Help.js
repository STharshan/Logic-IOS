import FormContainer from "../../components/AllFormContainer/FormContainer/FormContainer";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import Header from "../../components/Header/Header";
import "./Help.css";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";

const Help = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onCreate = async () => {

    try {
      const response = await axios.post('http://localhost:3001/api/submitForm', formData);
      window.alert("Form submitted successfully!");
    } catch (error) {
      window.alert('Error submitting form:', error);
    }
  };


  return (
    <div className="help">
      <Footer
        footerTopmargin="1454px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <b className="customer-support">Customer Support:</b>
      <div className="for-general-inquiries">
        For general inquiries, product information, or assistance with your
        orders, our dedicated customer support team is ready to help.
      </div>
      <FormContainer />
      <div className="cards-iphone">
        <div className="card-text">
          <div className="card">
            <div className="div8">
              <img src="/user.png"/>
            </div>
          </div>
          <div className="text1">
            <div className="title12">Contact</div>
            <div className="subheading">(01) 1234 56798</div>
            <div className="subheading">(01) 1234 56798</div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card-text">
          <div className="card">
            <img src="/home.png"/>
          </div>
          <div className="text2">
            <div className="title13">Ship to</div>
            <div className="subheading2">
              123 Flinders Street, Melbourne VIC 3000
            </div>
          </div>
        </div>
      </div>
      <img className="skill-iconstwitter" alt="" src="/skilliconstwitter.svg" />
      <img className="logoswhatsapp-icon" alt="" src="/logoswhatsappicon.svg" />
      <img className="logosfacebook-icon" alt="" src="/logosfacebook.svg" />
      <b className="send-us-a">Send Us a Message:</b>
      <div className="have-a-specific">
        Have a specific question or request? Use the form below to send us a
        message, and we'll get back to you as soon as possible.
      </div>
      <FullNameField
        fullNameInput="Your Full Name"
        fullNameInputLabel="Enter your full name"
        inputname="name"
        inputtype="text"
        changeEvent={handleInputChange}
        propFontColor="black"
        propTop="741px"
        propLeft="16px"
      />
      <FullNameField
        fullNameInput="Address"
        fullNameInputLabel="Enter your address"
        inputname="address"
        inputtype="text"
        changeEvent={handleInputChange}
        propFontColor="black"
        propTop="1044px"
        propLeft="16px"
      />
      <FullNameField
        fullNameInput="Email"
        fullNameInputLabel="Enter your email"
        inputname="email"
        inputtype="email"
        changeEvent={handleInputChange}
        propFontColor="black"
        propTop="842px"
        propLeft="16px"
      />
      <FullNameField
        fullNameInput="Contact Number"
        fullNameInputLabel="Enter your contact number"
        inputname="contact"
        inputtype="number"
        changeEvent={handleInputChange}
        propFontColor="black"
        propTop="943px"
        propLeft="16px"
      />
      <FullNameField
        fullNameInput="Message"
        fullNameInputLabel="Enter your message"
        inputname="message"
        inputtype="text"
        changeEvent={handleInputChange}
        propFontColor="black"
        propTop="1143px"
        propLeft="16px"
        propHeight="140px"
      />
      <Property1Primary
        button="Submit"
        onButtonFullContainerClick={onCreate}
        property1PrimaryBackgroundColor="#f4b421"
        property1PrimaryWidth="342px"
        property1PrimaryPosition="absolute"
        property1PrimaryTop="1357px"
        property1PrimaryLeft="17px"
      />
      <Header />
    </div>
  );
};

export default Help;
