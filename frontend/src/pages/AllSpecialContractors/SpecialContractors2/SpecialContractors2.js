import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import JobSeekerCard from "../../../components/JobSeekerCard/JobSeekerCard";
import DiscountCardContainer from "../../../components/DiscountCardContainer/DiscountCardContainer";
import RoofDesignForm1 from "../../../components/RoofDesignForm1/RoofDesignForm1";
import "./SpecialContractors2.css";
import SectionCard3 from "../../../components/GroupComponent/GroupComponent";
import Footer from "../../../components/Footer/Footer";

const SpecialContractors2 = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  const location = "basil_location-outline"

  const navigate = useNavigate();

  const onProductContainerClick = useCallback(() => {
    navigate("/special-contractors2");
  }, [navigate]);

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/iphone-13-mini-137");
  }, [navigate]);

  return (
    <div className="special-contractors2">
      <JobSeekerCard />
      <DiscountCardContainer />
      <Footer
        footerTopmargin="1408px"
        titleHome="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
      <RoofDesignForm1
        contractorName="Contractor Name"
        roofDesignText="Roof Design"
        onProductContainerClick={onProductContainerClick}
      />
      <RoofDesignForm1
        contractorName="Contractor Name"
        roofDesignText="Roof Design"
        propTop="989px"
        propLeft="16px"
        propCursor="pointer"
        onProductContainerClick={onProductContainerClick}
      />
      <RoofDesignForm1
        contractorName="Contractor Name"
        roofDesignText="Roof Design"
        propTop="566px"
        propLeft="16px"
        propCursor="pointer"
        onProductContainerClick={onProductContainerClick}
      />
      <RoofDesignForm1
        contractorName="Contractor Name"
        roofDesignText="Roof Design"
        propTop="1206px"
        propLeft="16px"
        propCursor="pointer"
        onProductContainerClick={onProductContainerClick}
      />
      <RoofDesignForm1
        contractorName="Contractor Name"
        roofDesignText="Roof Design"
        propTop="349px"
        propLeft="195px"
        propCursor="pointer"
        onProductContainerClick={onProductContainerClick}
      />
      <RoofDesignForm1
        contractorName="Contractor Name"
        roofDesignText="Roof Design"
        propTop="989px"
        propLeft="195px"
        propCursor="pointer"
        onProductContainerClick={onProductContainerClick}
      />
      <RoofDesignForm1
        contractorName="Contractor Name"
        roofDesignText="Roof Design"
        propTop="566px"
        propLeft="195px"
        propCursor="pointer"
        onProductContainerClick={onProductContainerClick}
      />
      <RoofDesignForm1
        contractorName="Contractor Name"
        roofDesignText="Roof Design"
        propTop="1206px"
        propLeft="195px"
        propCursor="pointer"
        onProductContainerClick={onProductContainerClick}
      />
      <div className="all-special-contractors">All special contractors</div>
      <div className="items3">30 items</div>
      <img className="banner-default3" src="/Banner default.png"/>
      <SectionCard3
        imageLocation={location}
        searchLeft="20px"
        locationLeft="230px"
      />
      <div className="special-contractors3">Special Contractors</div>
      <img
        className="regularangle-small-left-icon18"
        alt=""
        src="/regularanglesmallleft1.svg"
        onClick={onRegularangleSmallLeftIconClick}
      />
    </div>
  );
};

export default SpecialContractors2;
