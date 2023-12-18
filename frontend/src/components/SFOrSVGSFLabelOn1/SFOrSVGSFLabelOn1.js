import { useMemo } from "react";
import "./SFOrSVGSFLabelOn1.css";

const SFOrSVGSFLabelOn1 = ({
  label,
  sFOrSVGSFLabelOnCursor,
  leftTitleFontFamily,
  onTTBLeftSectionIPhoneClick,
}) => {

  const sFOrSVGSFLabelOn1Style = useMemo(() => {
    return {
      cursor: sFOrSVGSFLabelOnCursor,
    };
  }, [sFOrSVGSFLabelOnCursor]);

  const leftTitleStyle = useMemo(() => {
    return {
      fontFamily: leftTitleFontFamily,
    };
  }, [leftTitleFontFamily]);

  return (
    <div
      className="sf-or-svgsf-labelon1"
      style={sFOrSVGSFLabelOn1Style}
      onClick={onTTBLeftSectionIPhoneClick}
    >
      <div className="label3">
        <div className="left-title1" style={leftTitleStyle}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default SFOrSVGSFLabelOn1;
