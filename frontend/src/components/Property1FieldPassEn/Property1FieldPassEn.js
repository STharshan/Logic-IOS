import { useMemo } from "react";
import "./Property1FieldPassEn.css";

const Property1FieldPassEn = ({
  topInvestmentStrat,
  property1FieldPassEnPosition,
  property1FieldPassEnTop,
  property1FieldPassEnLeft,
}) => {
  const property1FieldPassEnStyle = useMemo(() => {
    return {
      position: property1FieldPassEnPosition,
      top: property1FieldPassEnTop,
      left: property1FieldPassEnLeft,
    };
  }, [
    property1FieldPassEnPosition,
    property1FieldPassEnTop,
    property1FieldPassEnLeft,
  ]);

  return (
    <div className="property-1field-pass-en" style={property1FieldPassEnStyle}>
      <input className="guysimmmonsgmailcom-parent" type="password"/>
        <img className="ic-view-pass-icon" alt="" src="/ic-view-pass.svg" />
      <div className="top-investment-strat">{topInvestmentStrat}</div>
    </div>
  );
};

export default Property1FieldPassEn;
