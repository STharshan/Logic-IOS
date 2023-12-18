import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyCard from "../../components/AllCompanyCard/CompanyCard/CompanyCard";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import FormContainer3 from "../../components/Footer/Footer";
import "./YourEducationCourses.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const YourEducationCourses = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onLucideplusIconClick = useCallback(() => {
    navigate("/add-your-education-course");
  }, [navigate]);

  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3001/api/educationcourse')
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
    <div className="your-education-courses">
      <SectionCard3 
        imgdisplay="none"
        searchLeft="270px"
      />
      <div className="your-education-courses-parent">
        <div className="your-education-courses1">Your education courses</div>
        <img
          className="regularangle-small-left-icon11"
          alt=""
          src="/regularanglesmallleft1.svg"
          onClick={onRegularangleSmallLeftIconClick}
        />
      </div>
      <div className="company-name-here-group">
        {data.map((item) => {
          return(
            <div className="group-detail">
            <div className="company-name-here1">Company Name here</div>
            <div className="div17">2020-10-13</div>
            <div className="group-child13" />
            <div className="share-group">
              <div className="share1">Share</div>
              <img className="uilshare-icon1" alt="" src="/uilshare.svg" />
            </div>
            <img className="group-child14" alt="" src={item.image} />
          </div>
          )
        })}
      </div>
      <Footer
        footerTopmargin="853px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <img
        className="lucideplus-icon5"
        alt=""
        src="/lucideplus.svg"
        onClick={onLucideplusIconClick}
      />
    </div>
  );
};

export default YourEducationCourses;
