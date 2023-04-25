import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import "./Login.scss";

const initialInfoLogin = {
  action: "login",
  user_name: "",
  password: "",
};

const Login = () => {
  const [infoLogin, setInfoLogin] = useState(initialInfoLogin);
  const [credentials, setCredentials] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(credentials === true){
      setTimeout(() => navigate(PublicRoutes.PLAYANDXBOX),2000)
    }
  }, [credentials])

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://videogame-exchange.000webhostapp.com/api-php/index.php";
    const optionsFetch = {
      method: "POST",
      body: JSON.stringify({
        action: infoLogin.action,
        user_name: infoLogin.user_name,
        password: infoLogin.password,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    fetch(url, optionsFetch)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCredentials(data.correctCredentials);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setInfoLogin({
      ...infoLogin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="login">
      <Link to={PublicRoutes.PLAYANDXBOX} className="login__backToMain">
        BACK TO MAIN
      </Link>
      <form onSubmit={handleSubmit} className="login__form">
        {credentials === false && (
          <div className="login__incorrectPassword">Incorrect Password</div>
        )}
        {credentials === true && (
          <div className="login__correctCredentials">Correct Credentials</div>
        )}
        {credentials === "user does not exist" && (
          <div className="login__userDoesNotExist">{credentials}</div>
        )}
        <h1 className="login__title">Login</h1>
        <label htmlFor="userName" className="login__usernameLabel">
          User name
        </label>
        <input
          type="text"
          id="userName"
          name="user_name"
          value={infoLogin.user_name}
          onChange={handleChange}
          className="login__usernameInput"
          spellCheck="false"
        />
        <label htmlFor="password" className="login__passwordLabel">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={infoLogin.password}
          onChange={handleChange}
          className="login__passwordInput"
        />
        <input
          type="submit"
          name="Login"
          value="Login"
          className="login__submit"
        />
        <Link to={PublicRoutes.SIGNUP} className="login__createAccount">
          Create an account
        </Link>
      </form>
    </section>
  );
};

export default Login;
