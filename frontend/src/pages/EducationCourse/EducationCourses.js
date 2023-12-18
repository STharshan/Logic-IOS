import React from "react";
import CompanyCard1 from "../../components/AllCompanyCard/CompanyCard1/CompanyCard1";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./EducationCourses.css";
import Footer from "../../components/Footer/Footer";

const EducationCourses = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education";
  const vacancy = "mdi_user-search-outline";
  const location = "basil_location-outline"

  const line = "mingcute_menu-line"

  return (
    <div className="education-courses">
      <Footer
        footerTopmargin="1250px"
        titleCourse="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       /> 
      <CompanyCard1 />
      <CompanyCard1 propTop="37.63%" propBottom="36.28%" />
      <CompanyCard1 propTop="65.97%" propBottom="7.95%" />
      <SectionCard3
        imageName={line}
        searchLeft="20px"
        locationLeft="200px"
        imageLocation={location}
      />
    </div>
  );
};

export default EducationCourses;
