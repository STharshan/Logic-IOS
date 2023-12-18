import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FormContainer2.css";

const FormContainer2 = () => {
  const navigate = useNavigate();

  const onChangePasswordClick = useCallback(() => {
    navigate("/change-password");
  }, [navigate]);

  useEffect(() => {
    // Fetch user data from the server using the JWT token
    const token = localStorage.getItem("token"); // Assuming you store the token in localStorage

    if (token) {
      fetch("/api/userdata", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, []);
  
  return (
    <div className="product3">
      <div className="product-child3" />
      <div className="full-name-parent">
        <div className="full-name">Full Name:</div>
        <div className="ptcnihal">P.T.C.Nihal</div>
      </div>
      <div className="contact-no-parent">
        <div className="full-name">Contact No:</div>
        <div className="div39">0765958849</div>
      </div>
      <div className="email-parent">
        <div className="full-name">Email:</div>
        <div className="samplegmailcom">sample@gmail.com</div>
      </div>
      <div
        className="change-password-"
        onClick={onChangePasswordClick}
      >{`Change password ->`}</div>
      <div className="product-child4" />
      <div className="product-child5" />
      <div className="product-child6" />
      <div className="group-parent8">
        <div className="shops-parent">
          <div className="shops">Shops:</div>
          <div className="div40">02</div>
        </div>
        <div className="parent">
          <div className="div41">05</div>
          <div className="job-vacancies2">Job vacancies:</div>
        </div>
        <div className="group">
          <div className="div41">08</div>
          <div className="job-vacancies2">Education courses:</div>
        </div>
        <div className="group-child15" />
        <div className="group-child16" />
        <div className="group-child17" />
      </div>
    </div>
  );
};

export default FormContainer2;
