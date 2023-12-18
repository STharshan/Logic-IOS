import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./YourJobVacancies.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const YourJobVacancies = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onLucideplusIconClick = useCallback(() => {
    navigate("/add-your-job-vacancies1");
  }, [navigate]);

  const onApplication = useCallback(() => {
    navigate("/applications");
  }, [navigate]);

  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/job')
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
    <div className="your-job-vacancies">
      <SectionCard3
        imgdisplay="none"
        searchLeft="270px"
      />
      <div className="your-job-vacancies-parent">
        <div className="your-job-vacancies1">Your Job vacancies</div>
        <img
          className="regularangle-small-left-icon12"
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
        className="lucideplus-icon6"
        alt=""
        src="/lucideplus.svg"
        onClick={onLucideplusIconClick}
      />
          <div className="product55">
      {data.map((item) =>{
        return(
          <div className="product5">
                  <img className="product-child77" alt="" src={item.image} />
                  <div className="contractor-name">{item.shopname}</div>
                  <div className="roof-design1" onClick={onApplication}>3 Application</div> 
        </div>
        )
      })}
      </div>
      <div className="your-job-vacancies-child" />
      <div className="pending">Pending...</div>
    </div>
  );
};

export default YourJobVacancies;
