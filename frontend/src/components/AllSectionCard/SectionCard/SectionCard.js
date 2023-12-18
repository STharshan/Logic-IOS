import "./SectionCard.css";

const SectionCard = ({ featurePackages }) => {
  return (
    <div className="rectangle-parent2">
      <div className="group-child18" />
      <img
        className="mingcutedown-fill-icon"
        alt=""
        src="/mingcutedownfill.svg"
      />
      <div className="activated-packages2">{featurePackages}</div>
    </div>
  );
};

export default SectionCard;
