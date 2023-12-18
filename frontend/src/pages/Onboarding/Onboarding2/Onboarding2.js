import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Onboarding2.css";

const Onboarding2 = () => {
  const navigate = useNavigate();

  const onNextContainerClick = useCallback(() => {
    navigate("/register-account");
  }, [navigate]);

  return (
    <div className="onboarding1">
      <div className="content1">
        <div className="title3">
          <div className="body1">
            <div className="save-and-print">
              The central role of the location as a hub for various aspects of
              careers and construction while emphasizing its convenience.
            </div>
          </div>
          <b className="all-your-photos">{`A Hub for Construction & Convenience`}</b>
        </div>
      </div>
      <div className="directional1">
        <img className="dot-icon1" alt="" src="/dot1.svg" />
        <div className="next2" onClick={onNextContainerClick}>
          <div className="next3">Next</div>
        </div>
        <div className="skip2">
          <div className="next3">Skip</div>
        </div>
      </div>
      <img className="onboarding-inner" alt="" src="/rectangle-4440@2x.png" />
      <img className="group-icon" alt="" src="/group-38256@2x.png" />
    </div>
  );
};

export default Onboarding2;
