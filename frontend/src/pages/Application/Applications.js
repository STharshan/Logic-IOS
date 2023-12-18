import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./Applications.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const Applications = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/your-job-vacancies");
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
    <div className="applications">
      <SectionCard3
        imgdisplay="none"
        searchLeft="270px"
      />
      <div className="your-job-vacancy-name-parent">
        <div className="your-job-vacancy">Your Job vacancy name</div>
        <img
          className="regularangle-small-left-icon9"
          alt=""
          src="/regularanglesmallleft1.svg"
          onClick={onRegularangleSmallLeftIconClick}
        />
      </div>
      <div className="rectangle-parent1">
        {data.map((item) => {
          return(
            <div className="group-child12" key={item.id}>
                <div className="kamal-siripala">{item.name}</div>
                <div className="contact-number">{item.contact}</div>
                {/* <div className="contact-number1">{item.email}</div> */}
                <div className="rent-machine-type">{item.jobcategory}</div>
                <div className="div16">
                    <img src="/user.png" alt="user"/>
                </div>
                <div className="painting">
                    <a href={item.image}  attributes-list download class >Download CV</a>
                </div>
            </div>
          )
        })}
      </div>
      <Footer
        footerTopmargin="734px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
    </div>
  );
};

export default Applications;
