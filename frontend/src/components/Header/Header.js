import { useCallback } from "react";
import SectionCard3 from "../GroupComponent/GroupComponent";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const onRegularangleSmallLeftIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="instance-parent">
      <SectionCard3/>
      <div className="help-parent">
        <div className="help1">Help</div>
        <img
          className="regularangle-small-left-icon19"
          alt=""
          src="/regularanglesmallleft1.svg"
          onClick={onRegularangleSmallLeftIconClick}
        />
      </div>
    </div>
  );
};

export default Header;
