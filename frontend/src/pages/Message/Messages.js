import DarkModeNoSlideNo from "../../components/DarkModeNoSlideNo/DarkModeNoSlideNo";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import "./Messages.css";
import Footer from "../../components/Footer/Footer";

const Messages = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const line = "mingcute_menu-line"

  return (
    <div className="messages">
      <Footer
        footerTopmargin="780px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <div className="messages1">
        <DarkModeNoSlideNo
          space="/space.svg"
          title="Idikirim"
          time="9:41 am"
          desc="Lorem ipsum dolor sit amet, consectetur piscing elit. Vivamus in vulputate nisi."
          darkModeNoSlideNoBackgroundColor="#f2f2f7"
          titleFontFamily="'DM Sans'"
          labelFontFamily="'DM Sans'"
          descFontFamily="'DM Sans'"
        />
        <DarkModeNoSlideNo
          space="/space.svg"
          title="Idikirim"
          time="8:01 am"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in vulputate nisi."
          darkModeNoSlideNoBackgroundColor="#f2f2f7"
          titleFontFamily="'DM Sans'"
          labelFontFamily="'DM Sans'"
          descFontFamily="'DM Sans'"
        />
        <DarkModeNoSlideNo
          space="/space.svg"
          title="Idikirim "
          time="Monday"
          desc="Lorem ipsum dolor sit amet, consectetur piscing elit. Vivamus in vulputate nisi."
          darkModeNoSlideNoBackgroundColor="#f2f2f7"
          titleFontFamily="'DM Sans'"
          labelFontFamily="'DM Sans'"
          descFontFamily="'DM Sans'"
        />
        <DarkModeNoSlideNo
          space="/typeline.svg"
          title="Idikirim"
          time="Monday"
          desc="Lorem ipsum dolor sit amet, consectetur piscing elit. Vivamus in vulputate nisi."
          darkModeNoSlideNoBackgroundColor="#f2f2f7"
          titleFontFamily="'DM Sans'"
          labelFontFamily="'DM Sans'"
          descFontFamily="'DM Sans'"
        />
      </div>
      <DarkModeNoSlideNo
        space="/typeline.svg"
        title="Idikirim"
        time="Monday"
        desc="Lorem ipsum dolor sit amet, consectetur piscing elit. Vivamus in vulputate nisi."
        darkModeNoSlideNoBackgroundColor="#f2f2f7"
        darkModeNoSlideNoPosition="absolute"
        darkModeNoSlideNoTop="489px"
        darkModeNoSlideNoLeft="-1px"
        titleFontFamily="'DM Sans'"
        labelFontFamily="'DM Sans'"
        descFontFamily="'DM Sans'"
      />
      <b className="large-title1">Messages</b>
      <SectionCard3
         imageName={line}
         imgdisplay="none"
         searchLeft="240px"
         belldisplay="none"
      />
    </div>
  );
};

export default Messages;
