import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ActivatedPackagesSection from "../../components/ActivatedPackages/ActivatedPackagesSection";
import SectionCard2 from "../../components/AllSectionCard/SectionCard2/SectionCard2";
import EducationCoursesSection from "../../components/EducationCourse/EducationCoursesSection";
import HelpSection from "../../components/HelpSection/HelpSection";
import SectionCard from "../../components/AllSectionCard/SectionCard/SectionCard";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./Menu.css";

const Menu = () => {

  const line = "mingcute_menu-line"

  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/request-for-advertisement");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/personal-information");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/your-shop");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/your-job-vacancies");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/your-job-roles");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/help");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/onboarding");
  }, [navigate]);

  return (
    <div className="menu">
      <div className="group-parent3" onClick={onGroupContainer1Click}>
        <div className="rectangle-frame">
          <div className="group-child3" />
        </div>
        <div className="request-advertisement-parent">
          <div className="request-advertisement">Request Advertisement</div>
          <img
            className="riadvertisement-line-icon"
            alt=""
            src="/riadvertisementline.svg"
          />
        </div>
      </div>
      <div className="group-parent4">
        <div className="group-parent5" onClick={onGroupContainer2Click}>
          <img className="group-child4" alt="" src="/group-38138.svg" />
          <div className="personal-information2">Personal Information</div>
          <img className="group-child5" alt="" src="/group-38145.svg" />
        </div>
        <ActivatedPackagesSection />
        <SectionCard2
          pageTitle="Your shop"
          iconImageUrl="/mdishopoutline.svg"
          onGroupContainer10Click={onGroupContainer3Click}
        />
        <SectionCard2
          pageTitle="Your Job vacancies"
          iconImageUrl="/mdiusersearchoutline2.svg"
          propTop="38.3%"
          propBottom="51.06%"
          onGroupContainer10Click={onGroupContainer4Click}
        />
        <EducationCoursesSection />
        <HelpSection
          buttonText="Help"
          onGroupContainer19Click={onGroupContainer6Click}
        />
        <HelpSection
          buttonText="Logout"
          propTop="89.36%"
          propBottom="0%"
          onGroupContainer19Click={onGroupContainer7Click}
        />
        <div className="group-parent6" onClick={onGroupContainer5Click}>
          <SectionCard featurePackages="Hire me" />
          <img className="group-child5" alt="" src="/group-38159.svg" />
        </div>
      </div>
      <SectionCard3
         imageName={line}
         searchLeft="240px"
         imgdisplay="none"
         bellLeft="10px"
         lineLeft="-15px"
      />
    </div>
  );
};

export default Menu;
