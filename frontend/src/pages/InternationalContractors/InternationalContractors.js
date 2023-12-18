import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import JobSeekerCard from "../../components/JobSeekerCard/JobSeekerCard";
import DiscountCardContainer from "../../components/DiscountCardContainer/DiscountCardContainer";
import RoofDesignForm1 from "../../components/RoofDesignForm1/RoofDesignForm1";
import RoofDesignForm from "../../components/RoofDesignForm/RoofDesignForm";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./InternationalContractors.css";
import Footer from "../../components/Footer/Footer";

const InternationalContractors = () => {

  const home = "vector";
  const international = "icon-park-outline_international";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  const location = "basil_location-outline"

  const navigate = useNavigate();

  const onProductContainerClick = useCallback(() => {
    navigate("/special-contractors1");
  }, [navigate]);

  const onProductContainerClick2 = useCallback(() => {
    navigate("/special-contractors1");
  }, [navigate]);

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/iphone-13-mini-137");
  }, [navigate]);

  return (
    <div className="international-contractors">
      <JobSeekerCard />
      <DiscountCardContainer />
      <Footer
         footerTopmargin="1409px"
         titleInternational="var(--color-goldenrod)"
         imageName1={international}
         imageName2={course}
         imageName3={vacancy}
         imageName4={home}
      />
      <RoofDesignForm1
        contractorName="Contractor Name"
        roofDesignText="Roof Design"
        propTop="349px"
        propLeft="16px"
        propCursor="pointer"
        propFontWeight="unset"
        onProductContainerClick={onProductContainerClick}
      />
      <RoofDesignForm onProductContainer1Click={onProductContainerClick} />
      <RoofDesignForm
        propTop="566px"
        propLeft="16px"
        onProductContainer1Click={onProductContainerClick2}
      />
      <RoofDesignForm
        propTop="1206px"
        propLeft="16px"
        onProductContainer1Click={onProductContainerClick}
      />
      <RoofDesignForm
        propTop="989px"
        propLeft="195px"
        onProductContainer1Click={onProductContainerClick}
      />
      <RoofDesignForm
        propTop="566px"
        propLeft="195px"
        onProductContainer1Click={onProductContainerClick}
      />
      <RoofDesignForm
        propTop="1206px"
        propLeft="195px"
        onProductContainer1Click={onProductContainerClick}
      />
      <div className="all-international-contractors">
        All international contractors
      </div>
      <div className="items2">30 items</div>
      <img className="banner-default2" src="/Banner default.png"/>
      <img
        className="emojione-v1flag-for-canada-icon"
        alt=""
        src="/emojionev1flagforcanada.svg"
      />
      <RoofDesignForm
        propTop="349px"
        propLeft="195px"
        onProductContainer1Click={onProductContainerClick}
      />
      <SectionCard3
        imageLocation={location}
        locationLeft="230px"
        searchLeft="20px"
      />
      <div className="international-contractors1">
        International Contractors
      </div>
      <img
        className="regularangle-small-left-icon17"
        alt=""
        src="/regularanglesmallleft1.svg"
        onClick={onRegularangleSmallLeftIconClick}
      />
    </div>
  );
};

export default InternationalContractors;
