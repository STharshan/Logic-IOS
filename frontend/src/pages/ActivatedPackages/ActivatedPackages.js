import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import ShopProductContainer from "../../components/shopProductContainer/ShopProductContainer";
import "./ActivatedPackages.css";
import Footer from "../../components/Footer/Footer";

const ActivatedPackages = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="activated-packages">
      <SectionCard3 
        imgdisplay="none"
        searchLeft="270px"
      />
      <div className="activated-packages-parent">
        <div className="activated-packages1">Activated Packages</div>
        <img
          className="regularangle-small-left-icon14"
          alt=""
          src="/regularanglesmallleft1.svg"
          onClick={onRegularangleSmallLeftIconClick}
        />
      </div>
      <ShopProductContainer />
      <Footer
        footerTopmargin="712px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
    </div>
  );
};

export default ActivatedPackages;
