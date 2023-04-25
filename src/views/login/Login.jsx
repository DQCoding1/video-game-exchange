import React, {useState} from "react";

const initialInfoLogin = {
  action: "login",
  user_name: "",
  password: "",
};

const Login = () => {
  const [infoLogin, setInfoLogin] = useState(initialInfoLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://videogame-exchange.000webhostapp.com/api-php/index.php";
    const optionsFetch = {
      method: "POST",
      body: JSON.stringify({
        "action": infoLogin.action,
        "user_name": infoLogin.user_name,
        "password": infoLogin.password,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    fetch(url, optionsFetch)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setInfoLogin({
      ...infoLogin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="userName">Name</label>
        <input
          type="text"
          id="userName"
          name="user_name"
          value={infoLogin.user_name}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={infoLogin.password}
          onChange={handleChange}
        />
        <input type="submit" name="Login" value="Login" />
      </form>
    </section>
  );
};

export default Login;
