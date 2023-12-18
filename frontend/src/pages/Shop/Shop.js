import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import JobSeekerCard from "../../components/JobSeekerCard/JobSeekerCard";
import DiscountCardContainer from "../../components/DiscountCardContainer/DiscountCardContainer";
import FormContainer from "../../components/AllFormContainer/FormContainer/FormContainer";
import "./Shop.css";
import Footer from "../../components/Footer/Footer";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";

const Shop = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onProductContainerClick = useCallback(() => {
    navigate("/after-tap-item");
  }, [navigate]);

  const onMenu = useCallback(() => {
    navigate("/after-tap-item");
  }, [navigate]);

  return (
    <div className="shop">
      <ProductCard
        propTop="1154px"
        propLeft="16px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="1400px"
        propLeft="16px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="1154px"
        propLeft="195px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="1400px"
        propLeft="195px"
        onProductContainerClick={onProductContainerClick}
      />
      <JobSeekerCard />
      <DiscountCardContainer />
      <Footer
        footerTopmargin="1632px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        titleHome="var(--color-goldenrod)"
       />
      <FormContainer propTop="401px" />
      <div className="cards-iphone1">
        <div className="card-text2">
          <div className="card2">
            <div className="div10">
              <img src="/user.png"/>
            </div>
          </div>
          <div className="text3">
            <div className="title14">Contact</div>
            <div className="subheading3">(01) 1234 56798</div>
            <div className="subheading3">(01) 1234 56798</div>
          </div>
        </div>
      </div>
      <div className="cards1">
        <div className="card-text2">
          <div className="card2">
            <img src="/home.png"/>
          </div>
          <div className="text4">
            <div className="title15">Ship to</div>
            <div className="subheading5">
              123 Flinders Street, Melbourne VIC 3000
            </div>
          </div>
        </div>
      </div>
      <ProductCard
        propTop="662px"
        propLeft="16px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="908px"
        propLeft="16px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="662px"
        propLeft="195px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="908px"
        propLeft="195px"
        onProductContainerClick={onProductContainerClick}
      />
      <div className="our-all-items">Our all Items</div>
      <div className="items4">30 items</div>
      <SectionCard3
       searchLeft="230px"
      />
      
      <img className="arrow" alt=""  src="/regularanglesmallleft1.svg" onClick={onMenu}/>
      <div className="detail-shop">Detail shop</div> 
    </div>
  );
};

export default Shop;
