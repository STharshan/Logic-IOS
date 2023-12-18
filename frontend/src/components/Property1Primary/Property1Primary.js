import { useMemo } from "react";
import "./Property1Primary.css";

const Property1Primary = ({
  button,
  property1PrimaryBackgroundColor,
  property1PrimaryWidth,
  property1PrimaryPosition,
  property1PrimaryTop,
  property1PrimaryLeft,
  property1PrimaryCursor,
  onButtonFullContainerClick,
}) => {
  const property1PrimaryStyle = useMemo(() => {
    return {
      backgroundColor: property1PrimaryBackgroundColor,
      width: property1PrimaryWidth,
      position: property1PrimaryPosition,
      top: property1PrimaryTop,
      left: property1PrimaryLeft,
      cursor: property1PrimaryCursor,
    };
  }, [
    property1PrimaryBackgroundColor,
    property1PrimaryWidth,
    property1PrimaryPosition,
    property1PrimaryTop,
    property1PrimaryLeft,
    property1PrimaryCursor,
  ]);

  return (
    <div
      className="property-1primary"
      style={property1PrimaryStyle}
      onClick={onButtonFullContainerClick}
    >
      <div className="hi-devina-idzni">{button}</div>
    </div>
  );
};

export default Property1Primary;
