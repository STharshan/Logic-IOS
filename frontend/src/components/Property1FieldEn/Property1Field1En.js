import { useMemo } from "react";
import "./Property1Field1En.css";

const Property1Field1En = ({
  topInvestmentStrat,
  property1Field1EnPosition,
  property1Field1EnTop,
  property1Field1EnLeft,
}) => {
  const property1Field1EnStyle = useMemo(() => {
    return {
      position: property1Field1EnPosition,
      top: property1Field1EnTop,
      left: property1Field1EnLeft,
    };
  }, [property1Field1EnPosition, property1Field1EnTop, property1Field1EnLeft]);

  return (
    <div className="property-1field-1-en" style={property1Field1EnStyle}>
      <div className="top-investment-strat-parent">
        <div className="top-investment-strat2">{topInvestmentStrat}</div>
        <input type="email" className="guysimmmonsgmailcom-wrapper"/>
      </div>
    </div>
  );
};

export default Property1Field1En;
