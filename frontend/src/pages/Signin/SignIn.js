import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Property1Black from "../../components/Property1Black/Property1Black";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import "./SignIn.css";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();

  const onMoreTextClick = useCallback(() => {
    navigate("/reset-password");
  }, [navigate]);

  const onMoreText1Click = useCallback(() => {
    navigate("/register-account");
  }, [navigate]);

  const [email, setEmail] = useState("");
  const [newpassword, setNewpassword] = useState("");
  
  
  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {
      email: email,
      newpassword: newpassword,
    })
    .then(res => {
        console.log(res);
        if(res.data.Status === 'Success') {
          console.log(res.data.Token);
          navigate("/iphone-13-mini-137");
        } else {
            window.alert(res.data.Error);
        }
    })
    .catch(err => console.log(err));
}


  return (
    <div className="sign-in1">
      <div className="more4" onClick={onMoreTextClick}>
        Forgot Password
      </div>
      <div className="more5" onClick={onMoreText1Click}>
        Sign Up
      </div>
      <Property1Black
        property1BlackPosition="absolute"
        batteryLeft="280px"
      />
      <b className="more6">Welcome to IDIKIRIM.COM</b>
      <Property1Primary
        button="Sign In"
        property1PrimaryBackgroundColor="#f4b421"
        property1PrimaryWidth="342px"
        property1PrimaryPosition="absolute"
        property1PrimaryTop="500px"
        property1PrimaryLeft="17px"
        property1PrimaryCursor="pointer"
        onButtonFullContainerClick={login}
      />
      <FullNameField
        fullNameInput="Email"
        fullNameInputLabel="Enter your email"
        changeEvent={(e) => {setEmail(e.target.value)}}
        propTop="274px"
        propLeft="17px"
        propFontColor="black"
        inputtype="email"
      />
      <FullNameField
        fullNameInput="Password"
        fullNameInputLabel="Enter your password"
        changeEvent={(e) => {setNewpassword(e.target.value)}}
        propTop="375px"
        propLeft="17px"
        inputtype="password"
        propFontColor="black"
      />
      <img className="ic-hide-pass-icon3" alt="" src="/ic-hide-pass.svg" />
      <img className="sign-in-child" alt="" src="/rectangle-4440@2x.png" />
    </div>
  );
};

export default SignIn;
