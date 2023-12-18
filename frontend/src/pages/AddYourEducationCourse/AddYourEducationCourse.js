import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import DarkModeFalseTypesLTitle from "../../components/DarkModeFalseTypesLTitle/DarkModeFalseTypesLTitle";
import "./AddYourEducationCourse.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const AddYourEducationCourse = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onTTBLeftSectionIPhoneClick = useCallback(() => {
    navigate("/your-education-courses");
  }, [navigate]);

  
  const [shopName, setShopName] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const onPostJob = useCallback(async (data) => {
    try {

      if (!shopName || !imageFile) {
        console.error("Missing shopName or imageFile");
        window.alert("Missing shopName or imageFile");
        return;
      }
      const formData = new FormData();
      formData.append("shopName", shopName);
      formData.append("image", imageFile);
      const response = await axios.post("http://localhost:3001/educationcourse", formData);

    
      console.log(response.data);
      window.alert(" course posted successfully")
      navigate("/your-education-courses");
     
    } catch (error) {
      console.error("Error posting course:", error);
      window.alert("Error posting course");
    }
  }, [ shopName , imageFile]);

  const handleShopNameChange  = (e) => {
    setShopName(e.target.value);
  };

  const handleImageFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };


  return (
    <div className="add-your-job-vacancies">
      <Footer
        footerTopmargin="825px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <div className="field-parent3">
        <FullNameField
          fullNameInput="Shop Name"
          fullNameInputLabel="Enter your shop name"
          inputname="shopname"
          inputtype="text"
          changeEvent={handleShopNameChange}
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="Image"
          fullNameInputLabel="Upload your image"
          inputname="image"
          inputtype="file"
          changeEvent={handleImageFileChange}
          propFontColor="black"
          propTop="95px"
        />
        <Property1Primary
          button="Post"
          onButtonFullContainerClick={onPostJob}
          property1PrimaryBackgroundColor="#f4b421"
          property1PrimaryWidth="342px"
          property1PrimaryPosition="absolute"
          property1PrimaryTop="220px"
        />
      </div>
      <SectionCard3/>
      <DarkModeFalseTypesLTitle
        heading="Add Your Education Course"
        headingSize="23px"
        darkModeFalseTypesLTitleWidth="375px"
        darkModeFalseTypesLTitlePosition="absolute"
        darkModeFalseTypesLTitleTop="44px"
        onClicknext={onTTBLeftSectionIPhoneClick}
      />
      <img className="icround-upload-icon4" alt="" src="/icroundupload.svg" />
    </div>
  );
};

export default AddYourEducationCourse;
