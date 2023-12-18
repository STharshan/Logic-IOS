import { useMemo } from "react";
import "./CompanyCard1.css";

const CompanyCard1 = ({ propTop, propBottom }) => {
  const groupDiv6Style = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div className="company-name-here-container" style={groupDiv6Style}>
      <div className="company-name-here2">Company Name here</div>
      <div className="div43">2020-10-13</div>
      <div className="group-child26" />
      <div className="share-container">
        <div className="share2">Share</div>
        <img className="uilshare-icon2" alt="" src="/uilshare.svg" />
      </div>
      <img className="group-child27" alt="" src="/rectangle-93@2x.png" />
    </div>
  );
};

export default CompanyCard1;
