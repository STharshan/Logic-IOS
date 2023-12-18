import { useMemo } from "react";
import RoofDesignForm1 from "../RoofDesignForm1/RoofDesignForm1";
import "./RoofDesignForm.css";

const RoofDesignForm = ({ propTop, propLeft }) => {
  const groupDiv7Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="product-parent" style={groupDiv7Style}>
      <RoofDesignForm1
        contractorName="Contractor Name"
        roofDesignText="Roof Design"
        propTop="0px"
        propLeft="0px"
        propCursor="pointer"
        propFontWeight="unset"
      />
      <img
        className="emojione-v1flag-for-canada-icon1"
        alt=""
        src="/emojionev1flagforcanada.svg"
      />
    </div>
  );
};

export default RoofDesignForm;
