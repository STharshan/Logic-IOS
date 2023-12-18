import { useMemo } from "react";
import "./ProductCard1.css";

const ProductCard1 = ({ paintingTitle, propTop, propLeft }) => {
  const product1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="product444" style={product1Style}>
      <div className="product-inner33">
        <div className="name-here-parent">
          <div className="name-here">Name Here</div>
          <div className="painting11">{paintingTitle}</div>
          <div className="years-of-experience">7 years of experience</div>
        </div>
      </div>
      <div className="product-inner4">
        <div className="vector-parent33">
          <img className="vector-icon66" alt="" src="/vector3.svg" />
          <div className="div444">011 7460875</div>
        </div>
      </div>
      <img className="ellipse-icon" alt="" src="/ellipse-2@2x.png" />
    </div>
  );
};

export default ProductCard1;
