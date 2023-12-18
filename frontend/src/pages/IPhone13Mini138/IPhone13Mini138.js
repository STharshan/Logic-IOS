import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./IPhone13Mini138.css";
import Footer from "../../components/Footer/Footer";
import Property1Black from "../../components/Property1Black/Property1Black";
import DarkModeNoRSectionLabel from "../../components/DarkModeNoRSectionLabel/DarkModeNoRSectionLabel";
import DarkModeFalseTypingNo from "../../components/DarkModeFalseTypingNo/DarkModeFalseTypingNo";

const IPhone13Mini138 = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onListRowIPhoneClick = useCallback(() => {
    navigate("/special-contractors");
  }, [navigate]);

  const onListRowIPhone2Click = useCallback(() => {
    navigate("/iphone-13-mini-137");
  }, [navigate]);

  const onCancelTextClick = useCallback(() => {
    navigate("/iphone-13-mini-137");
  }, [navigate]);

  const onListRowIPhone3Click = useCallback(() => {
    navigate("/iphone-13-mini-139");
  }, [navigate]);

  const onListRowIPhone4Click = useCallback(() => {
    navigate("/sub-contractors");
  }, [navigate]);

  const onListRowIPhone5Click = useCallback(() => {
    navigate("/job-seeker");
  }, [navigate]);

  const onListRowIPhone1Click = useCallback(() => {
    navigate("/shops-items-category");
  }, [navigate]);

  return (
    <div className="iphone-13-mini-138">
      <DarkModeNoRSectionLabel
        title="All"
        darkModeNoRSectionLabelWidth="359px"
        darkModeNoRSectionLabelPosition="absolute"
        darkModeNoRSectionLabelTop="110px"
        darkModeNoRSectionLabelCursor="pointer"
        titleFontFamily="Inter"
        onListRowIPhoneClick={onListRowIPhone2Click}
      />
      <DarkModeNoRSectionLabel
        title="Categorises"
        darkModeNoRSectionLabelWidth="359px"
        darkModeNoRSectionLabelPosition="absolute"
        darkModeNoRSectionLabelTop="154px"
        titleFontFamily="Inter"
        onListRowIPhoneClick={onListRowIPhone1Click}
      />
      <DarkModeNoRSectionLabel
        title="Rent Machines"
        darkModeNoRSectionLabelWidth="359px"
        darkModeNoRSectionLabelPosition="absolute"
        darkModeNoRSectionLabelTop="198px"
        darkModeNoRSectionLabelCursor="pointer"
        titleFontFamily="Inter"
        onListRowIPhoneClick={onListRowIPhone3Click}
      />
      <DarkModeNoRSectionLabel
        title="Special Contractors"
        darkModeNoRSectionLabelWidth="359px"
        darkModeNoRSectionLabelPosition="absolute"
        darkModeNoRSectionLabelTop="242px"
        darkModeNoRSectionLabelCursor="pointer"
        titleFontFamily="Inter"
        onListRowIPhoneClick={onListRowIPhoneClick}
      />
      <DarkModeNoRSectionLabel
        title="Sub Contractors"
        darkModeNoRSectionLabelWidth="359px"
        darkModeNoRSectionLabelPosition="absolute"
        darkModeNoRSectionLabelTop="286px"
        darkModeNoRSectionLabelCursor="pointer"
        titleFontFamily="Inter"
        onListRowIPhoneClick={onListRowIPhone4Click}
      />
      <DarkModeNoRSectionLabel
        title="Job Seekers"
        darkModeNoRSectionLabelWidth="359px"
        darkModeNoRSectionLabelPosition="absolute"
        darkModeNoRSectionLabelTop="330px"
        darkModeNoRSectionLabelCursor="pointer"
        titleFontFamily="Inter"
        onListRowIPhoneClick={onListRowIPhone5Click}
      />
      <Property1Black
        batteryLeft="285px"
        batteryTop="15px"
      />
      <DarkModeFalseTypingNo
        typeline="/typeline.svg"
        search="Choose"
        icon="/icon--magnifyingglass.svg"
        sFSymbolMicrophone="/typeline.svg"
        cancel
        textCursor
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
   <Footer
        footerTopmargin="615px"
        titleHome="var(--color-goldenrod)"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
    </div>
  );
};

export default IPhone13Mini138;
