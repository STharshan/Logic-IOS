import { useCallback, useMemo } from "react";
import Property1Primary from "../../Property1Primary/Property1Primary";
import "./CompanyCard2.css";
import { useNavigate } from "react-router-dom";

const CompanyCard2 = ({ propTop, propBottom }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const navigate = useNavigate();

  const onApply = useCallback(() => {
    navigate("/job-vacancies1");
  }, [navigate]);

  return (
    <div className="group-parent7" style={groupDivStyle}>
      <div className="company-name-here-parent">
        <div className="company-name-here">Company Name here</div>
        <div className="div13">2020-10-13</div>
        <div className="ellipse-div" />
        <div className="share-parent">
          <div className="share">Share</div>
          <img className="uilshare-icon" alt="" src="/uilshare.svg" />
        </div>
        <img className="group-child11" alt="" src="/rectangle-93@2x.png" />
      </div>
      <Property1Primary
        button="Apply Now"
        onButtonFullContainerClick={onApply}
        property1PrimaryBackgroundColor="#f4b421"
        property1PrimaryWidth="342px"
        property1PrimaryPosition="absolute"
        property1PrimaryTop="353px"
        property1PrimaryLeft="0px"
        property1PrimaryCursor="unset"
      />
    </div>
  );
};

export default CompanyCard2;
