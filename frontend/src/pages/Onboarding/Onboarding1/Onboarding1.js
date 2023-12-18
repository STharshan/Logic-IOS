import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Onboarding1.css";

const Onboarding1 = () => {
  const navigate = useNavigate();

  const onNextContainerClick = useCallback(() => {
    navigate("/onboarding2");
  }, [navigate]);

  const onSkip = useCallback(() => {
    navigate("/register-account");
  }, [navigate]);

  return (
    <div className="onboarding2">
      <div className="content2">
        <div className="title4">
          <div className="body2">
            <div className="our-community-of1">
              he place or platform being described is the gateway to exciting
              opportunities and experiences.
            </div>
          </div>
          <b className="design-templates-are">
            Your Next Job, Your Next Tool, Your Next Adventure.
          </b>
        </div>
      </div>
      <div className="directional2">
        <img className="dot-icon2" alt="" src="/dot2.svg" />
        <div className="next4" onClick={onNextContainerClick}>
          <div className="next5">Next</div>
        </div>
        <div className="skip4">
          <div className="next5" onClick={onSkip}>Skip</div>
        </div>
      </div>
      <img className="rectangle-icon" alt="" src="/rectangle-4440@2x.png" />
      <img className="onboarding-child1" alt="" src="/group-38254@2x.png" />
    </div>
  );
};

export default Onboarding1;
