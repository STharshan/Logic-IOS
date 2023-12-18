import { useMemo } from "react";
import "./HelpSection.css";

const HelpSection = ({
  buttonText,
  propTop,
  propBottom,
  onGroupContainer19Click,
}) => {
  const groupDiv5Style = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div
      className="group-parent12"
      onClick={onGroupContainer19Click}
      style={groupDiv5Style}
    >
      <div className="rectangle-parent6">
        <div className="group-child24" />
        <div className="help2">{buttonText}</div>
      </div>
      <div className="rectangle-parent7">
        <div className="group-child25" />
        <img
          className="material-symbolslogout-icon"
          alt=""
          src="/materialsymbolslogout.svg"
        />
      </div>
    </div>
  );
};

export default HelpSection;
