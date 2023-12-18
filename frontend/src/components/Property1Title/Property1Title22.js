import { useMemo } from "react";
import "./Property1Title22.css";

const Property1Title22 = ({
  property1Title22IconWidth,
  property1Title22IconPosition,
  property1Title22IconTop,
  property1Title22IconRight,
  property1Title22IconLeft,
  property1Title22IconMaxWidth,
  property1Title22IconOverflow,
}) => {
  const property1Title22IconStyle = useMemo(() => {
    return {
      width: property1Title22IconWidth,
      position: property1Title22IconPosition,
      top: property1Title22IconTop,
      right: property1Title22IconRight,
      left: property1Title22IconLeft,
      maxWidth: property1Title22IconMaxWidth,
      overflow: property1Title22IconOverflow,
    };
  }, [
    property1Title22IconWidth,
    property1Title22IconPosition,
    property1Title22IconTop,
    property1Title22IconRight,
    property1Title22IconLeft,
    property1Title22IconMaxWidth,
    property1Title22IconOverflow,
  ]);

  return (
    <img
      className="property-1title-22-icon"
      alt=""
      src="/title-page1.svg"
      style={property1Title22IconStyle}
    />
  );
};

export default Property1Title22;
