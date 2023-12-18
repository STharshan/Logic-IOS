import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import JobSeekerCard from "../../components/JobSeekerCard/JobSeekerCard";
import DiscountCardContainer from "../../components/DiscountCardContainer/DiscountCardContainer";
import CategorySection from "../../components/CategorySection/CategorySection";
import ProductCard from "../../components/ProductCard/ProductCard";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./IPhone13Mini137.css";
import Footer from "../../components/Footer/Footer";

const IPhone13Mini137 = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const line = "mingcute_menu-line"
  const loaction = "basil_location-outline"

  const navigate = useNavigate();

  const onProductContainerClick = useCallback(() => {
    navigate("/after-tap-item");
  }, [navigate]);

  return (
    <div className="iphone-13-mini-137">
      <div className="rectangle3" />
      <JobSeekerCard />
      <DiscountCardContainer />
      <CategorySection />
      <ProductCard onProductContainerClick={onProductContainerClick} />
      <ProductCard
        propTop="978px"
        propLeft="16px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="1221px"
        propLeft="16px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="526px"
        propLeft="195px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="978px"
        propLeft="195px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="1221px"
        propLeft="195px"
        onProductContainerClick={onProductContainerClick}
      />
      <div className="items5">30 items</div>
      <div className="all-items">All Items</div>
      <img className="banner-default4" src="/Banner default.png" />
      <Footer
        footerTopmargin="1535px"
        titleHome="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
      <SectionCard3
       imageName={line}
       searchLeft="20px"
       imageLocation={loaction}
       locationLeft="200px"
      />
    </div>
  );
};

export default IPhone13Mini137;
