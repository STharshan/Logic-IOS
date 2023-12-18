import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css";

const Onboarding = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/onboarding1");
  }, [navigate]);

  const onSkip = useCallback(() => {
    navigate("/register-account");
  }, [navigate]);

  return (
    <div className="onboarding">
      <div className="content">
        <div className="title">
          <div className="body">
            <div className="our-community-of">
              The convenience of having everything you need in a single
              location.
            </div>
          </div>
          <b className="welcome-to-camo">
            Join. Build. Create. All in One Place.
          </b>
        </div>
      </div>
      <div className="directional">
        <img className="dot-icon" alt="" src="/dot.svg" />
        <div className="next">
          <div className="next1" onClick={onNextTextClick}>
            Next
          </div>
        </div>
        <div className="skip">
          <div className="skip1" onClick={onSkip}>Skip</div>
        </div>
      </div>
      <img className="onboarding-child" alt="" src="/rectangle-4440@2x.png" />
      <img className="onboarding-item" alt="" src="/group-38255@2x.png" />
    </div>
  );
};

export default Onboarding;
