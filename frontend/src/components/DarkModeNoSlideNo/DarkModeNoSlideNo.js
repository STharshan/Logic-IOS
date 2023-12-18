import { useMemo } from "react";
import "./DarkModeNoSlideNo.css";

const DarkModeNoSlideNo = ({
  space,
  title = "Title",
  time = "9:41 am",
  desc = "Lorem ipsum dolor sit amet, consectetur piscing elit. Vivamus in vulputate nisi.",
  darkModeNoSlideNoBackgroundColor,
  darkModeNoSlideNoPosition,
  darkModeNoSlideNoTop,
  darkModeNoSlideNoLeft,
  titleFontWeight,
  titleFontFamily,
  labelFontFamily,
  chevronrightColor,
  descFontFamily,
}) => {
  const darkModeNoSlideNoStyle = useMemo(() => {
    return {
      backgroundColor: darkModeNoSlideNoBackgroundColor,
      position: darkModeNoSlideNoPosition,
      top: darkModeNoSlideNoTop,
      left: darkModeNoSlideNoLeft,
    };
  }, [
    darkModeNoSlideNoBackgroundColor,
    darkModeNoSlideNoPosition,
    darkModeNoSlideNoTop,
    darkModeNoSlideNoLeft,
  ]);

  const title1Style = useMemo(() => {
    return {
      fontWeight: titleFontWeight,
      fontFamily: titleFontFamily,
    };
  }, [titleFontWeight, titleFontFamily]);

  const label2Style = useMemo(() => {
    return {
      fontFamily: labelFontFamily,
    };
  }, [labelFontFamily]);

  const chevronrightStyle = useMemo(() => {
    return {
      color: chevronrightColor,
    };
  }, [chevronrightColor]);

  const descStyle = useMemo(() => {
    return {
      fontFamily: descFontFamily,
    };
  }, [descFontFamily]);

  return (
    <div className="dark-modeno-slideno" style={darkModeNoSlideNoStyle}>
      <img className="space-icon" alt="" src={space} />
      <div className="person-avatar">
        <img
          className="avatar-large-iphone"
          alt=""
          src="/avatar-large-iphone.svg"
        />
      </div>
      <div className="title-desc1">
        <div className="name-or-number-time">
          <div className="title2" style={title1Style}>
            {title}
          </div>
          <div className="label-group">
            <div className="label4" style={label2Style}>
              {time}
            </div>
            <div className="icon-chevron">
             
            </div>
          </div>
        </div>
        <div className="desc-wrapper">
          <div className="desc1" style={descStyle}>
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeNoSlideNo;
