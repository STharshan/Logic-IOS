import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer3 from "../../components/Footer/Footer";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import DarkModeFalseTypesLTitle from "../../components/DarkModeFalseTypesLTitle/DarkModeFalseTypesLTitle";
import "./AddYourJobRoles.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const AddYourJobRoles = () => {
  
  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onTTBLeftSectionIPhoneClick = useCallback(() => {
    navigate("/your-job-roles");
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    experience: "",
    jobcategory: "",
  });

    const [file, setFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);
  
    const handleCVChange = (e) => {
      setFile(e.target.files[0]);
    };

    const handleImageFileChange = (e) => {
      setImageFile(e.target.files[0]);
    };


    const onAddjobClick = useCallback(async () => {
      const formDataWithFiles = new FormData();
      formDataWithFiles.append("name", formData.name);
      formDataWithFiles.append("contact", formData.contact);
      formDataWithFiles.append("experience", formData.experience);
      formDataWithFiles.append("jobcategory", formData.jobcategory);
      formDataWithFiles.append("cv", file);
      formDataWithFiles.append("image", imageFile);
  
      try {
        const response = await axios.post(
          "http://localhost:3001/api/submitJobRole",
          formDataWithFiles
        );
        window.alert(response.data.message);
        navigate("/your-job-roles");
      } catch (error) {
        console.error("Error adding job role:", error);
        window.alert("Error adding job role:", error);
      }
    }, [formData, file, imageFile, navigate]);
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

  return (
    <div className="add-your-job-roles">
      <Footer
        footerTopmargin="900px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <div className="field-parent5">
        <FullNameField
          fullNameInput="Your Name"
          fullNameInputLabel="Enter your name"
          inputname="name"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="Experience of years"
          fullNameInputLabel="Enter your experience of year"
          inputname="experience"
          inputtype="number"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="303px"
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
          fullNameInput="Profile Image ( 00x00 pixel )"
          fullNameInputLabel="Upload your profile image"
          inputname="image"
          inputtype="file"
          changeEvent={handleImageFileChange}
          propFontColor="black"
          propTop="404px"
        />
        <FullNameField
          fullNameInput="Job Category"
          fullNameInputLabel="Enter your j0b category"  
          inputname="jobcategory"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"         
          propTop="202px"
        />
        <FullNameField
          fullNameInput="Your CV"
          fullNameInputLabel="Upload your CV"
          inputname="cv"
          inputtype="file"
          changeEvent={handleCVChange}
          propFontColor="black"
          propTop="505px"
        />
        <Property1Primary
          button="Add Job Role"
          onButtonFullContainerClick={onAddjobClick}
          property1PrimaryBackgroundColor="#f4b421"
          property1PrimaryWidth="342px"
          property1PrimaryPosition="absolute"
          property1PrimaryTop="630px"
        />
      </div>
      <SectionCard3/>
      <DarkModeFalseTypesLTitle
        heading="Add Your Job Roles"
        headingSize="25px"
        darkModeFalseTypesLTitleWidth="375px"
        darkModeFalseTypesLTitlePosition="absolute"
        darkModeFalseTypesLTitleTop="44px"
        onClicknext={onTTBLeftSectionIPhoneClick}
      />
      <img className="icround-upload-icon6" alt="" src="/icroundupload.svg" />
      <img className="icround-upload-icon7" alt="" src="/icroundupload.svg" />
      <img
        className="evaarrow-ios-downward-fill-icon8"
        alt=""
        src="/evaarrowiosdownwardfill.svg"
      />
    </div>
  );
};

export default AddYourJobRoles;
