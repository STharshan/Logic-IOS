import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import DarkModeFalseTypesLTitle from "../../components/DarkModeFalseTypesLTitle/DarkModeFalseTypesLTitle";
import "./RequestForAdvertisement.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const RequestForAdvertisement = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onNextclose = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const [formData, setFormData] = useState({
    shopname: "",
    contact: "",
    message: "",
    department:"",
    category:"",
    area:"",
  });

  const [receipt, setReceipt] = useState(null);
  const [image, setImage] = useState(null);

  const handleReceiptChange = (e) => {
    setReceipt(e.target.files[0]);
  };

  const handleImageFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmitAD = useCallback(async () => {
    
      const formDataWithFiles = new FormData();
      formDataWithFiles.append("shopname", formData.shopname);
      formDataWithFiles.append("contact", formData.contact);
      formDataWithFiles.append("message", formData.message);
      formDataWithFiles.append("department", formData.department);
      formDataWithFiles.append("category", formData.category);
      formDataWithFiles.append("area", formData.area);
      formDataWithFiles.append("image", image);
      formDataWithFiles.append("receipt", receipt);

  try {
      const response = await axios.post("http://localhost:3001/api/submitAdvertisement", formDataWithFiles);
        window.alert(response.data.message);
        navigate("/menu");
    } catch (error) {
      console.error("Error submitting advertisement:", error);
      window.alert("Error adding job role:", error);
    }
  }, [formData, receipt , image, navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="request-for-advertisement">
      <SectionCard3
        imgdisplay="none"
        belldisplay="none"
        searchdisplay="none"
      />
      <DarkModeFalseTypesLTitle
        heading="Request Advertisement"
        darkModeFalseTypesLTitleWidth="375px"
        darkModeFalseTypesLTitlePosition="absolute"
        darkModeFalseTypesLTitleTop="44px"
        headingSize="24px"
        onClicknext={onNextclose}
      />
      <div className="field-group">
        <FullNameField
          fullNameInput="Shop Name"
          fullNameInputLabel="Enter your shop name"
          inputname="shopname"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="Contact Number"
          fullNameInputLabel="Enter your contact number"
          inputname="contact"
          inputtype="number"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="101px"
        />
        <FullNameField
          fullNameInput="Message"
          fullNameInputLabel="Enter Your Message"
          inputname="message"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="200px"
          propHeight="140px"
        />  
        <FullNameField
          fullNameInput="Department"
          fullNameInputLabel="Enter Your department"
          inputname="department"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="390px"
        /> 
        <FullNameField
          fullNameInput="Category Type"
          fullNameInputLabel="Enter Your category"
          inputname="category"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="490px"
        /> 
        <FullNameField
          fullNameInput="Areas that can be supplied"
          fullNameInputLabel="Enter you can be supplied"
          inputname="area"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="590px"
        />
        <FullNameField
          fullNameInput="Image"
          fullNameInputLabel="Upload your image"
          inputname="image"
          inputtype="file"
          changeEvent={handleImageFileChange}
          propFontColor="black"
          propTop="690px"
        />
        <FullNameField
          fullNameInput="Payment Receipt"
          fullNameInputLabel="Upload your payment receipt"
          inputname="image"
          inputtype="file"
          changeEvent={handleReceiptChange}
          propFontColor="black"
          propTop= "790px"
        />
        <Property1Primary
          button="Submit"
          onButtonFullContainerClick={onSubmitAD}
          property1PrimaryBackgroundColor="#f4b421"
          property1PrimaryWidth="342px"
          property1PrimaryPosition="absolute"
          property1PrimaryTop="909px"
        />
      </div>
      <Footer
        footerTopmargin="1170px"
        titleHome="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />


    </div>
  );
};

export default RequestForAdvertisement;
