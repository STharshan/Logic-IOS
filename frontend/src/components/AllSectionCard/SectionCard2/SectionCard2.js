import { useMemo } from "react";
import "./SectionCard2.css";

const SectionCard2 = ({
  pageTitle,
  iconImageUrl,
  propTop,
  propBottom,
  onGroupContainer10Click,
}) => {
  const groupDiv4Style = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div
      className="group-parent10"
      onClick={onGroupContainer10Click}
      style={groupDiv4Style}
    >
      <div className="rectangle-parent3">
        <div className="group-child20" />
        <img
          className="mingcutedown-fill-icon1"
          alt=""
          src="/mingcutedownfill.svg"
        />
        <div className="your-shop1">{pageTitle}</div>
      </div>
      <div className="rectangle-parent4">
        <div className="group-child21" />
        <img className="mdishop-outline-icon" alt="" src={iconImageUrl} />
      </div>
    </div>
  );
};

export default SectionCard2;
