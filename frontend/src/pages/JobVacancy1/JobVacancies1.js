import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CompanyCard2 from "../../components/AllCompanyCard/CompanyCard2/CompanyCard2";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./JobVacancies1.css";
import Footer from "../../components/Footer/Footer";

const JobVacancies1 = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline yellow";
  const location = "basil_location-outline"

  const line = "mingcute_menu-line"

  const navigate = useNavigate();

  const onLucideplusIconClick = useCallback(() => {
    navigate("/job-vacancies1");
  }, [navigate]);

  return (
    <div className="job-vacancies1">
  <Footer
        footerTopmargin="975px"
        titleVacancy="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       /> 
      <CompanyCard2 />
      <CompanyCard2 propTop="51.86%" propBottom="10.61%" />
      <SectionCard3
        imageName={line}
        searchLeft="45px"
        locationLeft="175px"
        imageLocation={location}
      />
      <img
        className="lucideplus-icon1"
        alt=""
        src="/lucideplus.svg"
        onClick={onLucideplusIconClick}
      />
    </div>
  );
};

export default JobVacancies1;
