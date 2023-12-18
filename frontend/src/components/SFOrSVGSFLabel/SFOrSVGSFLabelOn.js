import { useMemo } from "react";
import "./SFOrSVGSFLabelOn.css";

const SFOrSVGSFLabelOn = ({
  label ,
  sFOrSVGSFLabelOnCursor,
  labelFontWeight,
  labelFontFamily,
  onTTBRightSectionIPhoneClick,
}) => {
  const sFOrSVGSFLabelOnStyle = useMemo(() => {
    return {
      cursor: sFOrSVGSFLabelOnCursor,
    };
  }, [sFOrSVGSFLabelOnCursor]);

  const labelStyle = useMemo(() => {
    return {
      fontWeight: labelFontWeight,
      fontFamily: labelFontFamily,
    };
  }, [labelFontWeight, labelFontFamily]);

  return (
    <div
      className="sf-or-svgsf-labelon"
      style={sFOrSVGSFLabelOnStyle}
      onClick={onTTBRightSectionIPhoneClick}
    >
      <div className="label1">
        <div className="label2" style={labelStyle}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default SFOrSVGSFLabelOn;
