import { useMemo } from "react";
import "./FormContainer.css";

const FormContainer = ({ propTop }) => {
  const cardsIPhoneStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="cards-iphone2" style={cardsIPhoneStyle}>
      <div className="card-text4">
        <div className="card5">
          <div className="card6">
            <img
              className="icbaseline-email-icon"
              alt=""
              src="/icbaselineemail.svg"
            />
          </div>
        </div>
        <div className="text5">
          <div className="title16">Email</div>
          <div className="subheading6">
            <p className="samplemailgmailcom">samplemail@gmail.com</p>
            <p className="samplemailgmailcom">samplemail2@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
