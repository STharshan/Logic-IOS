import { useMemo } from "react";
import "./SelectedNoTypeTextDar.css";

const SelectedNoTypeTextDar = ({
  label,
  selectedNoTypeTextDarBackgroundColor,
  selectedNoTypeTextDarBoxShadow,
  selectedNoTypeTextDarBorder,
  selectedNoTypeTextDarAlignSelf,
  selectedNoTypeTextDarCursor,
  labelFontWeight,
  labelFontFamily,
  onTabsIPhoneContainer1Click,
}) => {
  const selectedNoTypeTextDarStyle = useMemo(() => {
    return {
      backgroundColor: selectedNoTypeTextDarBackgroundColor,
      boxShadow: selectedNoTypeTextDarBoxShadow,
      border: selectedNoTypeTextDarBorder,
      alignSelf: selectedNoTypeTextDarAlignSelf,
      cursor: selectedNoTypeTextDarCursor,
    };
  }, [
    selectedNoTypeTextDarBackgroundColor,
    selectedNoTypeTextDarBoxShadow,
    selectedNoTypeTextDarBorder,
    selectedNoTypeTextDarAlignSelf,
    selectedNoTypeTextDarCursor,
  ]);

  const fontStyle= useMemo(() => {
    return {
      fontWeight: labelFontWeight,
      fontFamily: labelFontFamily,
    };
  }, [labelFontWeight, labelFontFamily]);

  return (
    <div
      className="selectedno-typetext-dar"
      style={selectedNoTypeTextDarStyle}
      onClick={onTabsIPhoneContainer1Click}
    >
      <div className="label-1" style={fontStyle}>
        {label}
      </div>
    </div>
  );
};

export default SelectedNoTypeTextDar;
