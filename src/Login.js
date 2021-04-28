import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import TokenService from "./services/token-service";
import AuthService from "./services/auth-service";
import userContext from "./UserContext";

function Login(props) {
  const context = useContext(userContext);
  const history = useHistory();
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleJwtAuthSubmit = (e) => {
    e.preventDefault();
    setError("");
    const { username, password } = userData;

    AuthService.postLogin({
      username: username,
      password: password,
    })
      .then((res) => {
        setUserData({ username: "", password: "" });
        TokenService.saveAuthToken(res.authToken);
        history.push("/submit-log");
        props.handleLogin(TokenService.hasAuthToken());
        context.setUsername(username);
      })
      .catch((error) => {
        setError(error.error);
      });
  };

  return (
    <main className="login">
      <h1>LOG IN</h1>
      <h2 className="demo_access">
        *To test out MyHealthHacker with a demo account, log in with the
        following credentials:
        <br />
        Username: demouser
        <br />
        Password: demopassword
      </h2>
      <form className="login_form" onSubmit={(e) => handleJwtAuthSubmit(e)}>
        <input
          className="login_field"
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={(e) => handleChange(e)}
        />

        <br />

        <input
          className="login_field"
          type="text"
          name="password"
          placeholder="Enter password"
          onChange={(e) => handleChange(e)}
        />

        <br />
        <button className="login_btn" type="submit">
          Log In
        </button>
        {error ? (
          <h2>Incorrect username or password. Please try again.</h2>
        ) : null}
      </form>
    </main>
  );
}
export default Login;
