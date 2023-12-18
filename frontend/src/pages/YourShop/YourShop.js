import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./YourShop.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const YourShop = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onLucideplusIconClick = useCallback(() => {
    navigate("/add-your-shop");
  }, [navigate]);

  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/addShop')
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
    <div className="your-shop">
      <SectionCard3 
        imgdisplay="none"
        searchLeft="270px"
      />
      <div className="your-shops-parent">
        <div className="your-shops">Your Shops</div>
        <img
          className="regularangle-small-left-icon13"
          alt=""
          src="/regularanglesmallleft1.svg"
          onClick={onRegularangleSmallLeftIconClick}
        />
      </div>
    <div className="product55">
      {data.map((item) =>{
        return(
          <div className="product5">
                  <img className="product-child77" alt="" src={item.image} />
                  <div className="contractor-name">{item.shopname}</div>
                  <div className="roof-design1" >{item.address}</div> 
        </div>
        )
      })}
      </div>

   <Footer
        footerTopmargin="712px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <img
        className="lucideplus-icon7"
        alt=""
        src="/lucideplus.svg"
        onClick={onLucideplusIconClick}
      />

  </div>
  );
};

export default YourShop;
