import SampleTextContainer from "../SampleTextContainer/SampleTextContainer";
import "./CategorySection.css";

const CategorySection = () => {
  return (
    <div className="group-parent13">
      <div className="icon-box-parent">
        <SampleTextContainer sampleText="Sample" displayText="Text" />
        <SampleTextContainer
          sampleText="Sample"
          displayText="Text"
          propLeft="320px"
          propBackgroundColor="#e4f3ea"
        />
        <SampleTextContainer
          sampleText="Sample"
          displayText="Text"
          propLeft="160px"
          propBackgroundColor="#fff6e4"
        />
        <SampleTextContainer
          sampleText="Powre"
          displayText="Tool"
          propLeft="80px"
          propBackgroundColor="#ffece8"
        />
        <SampleTextContainer
          sampleText="All "
          displayText="items"
          propLeft="0px"
          propBackgroundColor="#e4f3ea"
        />
      </div>
      <div className="categories">Categories</div>
    </div>
  );
};

export default CategorySection;
