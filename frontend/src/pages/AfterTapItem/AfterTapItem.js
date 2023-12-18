import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import ContractorCard from "../../components/ContractorCard/ContractorCard";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./AfterTapItem.css";
import Footer from "../../components/Footer/Footer";

const AfterTapItem = () => {

  
  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onProductContainerClick = useCallback(() => {
    navigate("/after-tap-item");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onRegularangleSmallLeftIcon1Click = useCallback(() => {
    navigate("/iphone-13-mini-137");
  }, [navigate]);

  return (
    <div className="after-tap-item">
      <div className="rectangle2" />
      <ProductCard
        propTop="1249px"
        propLeft="16px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="1492px"
        propLeft="16px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="1249px"
        propLeft="195px"
        onProductContainerClick={onProductContainerClick}
      />
      <ProductCard
        propTop="1492px"
        propLeft="195px"
        onProductContainerClick={onProductContainerClick}
      />
      <Footer
        footerTopmargin="1724px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        titleHome="var(--color-goldenrod)"
       />
      <div className="image-26-wrapper">
        <img className="image-26-icon" alt="" src="/image-26@2x.png" />
      </div>
      <ContractorCard
        productTitle="TMA-2HD Wireless"
        roofDesignPrice="Rs 1.500"
      />
      <div className="vector-container">
        <img className="vector-icon3" alt="" src="/vector2.svg" />
        <div className="div7">011 7460875</div>
      </div>
      <div className="description-product-parent">
        <b className="description-product">Description Product</b>
        <div className="lorem-ipsum-dolor4">
          Lorem ipsum dolor sit amet consectetur. Scelerisque auctor tellus est
          varius nunc ullamcorper arcu nibh orci. Elementum turpis ut est turpis
          turpis quam consequat. Ornare tristique ultrices mauris neque pulvinar
          in nisl. At settis sem. Non tempus proin ultrices sit faucibus quis et
          diam. Sit lorem mattis arcu ornare quis. Ac tincidunt aliquam bibendum
          nunc ipsum nibh et. Eu ipsum consequat proin diam sit arcu sit cursus
          eget. Suspendisse.
        </div>
        <div className="lorem-ipsum-dolor4">
          Lorem ipsum dolor sit amet consectetur. Scelerisque auctor tellus est
          varius nunc ullamcorper arcu nibh orci. Elementum turpis ut est turp
          mattis arcu ornare quis. Ac tincidunt aliquam bibendum nunc ipsum nibh
          et. Eu ipsum consequat proin diam sit arcu sit cursus eget.
          Suspendisse.
        </div>
      </div>
      <img className="after-tap-item-child" alt="" src="/vector-23.svg" />
      <div className="group-parent2" onClick={onGroupContainer7Click}>
        <div className="frame-wrapper1">
          <div className="shop-larson-electronic-parent">
            <div className="shop-larson-electronic">Shop Larson Electronic</div>
            <div className="official-store-parent">
              <div className="official-store">Official Store</div>
              <img
                className="iconlyboldshield-done2"
                alt=""
                src="/iconlyboldshield-done.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="regularangle-small-left-icon4"
          alt=""
          src="/regularanglesmallleft.svg"
        />
        <img className="image-7-icon2" alt="" src="/image-7@2x.png" />
      </div>
      <div className="related-items">Related Items</div>
      <SectionCard3
        searchLeft="270px"
        imgdisplay="none"
      />
      <img
        className="regularangle-small-left-icon5"
        alt=""
        src="/regularanglesmallleft1.svg"
        onClick={onRegularangleSmallLeftIcon1Click}
      />
      <div className="mega-mall2">Detail Product</div>
    </div>
  );
};

export default AfterTapItem;
