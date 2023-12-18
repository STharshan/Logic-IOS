import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import DarkModeFalseTypesLTitle from "../../components/DarkModeFalseTypesLTitle/DarkModeFalseTypesLTitle";
import "./AddYourJobVacancies1.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const AddYourJobVacancies1 = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onTTBLeftSectionIPhoneClick = useCallback(() => {
    navigate("/your-job-vacancies");
  }, [navigate]);

  const [formData, setFormData] = useState({
    shopname: "",
  });

  const [image, setImage] = useState(null);

  const handleimageChange = (e) => {
    setImage(e.target.files[0]);
  };


  const onHandlesubmit = useCallback(async () => {
    
    const formDataWithFiles = new FormData();
    formDataWithFiles.append("shopname", formData.shopname);
    formDataWithFiles.append("image", image);

try {
    const response = await axios.post("http://localhost:3001/jobs", formDataWithFiles);
      window.alert(response.data.message);
      navigate("/your-job-vacancies");
  } catch (err) {
    console.error("Error applying JOB", err);
    window.alert("Error applying JOB:", err);
  }
}, [formData, image, navigate]);

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  return (
    <div className="add-your-job-vacancies1">
      <Footer
        footerTopmargin="749px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <div className="field-parent4">
        <FullNameField
          fullNameInput="Shop Name"
          fullNameInputLabel="Enter your shop name"
          inputname="shopname"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="0px"
        />
        <FullNameField
          fullNameInput="Image"
          fullNameInputLabel="Upload your image"
          inputname="image"
          inputtype="file"
          changeEvent={handleimageChange}
          propFontColor="black"
          propTop="95px"
        />
        <Property1Primary
          button="Post"
          onButtonFullContainerClick={onHandlesubmit}
          property1PrimaryBackgroundColor="#f4b421"
          property1PrimaryWidth="342px"
          property1PrimaryPosition="absolute"
          property1PrimaryTop="220px"
        />
      </div>
      <SectionCard3/>
      <DarkModeFalseTypesLTitle
        heading="Add Your Job Vacancies"
        headingSize="26px"
        showIcon={false}
        iconVisible={false}
        darkModeFalseTypesLTitleWidth="375px"
        darkModeFalseTypesLTitlePosition="absolute"
        darkModeFalseTypesLTitleTop="44px"
        onClicknext={onTTBLeftSectionIPhoneClick}
      />
      <img className="icround-upload-icon5" alt="" src="/icroundupload.svg" />
    </div>
  );
};

export default AddYourJobVacancies1;
