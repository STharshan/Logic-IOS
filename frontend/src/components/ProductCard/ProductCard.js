import { useMemo } from "react";
import "./ProductCard.css";

const ProductCard = ({ propTop, propLeft, onProductContainerClick }) => {
  const product3Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="product6"
      onClick={onProductContainerClick}
      style={product3Style}
    >
      <div className="dummy-product3">
        <img className="image-5-icon2" alt="" src="/image-5@2x.png" />
      </div>
      <div className="product-inner6">
        <div className="tma-2-hd-wireless-container">
          <div className="tma-2-hd-wireless2">TMA-2 HD Wireless</div>
          <b className="rs-15002">Rs. 1.500</b>
        </div>
      </div>
      <div className="product-inner7">
        <div className="vector-parent4">
          <img className="vector-icon7" alt="" src="/vector3.svg" />
          <div className="div45">011 7460875</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
