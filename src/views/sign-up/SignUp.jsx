import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import signUpImage from "../../assets/signUp.jpg";
import { PrivateRoutes } from "../../routes/routes";

const initialSignUp = {
  userName: "",
  email: "",
  password: "",
};

const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const SignUp = () => {
  const [infoSignUp, setInfoSignUp] = useState(initialSignUp);
  const signUpSuccessRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      infoSignUp.userName.trim() === "" ||
      !regExpEmail.test(infoSignUp.email) ||
      infoSignUp.password.trim() === ""
    ) {
      alert("inputs can't be empty or email is not valid");
    } else {
      localStorage.setItem("userStorage", infoSignUp.userName);
      signUpSuccessRef.current.classList.add("signUp__success--visible");
      setTimeout(() => {
        signUpSuccessRef.current.classList.remove("signUp__success--visible");
        navigate(PrivateRoutes.POSTGAME);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setInfoSignUp({
      ...infoSignUp,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section>
      <div>
        <img src={signUpImage} alt="people playing videogames" />
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor="">User name</label>
          <input
            type="text"
            name="userName"
            value={infoSignUp.userName}
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={infoSignUp.email}
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={infoSignUp.password}
            onChange={handleChange}
          />
          <input type="submit" value="send" />
        </form>
      </div>
      <div className="signUp__success" ref={signUpSuccessRef}></div>
    </section>
  );
};

export default SignUp;
