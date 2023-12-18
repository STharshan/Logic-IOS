import { useMemo } from "react";
import "./Property1FieldPassView.css";

const Property1FieldPassView = ({
  topInvestmentStrat,
  property1FieldPassViewPosition,
  property1FieldPassViewTop,
  property1FieldPassViewLeft,
}) => {
  const property1FieldPassViewStyle = useMemo(() => {
    return {
      position: property1FieldPassViewPosition,
      top: property1FieldPassViewTop,
      left: property1FieldPassViewLeft,
    };
  }, [
    property1FieldPassViewPosition,
    property1FieldPassViewTop,
    property1FieldPassViewLeft,
  ]);

  return (
    <div
      className="property-1field-pass-view"
      style={property1FieldPassViewStyle}
    >
      <input className="guysimmmonsgmailcom-group" placeholder="Rahasia12345"/>
        <div className="guysimmmonsgmailcom" />
        <img className="ic-hide-pass-icon" alt="" src="/ic-hide-pass.svg" />
     
      <div className="top-investment-strat1">{topInvestmentStrat}</div>
    </div>
  );
};

export default Property1FieldPassView;
