import "./DiscountCardContainer.css";

const DiscountCardContainer = () => {
  return (
    <div className="mask-group-group">
      <img className="mask-group-icon1" alt="" src="/mask-group1@2x.png" />
      <div className="group-child9" />
      <img className="group-child10" alt="" src="/group-351.svg" />
      <div className="our-service-group">
        <b className="our-service1">
          <p className="kemerdekaan">Kemerdekaan</p>
          <p className="kemerdekaan">{`Diskon 70% `}</p>
        </b>
        <div className="more9">Periode Agustus 2021</div>
      </div>
    </div>
  );
};

export default DiscountCardContainer;
