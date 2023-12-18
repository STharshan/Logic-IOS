import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import DarkModeFalseTypesLTitle from "../../components/DarkModeFalseTypesLTitle/DarkModeFalseTypesLTitle";
import "./JobSeeker.css";
import Footer from "../../components/Footer/Footer";
import SFOrSVGSFLabelOn1 from "../../components/SFOrSVGSFLabelOn1/SFOrSVGSFLabelOn1";
import axios from "axios";


const JobSeeker = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onTTBLeftSectionIPhoneClick = useCallback(() => {
    navigate("/job-seeker");
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    jobcategory: "",
    experience: "",
    contact: "",
  });

  const [image, setImage] = useState(null);

  const handleCvChange = (e) => {
    setImage(e.target.files[0]);
  };


  const onGotojobSeeker = useCallback(async () => {
    
    const formDataWithFiles = new FormData();
    formDataWithFiles.append("name", formData.name);
    formDataWithFiles.append("jobcategory", formData.jobcategory);
    formDataWithFiles.append("experience", formData.experience);
    formDataWithFiles.append("contact", formData.contact);
    formDataWithFiles.append("image", image);

try {
    const response = await axios.post("http://localhost:3001/api/cv", formDataWithFiles);
      window.alert(response.data.message);
      navigate("/job-seeker");
  } catch (error) {
    console.error("Error submitting CV", error);
    window.alert("Error adding CV:", error);
  }
}, [formData, image, navigate]);

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};


  return (
    <div className="job-seeker">
    <Footer
        footerTopmargin="755px"
        titleHome="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
      <div className="field-container">
        <FullNameField
          fullNameInput="Full Name"
          fullNameInputLabel="Enter your full name"
          changeEvent={handleInputChange}
          inputname="name"
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="Job Category"
          fullNameInputLabel="Enter your Job Category"
          inputtype="text"
          changeEvent={handleInputChange}
          inputname="jobcategory"
          propTop="101px"
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="Years Of Experience"
          fullNameInputLabel="Enter your year of experience"
          inputname="experience"
          changeEvent={handleInputChange}
          inputtype="number"
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
          inputtype="file"
          inputname="image"
          changeEvent={handleCvChange}
          propTop="404px"
          propTextAlign="left"
        />
        <img className="icround-upload-icon1" alt="" src="/icroundupload.svg" />
        <img
          className="evaarrow-ios-downward-fill-icon2"
          alt=""
          src="/evaarrowiosdownwardfill.svg"
        />
        <Property1Primary
          button="Submit"
          property1PrimaryBackgroundColor="#f4b421"
          property1PrimaryWidth="342px"
          property1PrimaryPosition="absolute"
          property1PrimaryTop="513px"
          property1PrimaryLeft="0px"
          property1PrimaryCursor="unset"
          onButtonFullContainerClick={onGotojobSeeker}
        />
      </div>
      <SectionCard3 />
      <DarkModeFalseTypesLTitle
        heading="Uplaod CV"
        darkModeFalseTypesLTitlePosition="absolute"
        darkModeFalseTypesLTitleTop="44px"
        onClicknext={onTTBLeftSectionIPhoneClick}
      />
    </div>
  );
};

export default JobSeeker;
