import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./ShopsItemsRentMachine.css";
import Footer from "../../components/Footer/Footer";
import SelectedNoTypeTextDar from "../../components/SelectedNoTypeTextDar/SelectedNoTypeTextDar";
import axios from "axios";

const ShopsItemsRentMachine = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onCategory = useCallback(() => {
    navigate("/shops-items-category");
  }, [navigate]);

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onLucideplusIconClick = useCallback(() => {
    navigate("/add-shop-item");
  }, [navigate]);

  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/item')
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
    <div className="shops-items-rent-machine">
      <SectionCard3
        imgdisplay="none"
        searchLeft="270px"
      />
      <div className="shop-name-parent">
        <div className="shop-name">Shop Name</div>
        <img
          className="regularangle-small-left-icon7"
          alt=""
          src="/regularanglesmallleft1.svg"
          onClick={onRegularangleSmallLeftIconClick}
        />
      </div>
      <Footer
        footerTopmargin="725px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <img
        className="lucideplus-icon2"
        alt=""
        src="/lucideplus.svg"
        onClick={onLucideplusIconClick}
      />

      <div className="type">
          <SelectedNoTypeTextDar
            label="Category"         
            selectedNoTypeTextDarAlignSelf="stretch"
            selectedNoTypeTextDarCursor="unset"       
            labelFontFamily="'DM Sans'"
            onTabsIPhoneContainer1Click={onCategory}
          />
          <SelectedNoTypeTextDar
            label="RentMachine"
            selectedNoTypeTextDarBoxShadow="unset"
            selectedNoTypeTextDarBorder="1px solid var(--color-gray-300)"
            selectedNoTypeTextDarAlignSelf="unset"
            selectedNoTypeTextDarCursor="unset"
            labelFontFamily="'DM Sans'"    
            labelFontWeight="600"
            selectedNoTypeTextDarBackgroundColor="#fff"    
          />
      </div>
      <div className="product8">
        {data.map((item) => {
          return(
            <div className="product-inner">
              <div className="dummy-product">
                <img className="image-5-icon" alt="" src={item.image} />
              </div>
              <div className="tma-2-hd-wireless-parent">
                  <div className="tma-2-hd-wireless">{item.itemname}</div>
                  <b className="rs-1500">Rs.{item.price}</b>
              </div> 
              <div className="category">{item.rentmachinetype}</div>
              <div className="vector-parent1">
                <div className="vector-icon4">
                  <img  alt="" src="/vector4.svg" />
                </div>  
                  <div className="div14">{item.contact}</div>
              </div>
            </div>
          )
        })}
        </div>
    </div>
  );
};

export default ShopsItemsRentMachine;
