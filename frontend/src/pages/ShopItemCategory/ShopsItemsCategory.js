import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./ShopsItemsCategory.css";
import Footer from "../../components/Footer/Footer";
import SelectedNoTypeTextDar from "../../components/SelectedNoTypeTextDar/SelectedNoTypeTextDar";
import axios from "axios";

const ShopsItemsCategory = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onProductContainerClick = useCallback(() => {
    navigate("/after-tap-item");
  }, [navigate]);

  const onRentmachine = useCallback(() => {
    navigate("/shops-items-rent-machine");
  }, [navigate]);

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onLucideplusIconClick = useCallback(() => {
    navigate("/add-shop-item1");
  }, [navigate]);

  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/item1')
    .then(res => {
      if(res.data.Status === "Success") {
        setData(res.data.Result);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="shops-items-category">
      <SectionCard3 
        imgdisplay="none"
        searchLeft="270px"/>
      <div className="shop-name-group">
        <div className="shop-name1">Shop Name</div>
        <img
          className="regularangle-small-left-icon8"
          alt=""
          src="/regularanglesmallleft1.svg"
          onClick={onRegularangleSmallLeftIconClick}
        />
      </div>
      <div className="type">
          <SelectedNoTypeTextDar
            label="Category"         
            selectedNoTypeTextDarAlignSelf="stretch"
            selectedNoTypeTextDarCursor="unset"       
            labelFontFamily="'DM Sans'"
            labelFontWeight="600"
            selectedNoTypeTextDarBackgroundColor="#fff"
          />
          <SelectedNoTypeTextDar
            label="RentMachine"
            selectedNoTypeTextDarBoxShadow="unset"
            selectedNoTypeTextDarBorder="1px solid var(--color-gray-300)"
            selectedNoTypeTextDarAlignSelf="unset"
            selectedNoTypeTextDarCursor="unset"
            labelFontFamily="'DM Sans'"   
            onTabsIPhoneContainer1Click={onRentmachine}      
          />
      </div>
      <div className="product-container" >
        {data.map((item) =>{
          return(
            <div className="product1" onClick={onProductContainerClick} key={item.id}>
              <div className="dummy-product1">
                <img className="image-5-icon1" alt="" src={item.image} />
              </div>
              <div className="product-inner1">
                <div className="tma-2-hd-wireless-group">
                  <div className="tma-2-hd-wireless1">{item.itemname}</div>
                  <b className="rs-15001">Rs.{item.price}</b>
                </div>
              </div>
              <div className="product-inner2">
                <div className="vector-parent2">
                  <img className="vector-icon5" alt="" src="/vector4.svg" />
                  <div className="div15">{item.contact}</div>
                </div>
              </div>
              <div className="sub-category1">{item.subcategory}</div>
              <div className="category1">{item.categorytype}</div>
            </div>
          )
        })}
    </div>
      <Footer
        footerTopmargin="760px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <img
        className="lucideplus-icon3"
        alt=""
        src="/lucideplus.svg"
        onClick={onLucideplusIconClick}
      />
    </div>
  );
};

export default ShopsItemsCategory;
