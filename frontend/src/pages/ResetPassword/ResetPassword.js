import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Black from "../../components/Property1Black/Property1Black";
import Property1Field1En from "../../components/Property1FieldEn/Property1Field1En";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import "./ResetPassword.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  const onButtonFullContainerClick = useCallback(() => {
    navigate("/verification");
  }, [navigate]);

  const gotomain = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className="reset-password">
      <Property1Black
        property1BlackPosition="absolute"
        batteryLeft="280px"
      />
      <b className="more2">Reset Password</b>
      <Property1Field1En
        topInvestmentStrat="Email/ Phone"
        property1Field1EnPosition="absolute"
        property1Field1EnTop="316px"
        property1Field1EnLeft="25px"
      />
      <Property1Primary
        button="Reset"
        property1PrimaryBackgroundColor="#f4b421"
        property1PrimaryWidth="325px"
        property1PrimaryPosition="absolute"
        property1PrimaryTop="466px"
        property1PrimaryLeft="25px"
        property1PrimaryCursor="pointer"
        onButtonFullContainerClick={onButtonFullContainerClick}
      />
        <img className="arrow-icon" alt="" src="/title-page1.svg" onClick={gotomain}/>
      <img
        className="reset-password-child"
        alt=""
        src="/rectangle-4440@2x.png"
      />
    </div>
  );
};

export default ResetPassword;
