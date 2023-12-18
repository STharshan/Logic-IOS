import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobSeekerCard from "../../components/JobSeekerCard/JobSeekerCard";
import DiscountCardContainer from "../../components/DiscountCardContainer/DiscountCardContainer";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./JobSeeker1.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const JobSeeker1 = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  const location = "basil_location-outline"

  const navigate = useNavigate();

  const onLucideplusIconClick = useCallback(() => {
    navigate("/job-seeker1");
  }, [navigate]);

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/iphone-13-mini-137");
  }, [navigate]);

  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/cv')
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
    <div className="job-seeker1">
      <SectionCard3
        imageLocation={location}
        searchLeft="50px"
        locationLeft="200px"
      />
      <div className="product7">
      
        {data.slice(0,4).map((item) => (
            <div className="product4" key={item.id}>
              
              <div className="product-inner33" >
                <div className="image1">
                  <img alt="" src="/ellipse-2@2x.png" />
                  </div>
                  <div className="name-here1">{item.name}</div>
                  <div className="years-of-experience1">{item.experience} years of experience</div>
                  <div className="cv1">
                    <a href ={item.image} attributes-list download className="painting111">Download CV</a>  
                  </div>
              </div>
              <div className="product-inner44">
                <div className="vector-parent333">
                  <img className="vector-icon666" alt="" src="/vector3.svg" />
                  <div className="div44">{item.contact}</div>
                </div>
              </div>           
            </div>
        ))}
          <img className="banner-default"  src="/Banner default.png"/>  

          {data.slice(4).map((item) => (
            <div className="product44" key={item.id}>
              
              <div className="product-inner33" >
                <div className="image1">
                  <img alt="" src="/ellipse-2@2x.png" />
                  </div>
                  <div className="name-here1">{item.name}</div>
                  <div className="years-of-experience1">{item.experience} years of experience</div>
                  <div className="cv1">
                    <a href ={item.image} attributes-list download className="painting111">Download CV</a>  
                  </div>
              </div>
              <div className="product-inner44">
                <div className="vector-parent333">
                  <img className="vector-icon666" alt="" src="/vector3.svg" />
                  <div className="div44">{item.contact}</div>
                </div>
              </div>           
            </div>
        ))} 
      </div>
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
      <div className="all-job-seeker">All Job seeker</div>
      <div className="items">30 items</div>
     
      <img
        className="lucideplus-icon"
        alt=""
        src="/lucideplus.svg"
        onClick={onLucideplusIconClick}
      />
      <div className="job-seeker2">Job seeker</div>
      <img
        className="regularangle-small-left-icon6"
        alt=""
        src="/regularanglesmallleft1.svg"
        onClick={onRegularangleSmallLeftIconClick}
      />
    </div>
  );
};

export default JobSeeker1;
