import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import DarkModeFalseTypesLTitle from "../../components/DarkModeFalseTypesLTitle/DarkModeFalseTypesLTitle";
import "./ChangePassword.css";
import Footer from "../../components/Footer/Footer";

const ChangePassword = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";


  const navigate = useNavigate();

  const onTTBLeftSectionIPhoneClick = useCallback(() => {
    navigate("/personal-information");
  }, [navigate]);

  const onTTBRightSectionIPhoneClick = useCallback(() => {
    navigate("/personal-information");
  }, [navigate]);

  return (
    <div className="change-password">
     <Footer
        footerTopmargin="712px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <div className="field-parent7">
        <FullNameField
          fullNameInput="Current Password"
          fullNameInputLabel="Enter your current password"
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="New Password"
          fullNameInputLabel="Enter your new password"
          propTop="101px"
          propFontColor="black"
        />
        <FullNameField
          fullNameInput="Confirm Password"
          fullNameInputLabel="Confirm your password"
          propTop="202px"
          propFontColor="black"
        />
        <Property1Primary
          button="Update"
          property1PrimaryBackgroundColor="#f4b421"
          property1PrimaryWidth="342px"
          property1PrimaryPosition="absolute"
          property1PrimaryTop="320px"
        />
      </div>
      <SectionCard3/>

      <DarkModeFalseTypesLTitle
        headingSize="23px"
        heading="Change Password"
        darkModeFalseTypesLTitleWidth="375px"
        darkModeFalseTypesLTitlePosition="absolute"
        darkModeFalseTypesLTitleTop="44px"
        onClicknext={onTTBLeftSectionIPhoneClick}
       />
      <img className="ic-hide-pass-icon4" alt="" src="/ic-hide-pass.svg" />
      <img className="ic-hide-pass-icon5" alt="" src="/ic-hide-pass.svg" />
      <img className="ic-hide-pass-icon6" alt="" src="/ic-hide-pass.svg" />
    </div>
  );
};

export default ChangePassword;
