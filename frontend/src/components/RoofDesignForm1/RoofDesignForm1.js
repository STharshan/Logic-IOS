import { useMemo } from "react";
import "./RoofDesignForm1.css";

const RoofDesignForm1 = ({
  contractorName,
  roofDesignText,
  propTop,
  propLeft,
  propCursor,
  propFontWeight,
  onProductContainerClick,
}) => {
  const product2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      cursor: propCursor,
    };
  }, [propTop, propLeft, propCursor]);

  const roofDesignStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight,
    };
  }, [propFontWeight]);

  return (
    <div
      className="product51"
      onClick={onProductContainerClick}
      style={product2Style}
    >
       <div className="product-inner5">
          <div className="contractor-name-parent">
            <div className="contractor-name">{contractorName}</div>
            <b className="roof-design11" style={roofDesignStyle}>
              {roofDesignText}
            </b>
          </div>
        </div>
        <img className="product" alt="" src="/rectangle-621@2x.png" />
    </div>
  );
};

export default RoofDesignForm1;
