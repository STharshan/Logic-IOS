import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../AllSectionCard/SectionCard/SectionCard";
import "./ActivatedPackagesSection.css";

const ActivatedPackagesSection = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/activated-packages");
  }, [navigate]);

  return (
    <div className="group-parent9" onClick={onGroupContainer2Click}>
      <SectionCard featurePackages="Activated Packages" />
      <div className="group-wrapper">
        <div className="rectangle-wrapper1">
          <div className="group-child19" />
        </div>
      </div>
      <img
        className="material-symbolspackage-outli-icon"
        alt=""
        src="/materialsymbolspackageoutline.svg"
      />
    </div>
  );
};

export default ActivatedPackagesSection;
