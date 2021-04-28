import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import config from "./config";
import TokenService from "./services/token-service";

function Signup() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { username, password } = userData;

    fetch(`${config.API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + TokenService.getAuthToken(),
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
      })
      .then(() => history.push("/login"))
      .catch((error) => setError(error));
  };

  return (
    <main className="signup">
      {" "}
      <h1>SIGN UP</h1>
      <h2 className="signup_instructions">
        Create an account to start tracking your health habits!
      </h2>
      <form className="signup_form" onSubmit={(e) => handleSignup(e)}>
        <input
          className="signup_field"
          type="text"
          name="username"
          placeholder="Create a username..."
          onChange={(e) => handleChange(e)}
        />

        <br />

        <input
          className="signup_field"
          type="text"
          name="password"
          placeholder="Create a password..."
          onChange={(e) => handleChange(e)}
        />

        <br />
        <button className="signup_btn" type="submit">
          Create Account
        </button>
      </form>
      {error ? <h2>{error.error}</h2> : null}
    </main>
  );
}

export default Signup;
