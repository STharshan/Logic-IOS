import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DarkModeNoRSectionLabel from "../../components/DarkModeNoRSectionLabel/DarkModeNoRSectionLabel";
import DarkModeFalseTypingNo from "../../components/DarkModeFalseTypingNo/DarkModeFalseTypingNo";
import "./IPhone13Mini139.css";
import Footer from "../../components/Footer/Footer";
import Property1Black from "../../components/Property1Black/Property1Black";

const IPhone13Mini139 = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onCancelTextClick = useCallback(() => {
    navigate("/iphone-13-mini-137");
  }, [navigate]);

  const onListRowIPhone1Click = useCallback(() => {
    navigate("/shops-items-category");
  }, [navigate]);

  const onListRowIPhone2Click = useCallback(() => {
    navigate("/special-contractors");
  }, [navigate]);

  const onListRowIPhone3Click = useCallback(() => {
    navigate("/sub-contractors");
  }, [navigate]);

  const onListRowIPhone4Click = useCallback(() => {
    navigate("/iphone-13-mini-138");
  }, [navigate]);

  const onListRowIPhone5Click = useCallback(() => {
    navigate("/job-seeker");
  }, [navigate]);





  return (
    <div className="iphone-13-mini-139">
      <Property1Black
        batteryLeft="285px"
        batteryTop="15px"
      />
      <DarkModeFalseTypingNo
        search="Choose"
        icon="/icon--magnifyingglass.svg"
        sFSymbolMicrophone="/typeline.svg"
        darkModeFalseTypingNoPosition="absolute"
        darkModeFalseTypingNoTop="54px"
        darkModeFalseTypingNoLeft="16px"
        searchFieldBackgroundColor="#f2f2f7"
        textGap="4px"
        queryFontFamily="Inter"
        cancelFontFamily="Inter"
        cancelColor="#f4b421"
        cancelCursor="pointer"
        onCancelTextClick={onCancelTextClick}
      />
      <DarkModeNoRSectionLabel
        title="All"
        darkModeNoRSectionLabelWidth="359px"
        darkModeNoRSectionLabelPosition="absolute"
        darkModeNoRSectionLabelTop="99px"
        darkModeNoRSectionLabelLeft="0px"
        darkModeNoRSectionLabelCursor="pointer"
        titleFontFamily="Inter"
        onListRowIPhoneClick={onListRowIPhone1Click}
      />
      <DarkModeNoRSectionLabel
        title="Categorises"
        darkModeNoRSectionLabelWidth="359px"
        darkModeNoRSectionLabelPosition="absolute"
        darkModeNoRSectionLabelTop="143px"
        titleFontFamily="Inter"
        onListRowIPhoneClick={onListRowIPhone1Click}
      />
      <div className="list-row-iphone" onClick={onListRowIPhone4Click}>
        <div className="space1" />
        <div className="left-icon-17pt-iphone">
          <div className="icon3">
          </div>
        </div>
        <div className="title-desc2">
          <div className="title5">Rent Machines</div>
        </div>
        <div className="right-section1">
          <div className="label-container">
          </div>
          <div className="chevron-13pt-iphone2">
            <img className="chevronright2" src="mingcute_down-fill.png"/>
          </div>
        </div>
      </div>
      <div className="list-row-iphone-parent">
        <div className="list-row-iphone1">
          <div className="title-desc3">
            <div className="title6">Heavy Machinery</div>
          </div>
        </div>
        <div className="frame-div">
          <div className="chevron-13pt-iphone3">
          <img className="chevronright3" src="/mingcute_right-fill.png"/>
          </div>
        </div>
      </div>
      <div className="list-row-iphone-group">
        <div className="list-row-iphone1">
          <div className="title-desc3">
            <div className="title6">Equipment</div>
          </div>
          <div className="right-section2" />
        </div>
        <div className="frame-div">
          <div className="chevron-13pt-iphone3">
            <img className="chevronright3" src="/mingcute_right-fill.png"/>
          </div>
        </div>
      </div>
      <div className="list-row-iphone-container">
        <div className="list-row-iphone1">
          <div className="space1" />
          <div className="title-desc3">
            <div className="title6">Excavator</div>
          </div>
        </div>
        <div className="frame-div">
          <div className="chevron-13pt-iphone3">
          <img className="chevronright3" src="/mingcute_right-fill.png"/>
          </div>
        </div>
      </div>
      <div className="group-div">
        <div className="list-row-iphone1">
          <div className="title-desc3">
            <div className="title6">Portable Machines</div>
          </div>
        </div>
        <div className="frame-div">
          <div className="right-icon-22pt-iphone2">
          <img className="chevronright3" src="/mingcute_right-fill.png"/>
          </div>
          <div className="chevron-13pt-iphone3">
          <img className="chevronright3" src="/mingcute_right-fill.png"/>
          </div>
        </div>
      </div>
      <div className="list-row-iphone-parent1">
        <div className="list-row-iphone1">
          <div className="title-desc3">
            <div className="title6">Other</div>
          </div>
          <div className="right-section2" />
        </div>
        <div className="frame-div">
          <div className="right-icon-22pt-iphone2">
          <img className="chevronright3" src="/mingcute_right-fill.png"/>
          </div>
          <div className="chevron-13pt-iphone3">
          <img className="chevronright3" src="/mingcute_right-fill.png"/>
          </div>
        </div>
      </div>
      <div className="list-row-iphone-parent2">
        <div className="list-row-iphone1">
          <div className="title-desc3">
            <div className="title6">JCB</div>
          </div>
          <div className="right-section2" />
        </div>
        <div className="frame-div">
          <div className="right-icon-22pt-iphone2">
          <img className="chevronright3" src="/mingcute_right-fill.png"/>
          </div>
          <div className="chevron-13pt-iphone3">
          <img className="chevronright3" src="/mingcute_right-fill.png"/>
          </div>
        </div>
      </div>
      <DarkModeNoRSectionLabel
        title="Special Contractors"
        darkModeNoRSectionLabelWidth="359px"
        darkModeNoRSectionLabelPosition="absolute"
        darkModeNoRSectionLabelTop="515px"
        darkModeNoRSectionLabelLeft="0px"
        darkModeNoRSectionLabelCursor="unset"
        titleFontFamily="Inter"
        onListRowIPhoneClick={onListRowIPhone2Click}
      />
      <DarkModeNoRSectionLabel
        title="Sub Contractors"
        darkModeNoRSectionLabelWidth="359px"
        darkModeNoRSectionLabelPosition="absolute"
        darkModeNoRSectionLabelTop="549px"
        titleFontFamily="Inter"
        onListRowIPhoneClick={onListRowIPhone3Click}
      />
      <DarkModeNoRSectionLabel
        title="Job Seekers"
        darkModeNoRSectionLabelWidth="359px"
        darkModeNoRSectionLabelPosition="absolute"
        darkModeNoRSectionLabelTop="583px"
        darkModeNoRSectionLabelLeft="0px"
        titleFontFamily="Inter"
        onListRowIPhoneClick={onListRowIPhone5Click}
      />
      <Footer
        footerTopmargin="712px"
        titleHome="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
    </div>
  );
};

export default IPhone13Mini139;
