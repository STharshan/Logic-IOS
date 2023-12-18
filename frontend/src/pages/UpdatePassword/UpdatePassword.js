import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Black from "../../components/Property1Black/Property1Black";
import Property1FieldPassView from "../../components/Property1FieldPassVeiw/Property1FieldPassView";
import Property1FieldPassEn from "../../components/Property1FieldPassEn/Property1FieldPassEn";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import "./UpdatePassword.css";

const UpdatePassword = () => {
  const navigate = useNavigate();

  const onButtonFullContainerClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className="update-password">
      <Property1Black
        property1BlackPosition="absolute"
        property1BlackWidth="375px"
        property1BlackHeight="44px"
        timeFontWeight="600"
        timeFontFamily="'SF Pro Text'"
        batteryLeft="280px"
      />
      <Property1FieldPassView
        topInvestmentStrat="New Password"
        property1FieldPassViewPosition="absolute"
        property1FieldPassViewTop="292px"
        property1FieldPassViewLeft="25px"
      />
      <Property1FieldPassEn
        topInvestmentStrat="Confirm New Password"
        property1FieldPassEnPosition="absolute"
        property1FieldPassEnTop="412px"
        property1FieldPassEnLeft="25px"
      />
      <b className="more">Update Password</b>
      <Property1Primary
        button="Save Update"
        property1PrimaryBackgroundColor="#f4b421"
        property1PrimaryWidth="325px"
        property1PrimaryPosition="absolute"
        property1PrimaryTop="531px"
        property1PrimaryLeft="25px"
        property1PrimaryCursor="pointer"
        onButtonFullContainerClick={onButtonFullContainerClick}
      />
      <img
        className="update-password-child"
        alt=""
        src="/rectangle-4440@2x.png"
      />
    </div>
  );
};

export default UpdatePassword;
