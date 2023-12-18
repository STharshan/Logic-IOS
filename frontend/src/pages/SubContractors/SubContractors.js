import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard1 from "../../components/ProductCard1/ProductCard1";
import JobSeekerCard from "../../components/JobSeekerCard/JobSeekerCard";
import DiscountCardContainer from "../../components/DiscountCardContainer/DiscountCardContainer";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./SubContractors.css";
import Footer from "../../components/Footer/Footer";

const SubContractors = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  const location = "basil_location-outline"

  const navigate = useNavigate();

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/iphone-13-mini-137");
  }, [navigate]);

  return (
    <div className="sub-contractors">
      <ProductCard1 paintingTitle="Painting" propTop="1035px" propLeft="16px" />
      <ProductCard1 paintingTitle="Painting" propTop="1281px" propLeft="16px" />
      <ProductCard1
        paintingTitle="Painting"
        propTop="1035px"
        propLeft="195px"
      />
      <ProductCard1
        paintingTitle="Painting"
        propTop="1281px"
        propLeft="195px"
      />
      <JobSeekerCard />
      <DiscountCardContainer />
      <Footer
        footerTopmargin="1513px"
        titleHome="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
      <div className="all-sub-contractors">All sub Contractors</div>
      <div className="items1">30 items</div>
      <img className="banner-default1" src="/Banner default.png"/>
      <ProductCard1 paintingTitle="Painting" />
      <ProductCard1 paintingTitle="Painting" propTop="595px" propLeft="16px" />
      <ProductCard1 paintingTitle="Painting" propTop="349px" propLeft="195px" />
      <ProductCard1 paintingTitle="Painting" propTop="595px" propLeft="195px" />
      <SectionCard3
          imageLocation={location}
          searchLeft="20px"
          locationLeft="230px"
      />
      <div className="sub-contractors-parent">
        <div className="sub-contractors1">Sub Contractors</div>
        <img
          className="regularangle-small-left-icon16"
          alt=""
          src="/regularanglesmallleft1.svg"
          onClick={onRegularangleSmallLeftIconClick}
        />
      </div>
    </div>
  );
};

export default SubContractors;
