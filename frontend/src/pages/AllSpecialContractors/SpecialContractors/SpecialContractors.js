import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContractorCard from "../../../components/ContractorCard/ContractorCard";
import SectionCard3 from "../../../components/GroupComponent/GroupComponent";
import "./SpecialContractors.css";
import Footer from "../../../components/Footer/Footer";

const SpecialContractors = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onRegularangleSmallLeftIcon1Click = useCallback(() => {
    navigate("/special-contractors");
  }, [navigate]);

  return (
    <div className="special-contractors">
      <div className="rectangle" />
      <Footer
        footerTopmargin="1670px"
        titleHome="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       /> 
      <div className="special-contractors-inner">
        <img className="frame-child" alt="" src="/rectangle-62@2x.png" />
      </div>
      <ContractorCard
        productTitle="Contractor’s Name here"
        roofDesignPrice="Roof Design"
      />
      <div className="vector-parent">
        <img className="vector-icon1" alt="" src="/vector2.svg" />
        <div className="div3">011 7460875</div>
      </div>
      <div className="description-parent">
        <b className="description">{`Description `}</b>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet consectetur. Scelerisque auctor tellus est
          varius nunc ullamcorper arcu nibh orci. Elementum turpis ut est turpis
          turpis quam consequat. Ornare tristique ultrices mauris neque pulvinar
          in nisl. At settis sem. Non tempus proin ultrices sit faucibus quis et
          diam. Sit lorem mattis arcu ornare quis. Ac tincidunt aliquam bibendum
          nunc ipsum nibh et. Eu ipsum consequat proin diam sit arcu sit cursus
          eget. Suspendisse.
        </div>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet consectetur. Scelerisque auctor tellus est
          varius nunc ullamcorper arcu nibh orci. Elementum turpis ut est turp
          mattis arcu ornare quis. Ac tincidunt aliquam bibendum nunc ipsum nibh
          et. Eu ipsum consequat proin diam sit arcu sit cursus eget.
          Suspendisse.
        </div>
      </div>
      <img className="special-contractors-child" alt="" src="/vector-23.svg" />
      <div className="group-container">
        <div className="frame-wrapper">
          <div className="download-their-profile-parent">
            <div className="download-their-profile">{`Download their profile `}</div>
            <div className="official-company-parent">
              <div className="official-company">Official Company</div>
              <img
                className="iconlyboldshield-done"
                alt=""
                src="/iconlyboldshield-done.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="regularangle-small-left-icon2"
          alt=""
          src="/regularanglesmallleft.svg"
        />
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
      </div>
      <div className="our-projects">Our projects</div>
      <div className="special-contractors-inner1">
        <div className="rectangle-wrapper">
          <img className="group-item" alt="" src="/rectangle-84@2x.png" />
        </div>
      </div>
      <img className="special-contractors-item" alt="" src="/group-38216.svg" />
      <div className="rectangle-div" />
      <div className="project-name-here">Project name here</div>
      <div className="rectangle-parent">
        <div className="group-inner" />
        <div className="div4">
          <span>1</span>
          <span className="span1">/6</span>
        </div>
      </div>
      <SectionCard3 
        imgdisplay="none"
        searchLeft="270px"
      />
      <img
        className="regularangle-small-left-icon1"
        alt=""
        src="/regularanglesmallleft1.svg"
        onClick={onRegularangleSmallLeftIcon1Click}
      />
      <div className="mega-mall">Detail Product</div>
    </div>
  );
};

export default SpecialContractors;
