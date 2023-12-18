import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import DarkModeFalseTypesLTitle from "../../components/DarkModeFalseTypesLTitle/DarkModeFalseTypesLTitle";
import "./JobVacancies.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const JobVacancies = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline yellow";

  const navigate = useNavigate();

  const onTTBLeftSectionIPhoneClick = useCallback(() => {
    navigate("/job-vacancies");
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    jobposition: "",
    email: "",
    contact: "",
  });

  const [image, setImage] = useState(null);

  const handleimageChange = (e) => {
    setImage(e.target.files[0]);
  };


  const onHandlesubmit = useCallback(async () => {
    
    const formDataWithFiles = new FormData();
    formDataWithFiles.append("name", formData.name);
    formDataWithFiles.append("jobposition", formData.jobposition);
    formDataWithFiles.append("email", formData.email);
    formDataWithFiles.append("contact", formData.contact);
    formDataWithFiles.append("image", image);

try {
    const response = await axios.post("http://localhost:3001/api/apply", formDataWithFiles);
      window.alert(response.data.message);
      navigate("/job-vacancies");
  } catch (error) {
    console.error("Error applying JOB", error);
    window.alert("Error applying JOB:", error);
  }
}, [formData, image, navigate]);

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};


  return (
    <div className="job-vacancies">
      <div className="field-parent">
        <FullNameField
          fullNameInput="Full Name"
          fullNameInputLabel="Enter your full name"
          inputtype="text"
          inputname="name"
          changeEvent={handleInputChange}
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="Job Position"
          fullNameInputLabel="Enter your job position"
          inputname="jobposition"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="101px"
          propFontSize="black"
        />
        <FullNameField
          fullNameInput="Email"
          fullNameInputLabel="Enter your email address"
          inputname="email"
          inputtype="email"
          changeEvent={handleInputChange}
          propTop="202px"
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="Contact Number"
          fullNameInputLabel="Enter your contact number"
          inputname="contact"
          inputtype="number"
          changeEvent={handleInputChange}
          propTop="303px"
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="Upload CV"
          fullNameInputLabel="Upload your CV"
          inputname="image"
          inputtype="file"
          propFontColor="black"
          changeEvent={handleimageChange}
          propTop="404px"
        />
        <img className="icround-upload-icon" alt="" src="/icroundupload.svg" />
        <img
          className="evaarrow-ios-downward-fill-icon"
          alt=""
          src="/evaarrowiosdownwardfill.svg"
        />
        <Property1Primary
          button="Submit"
          onButtonFullContainerClick={onHandlesubmit}
          property1PrimaryBackgroundColor="#f4b421"
          property1PrimaryWidth="342px"
          property1PrimaryPosition="absolute"
          property1PrimaryTop="513px"
        />
      </div>
      <Footer
        footerTopmargin="740px"
        titleVacancy="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <SectionCard3/>
      <DarkModeFalseTypesLTitle
        heading="Apply this job"
        darkModeFalseTypesLTitleWidth="375px"
        darkModeFalseTypesLTitlePosition="absolute"
        darkModeFalseTypesLTitleTop="44px"
        onClicknext={onTTBLeftSectionIPhoneClick}
      />
    </div>
  );
};

export default JobVacancies;
