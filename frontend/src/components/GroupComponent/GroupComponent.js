import { useCallback, useMemo } from "react";
import Property1Black from "../Property1Black/Property1Black";
import "./GroupComponent.css";
import { useNavigate } from "react-router-dom";

const SectionCard3 = ({
  imageName,
  searchLeft,
  searchdisplay,
  imgdisplay,
  locationLeft,
  headerTop,
  imageLocation,
  bellLeft,
  belldisplay,
  lineLeft,
  linedisplay
}) => {
  
  const imageLine = process.env.PUBLIC_URL + `/${imageName}.png`
  const imageLoc = process.env.PUBLIC_URL + `/${imageLocation}.png`

  const searchStyle = useMemo(() => {
    return {
      marginLeft: searchLeft,
      display: searchdisplay
    };
  }, [searchLeft,searchdisplay]);

  const locationStyle = useMemo(() => {
    return {
      marginLeft: locationLeft,
      display: imgdisplay
    };
  }, [locationLeft, imgdisplay]);

  const bellStyle = useMemo(() => {
    return {
      marginLeft: bellLeft,
      display: belldisplay
    };
  }, [bellLeft, belldisplay]);

  const lineStyle = useMemo(() => {
    return {
      marginLeft: lineLeft,
      display: linedisplay
    };
  }, [lineLeft, linedisplay]);

  const headerStyle = useMemo(() => {
    return {
      marginTop: headerTop
    };
  }, [headerTop]);

  const navigate = useNavigate();
  
  const onMenu = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onOption = useCallback(() => {
    navigate("/iphone-13-mini-138");
  }, [navigate]);

  const onLocation = useCallback(() => {
    navigate("/iphone-13-mini-140");
  }, [navigate]);

  const onMessage = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  return (
    <div className="title-page-parent">
        
          <div className="header" style={headerStyle}>
            <img className="line" alt="" src={imageLine} onClick={onMenu} style={lineStyle} />
            <img className="location" alt="" style={locationStyle} src={imageLoc} onClick={onLocation}/>
            <img className="search" style={searchStyle}  onClick={onOption} alt="" src="/search.png"/>
            <img className="bell" style={bellStyle} onClick={onMessage} alt="" src="/codicon_bell-dot.png"/>
          </div>
    
      <Property1Black
        property1BlackPosition="absolute"
        property1BlackTop="0%"
        property1BlackLeft="0%"
        property1BlackWidth="100%"
        property1BlackHeight="44.44%"
        property1BlackRight="0%"
        property1BlackBottom="55.56%"
        timeFontWeight="bold"
        timeFontFamily="'DM Sans'"
        batteryLeft="285px"
      />
    </div>
  );
};

export default SectionCard3;
