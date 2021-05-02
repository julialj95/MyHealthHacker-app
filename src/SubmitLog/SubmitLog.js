import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SubmitLog.css";
import config from "../config";
import TokenService from "../services/token-service";
import LogInputForm from "../LogInputForm/LogInputForm";
import moment from "moment";

function Logs(props) {
  const [logData, setLogData] = useState({
    log_date: "",
    mood: "",
    stress: "",
    sleep_hours: "",
    sleep_quality: "",
    exercise_minutes: "",
    exercise_type: "",
    water: "",
    notes: "",
    parent: "submitLog",
  });
  const [validationError, setValidationError] = useState("");
  const [fetchError, setFetchError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (
      name === "stress" ||
      name === "mood" ||
      name === "sleep_quality" ||
      name === "exercise_minutes" ||
      name === "water"
    ) {
      value = parseInt(value);
    }
    if (name === "sleep_hours") {
      value = Number(value);
    }
    setLogData({
      ...logData,
      [name]: value,
    });
    setValidationError("");
  };

  const handleReset = () => {
    setLogData({
      log_date: "",
      mood: "",
      stress: "",
      sleep_hours: "",
      sleep_quality: "",
      exercise_minutes: "",
      exercise_type: "",
      water: "",
      notes: "",
    });
    setValidationError("");
    setFetchError("");
  };

  const submitLog = (e) => {
    e.preventDefault();
    const {
      log_date,
      mood,
      stress,
      sleep_hours,
      sleep_quality,
      exercise_minutes,
      exercise_type,
      water,
      notes,
    } = logData;

    if (log_date === "") {
      return setValidationError("Please select a date");
    }

    const dateCheck = props.logs.filter(
      (logItem) => moment(logItem.log_date).format("YYYY-MM-DD") === log_date
    );

    if (dateCheck.length > 0) {
      return setValidationError(`Log already exists for ${log_date}.`);
    }

    fetch(`${config.API_BASE_URL}/logs`, {
      method: "POST",
      body: JSON.stringify({
        log_date,
        mood,
        stress,
        sleep_hours,
        sleep_quality,
        exercise_minutes,
        exercise_type,
        water,
        notes,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + TokenService.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.ok) {
          res.json().then((e) => Promise.reject(e));
        }

        res.json();

        history.push("/logs");
      })
      .catch((error) => setFetchError(error));
  };

  return (
    <main className="new_log">
      <h2 className="log_form_header">Submit Log</h2>
      <LogInputForm
        handleChange={handleChange}
        handleSubmitLog={submitLog}
        handleReset={handleReset}
        log_date={logData.log_date}
        mood={logData.mood}
        stress={logData.stress}
        sleep_hours={logData.sleep_hours}
        sleep_quality={logData.sleep_quality}
        exercise_minutes={logData.exercise_minutes}
        exercise_type={logData.exercise_type}
        water={logData.water}
        notes={logData.notes}
        parent={logData.parent}
      />
      {fetchError ? <h2>{fetchError.message}</h2> : null}
      {validationError ? <h2>{validationError}</h2> : null}
    </main>
  );
}

export default Logs;
