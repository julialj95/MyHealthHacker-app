import React, { useState, useEffect, useContext } from "react";
import "./LogsPage.css";
import config from "../config";
import TokenService from "../services/token-service";
import LogItem from "../LogItem/LogItem";
import UserContext from "../UserContext";

function Logs(props) {
  const context = useContext(UserContext);

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const { setLogs } = props;

  useEffect(() => {
    setIsFetching(true);
    fetch(`${config.API_BASE_URL}/logs`, {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + TokenService.getAuthToken(),
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((event) => Promise.reject(event));
        }
        return response.json();
      })
      .then((data) => {
        setLogs(data);
        setIsFetching(false);
      })
      .catch((error) => {
        setError(error);
        setIsFetching(false);
      });
  }, [setLogs]);

  const displayLogs = props.logs.map((logItem) => {
    return (
      <LogItem
        id={logItem.id}
        key={logItem.id}
        date={logItem.log_date}
        stress={logItem.stress}
        mood={logItem.mood}
        sleep_quality={logItem.sleep_quality}
        sleep_hours={logItem.sleep_hours}
        exercise={logItem.exercise_minutes}
        exercise_type={logItem.exercise_type}
        water={logItem.water}
        notes={logItem.notes}
        removeLog={props.removeLog}
      />
    );
  });
  return (
    <main className="about">
      <h1>{context.username}'s Logs</h1>
      {props.logs.length === 0 ? <h2>No saved logs</h2> : null}
      {isFetching ? <h2>Loading...</h2> : displayLogs}
      {error ? <h2>{error.error}</h2> : null}
    </main>
  );
}

Logs.defaultProps = {
  logs: [],
};

export default Logs;
