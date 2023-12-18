import "./ContractorCard.css";

const ContractorCard = ({ productTitle, roofDesignPrice }) => {
  return (
    <div className="component-1">
      <b className="contractors-name-here">{productTitle}</b>
      <div className="roof-design">{roofDesignPrice}</div>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="star-parent">
            <img className="star-icon" alt="" src="/star.svg" />
            <div className="reviews">4.6</div>
          </div>
          <div className="reviews">86 Reviews</div>
        </div>
        <div className="more-wrapper">
          <div className="more7">Tersedia : 250</div>
        </div>
      </div>
    </div>
  );
};

export default ContractorCard;
