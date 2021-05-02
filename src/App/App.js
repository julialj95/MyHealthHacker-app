import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login";
import Signup from "../Signup";
import SubmitLog from "../SubmitLog/SubmitLog";
import HomePage from "../HomePage/HomePage";
import Logs from "../LogsPage/LogsPage";
import "./App.css";
import TokenService from "../services/token-service";
import UserContext from "../UserContext";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(TokenService.hasAuthToken());
  const [username, setUsername] = useState("");
  const [logs, setLogs] = useState([]);

  const handleLogout = () => {
    TokenService.clearAuthToken();
    setLoggedIn(TokenService.hasAuthToken());
    setLogs([]);
    setUsername("");
    history.push("/");
  };

  const removeLog = (id) => {
    const currentLogs = logs.filter((logItem) => logItem.id !== id);
    setLogs(currentLogs);
  };

  const userInfo = {
    username,
    setUsername,
  };
  return (
    <div className="wrapper">
      <UserContext.Provider value={userInfo}>
        <div className="header">
          <Nav loggedIn={loggedIn} handleLogout={handleLogout} />
          <Header />
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/login"
              render={(props) => <Login {...props} handleLogin={setLoggedIn} />}
            />
            <Route path="/signup" component={Signup} />
            <Route
              path="/submit-log"
              render={(props) => <SubmitLog {...props} logs={logs} />}
            />
            <Route
              path="/logs"
              render={(props) => (
                <Logs
                  {...props}
                  logs={logs}
                  setLogs={setLogs}
                  removeLog={removeLog}
                />
              )}
            />
          </Switch>
        </div>
      </UserContext.Provider>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
