import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContractorCard from "../../../components/ContractorCard/ContractorCard";
import SectionCard3 from "../../../components/GroupComponent/GroupComponent";
import "./SpecialContractors1.css";
import Footer from "../../../components/Footer/Footer";

const SpecialContractors1 = () => {

  const home = "vector";
  const international = "icon-park-outline_international";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onRegularangleSmallLeftIcon1Click = useCallback(() => {
    navigate("/international-contractors");
  }, [navigate]);

  return (
    <div className="special-contractors1">
      <div className="rectangle1" />
      <Footer
        footerTopmargin="1735px"
        titleInternational="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
      <div className="special-contractors-inner2">
        <img className="frame-item" alt="" src="/rectangle-62@2x.png" />
      </div>
      <ContractorCard
        productTitle="Contractor’s Name here"
        roofDesignPrice="Roof Design"
      />
      <div className="vector-group">
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <div className="div5">011 7460875</div>
      </div>
      <div className="description-group">
        <b className="description1">{`Description `}</b>
        <div className="lorem-ipsum-dolor2">
          Lorem ipsum dolor sit amet consectetur. Scelerisque auctor tellus est
          varius nunc ullamcorper arcu nibh orci. Elementum turpis ut est turpis
          turpis quam consequat. Ornare tristique ultrices mauris neque pulvinar
          in nisl. At settis sem. Non tempus proin ultrices sit faucibus quis et
          diam. Sit lorem mattis arcu ornare quis. Ac tincidunt aliquam bibendum
          nunc ipsum nibh et. Eu ipsum consequat proin diam sit arcu sit cursus
          eget. Suspendisse.
        </div>
        <div className="lorem-ipsum-dolor2">
          Lorem ipsum dolor sit amet consectetur. Scelerisque auctor tellus est
          varius nunc ullamcorper arcu nibh orci. Elementum turpis ut est turp
          mattis arcu ornare quis. Ac tincidunt aliquam bibendum nunc ipsum nibh
          et. Eu ipsum consequat proin diam sit arcu sit cursus eget.
          Suspendisse.
        </div>
      </div>
      <img className="special-contractors-child1" alt="" src="/vector-23.svg" />
      <div className="group-parent1" >
        <div className="frame-container">
          <div className="download-their-profile-group">
            <div className="download-their-profile1">{`Download their profile `}</div>
            <div className="official-company-group">
              <div className="official-company1">Official Company</div>
              <img
                className="iconlyboldshield-done1"
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
        <img className="image-7-icon1" alt="" src="/image-7@2x.png" />
      </div>
      <div className="our-projects1">Our projects</div>
      <div className="special-contractors-inner3">
        <div className="rectangle-container">
          <img className="group-child1" alt="" src="/rectangle-84@2x.png" />
        </div>
      </div>
     
      <div className="special-contractors-child3" />
      <div className="project-name-here1">Project name here</div>
      <div className="rectangle-group">
        <div className="group-child2" />
        <div className="div6">
          <span>1</span>
          <span className="span2">/6</span>
        </div>
      </div>
      <SectionCard3
        imgdisplay="none"
        searchLeft="270px"
      />
      <img
        className="regularangle-small-left-icon3"
        alt=""
        src="/regularanglesmallleft1.svg"
        onClick={onRegularangleSmallLeftIcon1Click}
      />
      <div className="mega-mall1">Detail Product</div>
    </div>
  );
};

export default SpecialContractors1;
