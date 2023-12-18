import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Black from "../../components/Property1Black/Property1Black";
import VerificationCodeForm from "../../components/VerificationCodeForm/VerificationCodeForm";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import "./Verification.css";

const Verification = () => {
  const navigate = useNavigate();

  const onButtonFullContainerClick = useCallback(() => {
    navigate("/update-password");
  }, [navigate]);

  const onWeHaveSentClick = useCallback(() => {
    navigate("/reset-password");
  }, [navigate]);

  const onSendResetCodeClick = useCallback(() => {
    navigate("/reset-password");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/reset-password");
  }, [navigate]);

  return (
    <div className="verification">
      <Property1Black
        property1BlackPosition="absolute"
        batteryLeft="280px"
      />
      <b className="more1">Verification</b>
      <div className="we-have-sent-container" onClick={onWeHaveSentClick}>
        <span>{`We have sent a verification code to +628*******716 `}</span>
        <span className="change">Change?</span>
      </div>
      <div className="send-reset-code" onClick={onSendResetCodeClick}>
        Send reset code in
      </div>
      <b className="b">
        03:05
      </b>
      <VerificationCodeForm />
      <Property1Primary
        button="Continue"
        property1PrimaryBackgroundColor="#f4b421"
        property1PrimaryWidth="325px"
        property1PrimaryPosition="absolute"
        property1PrimaryTop="529px"
        property1PrimaryLeft="25px"
        property1PrimaryCursor="pointer"
        onButtonFullContainerClick={onButtonFullContainerClick}
      />
      <img className="verification-child" alt="" src="/rectangle-4440@2x.png" />
    </div>
  );
};

export default Verification;
