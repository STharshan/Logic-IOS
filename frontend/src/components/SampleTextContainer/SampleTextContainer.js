import { useMemo } from "react";
import "./SampleTextContainer.css";

const SampleTextContainer = ({
  sampleText,
  displayText,
  propLeft,
  propBackgroundColor,
}) => {
  const iconBoxStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const containerStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="icon-box" style={iconBoxStyle}>
      <div className="sample-text">
        <p className="sample">{sampleText}</p>
        <p className="sample">{displayText}</p>
      </div>
      <div className="button-icon">
        <div className="container" style={containerStyle} />
      </div>
    </div>
  );
};

export default SampleTextContainer;
