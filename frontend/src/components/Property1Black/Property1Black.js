import { useMemo } from "react";
import "./Property1Black.css";

const Property1Black = ({
  property1BlackPosition,
  property1BlackTop,
  property1BlackLeft,
  property1BlackWidth,
  property1BlackHeight,
  property1BlackRight,
  property1BlackBottom,
  timeFontWeight,
  timeFontFamily,
  batteryLeft,
  batteryTop,
}) => {
  const property1BlackStyle = useMemo(() => {
    return {
      position: property1BlackPosition,
      top: property1BlackTop,
      left: property1BlackLeft,
      width: property1BlackWidth,
      height: property1BlackHeight,
      right: property1BlackRight,
      bottom: property1BlackBottom,
    };
  }, [
    property1BlackPosition,
    property1BlackTop,
    property1BlackLeft,
    property1BlackWidth,
    property1BlackHeight,
    property1BlackRight,
    property1BlackBottom,
  ]);

  const timeStyle = useMemo(() => {
    return {
      fontWeight: timeFontWeight,
      fontFamily: timeFontFamily,
    };
  }, [timeFontWeight, timeFontFamily]);

  const batteryStyle = useMemo(() => {
    return {
      left: batteryLeft,
      top: batteryTop,
    };
  }, [batteryLeft,batteryTop]);


  return (
    <div className="property-1black" style={property1BlackStyle}>
      <div className="action">
        <div className="time" style={timeStyle}>
          9:41
        </div>
      </div>
      <img className="container-icon" style={batteryStyle} alt="" src="/container.svg" />
    </div>
  );
};

export default Property1Black;
