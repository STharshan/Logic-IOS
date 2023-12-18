import { useMemo } from "react";
import "./DarkModeNoRSectionLabel.css";

const DarkModeNoRSectionLabel = ({
  title = "Title",
  darkModeNoRSectionLabelWidth,
  darkModeNoRSectionLabelPosition,
  darkModeNoRSectionLabelTop,
  darkModeNoRSectionLabelLeft,
  darkModeNoRSectionLabelCursor,
  titleFontFamily,
  onListRowIPhoneClick,
}) => {
  const darkModeNoRSectionLabelStyle = useMemo(() => {
    return {
      width: darkModeNoRSectionLabelWidth,
      position: darkModeNoRSectionLabelPosition,
      top: darkModeNoRSectionLabelTop,
      left: darkModeNoRSectionLabelLeft,
      cursor: darkModeNoRSectionLabelCursor,
    };
  }, [
    darkModeNoRSectionLabelWidth,
    darkModeNoRSectionLabelPosition,
    darkModeNoRSectionLabelTop,
    darkModeNoRSectionLabelLeft,
    darkModeNoRSectionLabelCursor,
  ]);

  const titleStyle = useMemo(() => {
    return {
      fontFamily: titleFontFamily,
    };
  }, [titleFontFamily]);

  return (
    <div
      className="dark-modeno-r-sectionlabel"
      style={darkModeNoRSectionLabelStyle}
      onClick={onListRowIPhoneClick}
    >
      <div className="space" />
      
      <div className="title-desc">
        <div className="title1" style={titleStyle}>
            {title}
        </div>
      </div>
    </div>
  );
};

export default DarkModeNoRSectionLabel;
