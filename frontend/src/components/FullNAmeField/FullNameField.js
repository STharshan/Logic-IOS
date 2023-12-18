import { useMemo } from "react";
import "./FullNameField.css";

const FullNameField = ({
  fullNameInput,
  fullNameInputLabel,
  changeEvent,
  inputname,
  inputtype,
  propTop,
  propLeft,
  propFontFamily,
  propFontColor,
  propHeight
}) => {
  const fieldStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
     
    };
  }, [propTop, propLeft]);

  const topInvestmentStratStyle = useMemo(() => {
    return {
      fontFamily: propFontFamily,
    };
  }, [propFontFamily]);

  const frameDivStyle = useMemo(() => {
    return {
      color: propFontColor,
      height: propHeight,
    };
  }, [
    propFontColor,
    propHeight
  ]);

  // const masukanAlamatEmailStyle = useMemo(() => {
  //   return {
  //     fontFamily: propFontFamily2,
  //     position: propPosition,
  //     fontSize: propFontSize,
  //     lineHeight: propLineHeight,
  //     color: propColor,
  //     textAlign: propTextAlign,
  //     width: propWidth1,
  //     flexShrink: propFlexShrink,
  //     justifyContent: propJustifyContent1,
  //     padding: propPadding1,
  //     borderRadius: propBorderRadius1,
  //     backgroundColor: propBackgroundColor1,
  //     flexDirection: propFlexDirection1,
  //     boxSizing: propBoxSizing1,
  //   };
  // }, [
  //   propFontFamily2,
  //   propPosition,
  //   propFontSize,
  //   propLineHeight,
  //   propColor,
  //   propTextAlign,
  //   propWidth1,
  //   propFlexShrink,
  //   propBorderRadius1,
  //   propBackgroundColor1,
  //   propFlexDirection1,
  //   propJustifyContent1,
  //   propPadding1,
  //   propBoxSizing1,
  // ]);

  return (
    <div className="field1" style={fieldStyle}>
      <div className="top-investment-strat-parent3">
        <div className="top-investment-strat8" style={topInvestmentStratStyle}>
          {fullNameInput}
        </div>
        <input className="masukan-alamat-email-no-telep-wrapper2" style={frameDivStyle} placeholder={fullNameInputLabel} 
            onChange={changeEvent} type={inputtype} name={inputname}/>
          {/* <div className="masukan-alamat-email4"  style={masukanAlamatEmailStyle}/> */}
      </div>
    </div>
  );
};

export default FullNameField;
