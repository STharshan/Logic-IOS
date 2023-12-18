import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./YourJobRoles.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const YourJobRoles = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onLucideplusIconClick = useCallback(() => {
    navigate("/add-your-job-roles");
  }, [navigate]);

  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/submitjobrole')
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
    <div className="your-job-roles">
      <SectionCard3 
        imgdisplay="none"
        searchLeft="270px"
      />
      <div className="your-job-roles-parent">
        <div className="your-job-roles1">Your Job roles</div>
        <img
          className="regularangle-small-left-icon10"
          alt=""
          src="/regularanglesmallleft1.svg"
          onClick={onRegularangleSmallLeftIconClick}
        />
      </div>
      <Footer
        footerTopmargin="712px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <img
        className="lucideplus-icon4"
        alt=""
        src="/lucideplus.svg"
        onClick={onLucideplusIconClick}
      />
      <div className="product71">      
        {data.map((item) => (
            <div className="product41" key={item.id}>
              
              <div className="product-inner31" >
                <div className="image">
                  <img alt="" src={item.image} />
                  </div>
                  <div className="name-here2">{item.name}</div>
                  <div className="years-of-experience2">{item.experience} years of experience</div>
                  <div className="cv2">
                    <a href ={item.image} attributes-list download className="painting2">Download CV</a>  
                  </div>
              </div>
              <div className="product-inner41">
                <div className="vector-parent31">
                  <img className="vector-icon61" alt="" src="/vector3.svg" />
                  <div className="div46">{item.contact}</div>
                </div>
              </div>           
            </div>
        ))}
      </div>
    </div>
  );
};

export default YourJobRoles;
