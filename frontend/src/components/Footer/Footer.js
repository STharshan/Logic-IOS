import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { useCallback, useMemo } from "react";

const Footer = ({
  footerTopmargin,
  imageName1,
  imageName2,
  imageName3,
  imageName4,
  titleInternational,
  titleCourse,
  titleVacancy,
  titleHome,
}) => {

    const imageUrl1 = process.env.PUBLIC_URL + `/${imageName1}.png`
    const imageUrl2 = process.env.PUBLIC_URL + `/${imageName2}.png`
    const imageUrl3 = process.env.PUBLIC_URL + `/${imageName3}.png`
    const imageUrl4 = process.env.PUBLIC_URL + `/${imageName4}.png`

    const navigate = useNavigate();

    const onGroupContainer11Click = useCallback(() => {
        navigate("/international-contractors");
    }, [navigate]);

    const onGroupContainer12Click = useCallback(() => {
        navigate("/education-courses");
    }, [navigate]);

    const onGroupContainer13Click = useCallback(() => {
        navigate("/job-vacancies");
    }, [navigate]);

    const onGroupContainer15Click = useCallback(() => {
        navigate("/iphone-13-mini-137");
    }, [navigate]);

    const footerDiv = useMemo(() => {
      return {
        top: footerTopmargin
      };
    }, [footerTopmargin,titleInternational]);

    const footerDiv1 = useMemo(() => {
      return {
        color: titleCourse,
      };
    }, [titleCourse]);

    const footerDiv2 = useMemo(() => {
      return {
        color: titleVacancy,
      };
    }, [titleVacancy]);

    const footerDiv3 = useMemo(() => {
      return {
        color: titleHome,
      };
    }, [titleHome]);

    const footerDiv4 = useMemo(() => {
      return {
        color: titleInternational,
      };
    }, [titleInternational]);
    
    return(
        <div className="icons-bar32" style={footerDiv }>
        <div className="icons-bar-child62" />
        <div className="icons-bar-child62" />
        <div
          className="international-parent30"
          onClick={onGroupContainer11Click}
        >
          <div className='border'><hr/></div>
          <div className="international32" style={footerDiv4 } >International</div>
          <img className="icon-park-outlineinternationa32" alt="international" src={imageUrl1}/>
        </div>
        <div className="courses-parent30" onClick={onGroupContainer12Click}>
          <div className="international32" style={footerDiv1 } >Courses</div>
          <img 
            className="tdesigneducation-icon32" alt="course" src={imageUrl2}/>
        </div>
        <div className="vacancies-parent30" onClick={onGroupContainer13Click}>
          <div className="vacancies32" style={footerDiv2 } >Vacancies</div>
          <img 
            className="mdiuser-search-outline-icon32" alt="vacancy"  src={imageUrl3}/>
        </div>
        <div className="home-parent61" onClick={onGroupContainer15Click}>
              <div className="home98" style={footerDiv3}>Home</div>
              <img className="vector-icon47" alt="home" src={imageUrl4} />
        </div>
      </div>
    );
}

export default Footer;