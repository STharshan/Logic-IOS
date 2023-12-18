import { useCallback, useMemo } from "react";
import "./DarkModeFalseTypesLTitle.css";
import SFOrSVGSFLabelOn1 from "../SFOrSVGSFLabelOn1/SFOrSVGSFLabelOn1";

const DarkModeFalseTypesLTitle = ({
  heading,
  darkModeFalseTypesLTitleWidth,
  darkModeFalseTypesLTitlePosition,
  darkModeFalseTypesLTitleTop,
  darkModeFalseTypesLTitleLeft,
  headingSize,
  onClicknext
}) => {
  const darkModeFalseTypesLTitleStyle = useMemo(() => {
    return {
      width: darkModeFalseTypesLTitleWidth,
      position: darkModeFalseTypesLTitlePosition,
      top: darkModeFalseTypesLTitleTop,
      left: darkModeFalseTypesLTitleLeft,
    };
  }, [
    darkModeFalseTypesLTitleWidth,
    darkModeFalseTypesLTitlePosition,
    darkModeFalseTypesLTitleTop,
    darkModeFalseTypesLTitleLeft,
  ]);

  const headingStyle = useMemo(() => {
    return {
      fontSize:headingSize
    };
  }, [headingSize]);


  return (
    <div
      className="dark-modefalse-typesl-title"
      style={darkModeFalseTypesLTitleStyle}
    >
      <div className="left-center-right">
        <SFOrSVGSFLabelOn1
          label="Close"
          leftTitleFontFamily="'SF Pro Text'"
          onTTBLeftSectionIPhoneClick={onClicknext}
        />
 
      </div>
        <div className="center" >
          <b className="large-title" style={headingStyle}>{heading}</b>
        </div>
    </div>
  );
};

export default DarkModeFalseTypesLTitle;
