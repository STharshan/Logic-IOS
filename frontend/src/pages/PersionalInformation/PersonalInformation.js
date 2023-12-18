import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import FormContainer2 from "../../components/AllFormContainer/FormContainer2/FormContainer2";
import "./PersonalInformation.css";
import Footer from "../../components/Footer/Footer";

const PersonalInformation = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="personal-information">
      <SectionCard3   
        imgdisplay="none"
        searchLeft="270px"
      />
      <div className="personal-information-parent">
        <div className="personal-information1">Personal Information</div>
        <img
          className="regularangle-small-left-icon15"
          alt=""
          src="/regularanglesmallleft1.svg"
          onClick={onRegularangleSmallLeftIconClick}
        />
      </div>
      <FormContainer2 />
     <Footer
        footerTopmargin="712px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
    </div>
  );
};

export default PersonalInformation;
