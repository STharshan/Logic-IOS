import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./EducationCoursesSection.css";

const EducationCoursesSection = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/your-education-courses");
  }, [navigate]);

  return (
    <div className="group-parent11" onClick={onGroupContainer2Click}>
      <div className="your-education-courses-wrapper">
        <div className="your-education-courses2">Your education courses</div>
      </div>
      <div className="rectangle-parent5">
        <div className="group-child22" />
        <img
          className="mingcutedown-fill-icon2"
          alt=""
          src="/mingcutedownfill.svg"
        />
        <div className="group-child23" />
        <img
          className="mdieducation-outline-icon"
          alt=""
          src="/mdieducationoutline.svg"
        />
        <div className="your-education-courses3">Your education courses</div>
      </div>
    </div>
  );
};

export default EducationCoursesSection;
