import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LogInputForm from "../LogInputForm/LogInputForm";
import config from "../config";
import TokenService from "../services/token-service";
import moment from "moment";

function EditLog(props) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    log_id: "",
    log_date: "",
    stress: "",
    mood: "",
    sleep_quality: "",
    sleep_hours: "",
    exercise_minutes: "",
    exercise_type: "",
    water: "",
    notes: "",
  });
  const [error, setError] = useState("");

  const { id, setDisplayEditLogForm } = props;

  useEffect(() => {
    fetch(config.API_BASE_URL + `/logs/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TokenService.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.ok) {
          res.json().then((event) => Promise.reject(event));
        }
        return res.json();
      })
      .then((log) => {
        setFormData({
          log_id: log.id,
          log_date: moment(log.log_date).format("YYYY-MM-DD"),
          stress: log.stress,
          mood: log.mood,
          sleep_quality: log.sleep_quality,
          sleep_hours: log.sleep_hours,
          exercise_minutes: log.exercise_minutes,
          exercise_type: log.exercise_type,
          water: log.water,
          notes: log.notes,
        });
      })
      .catch((error) => setError(error));
  }, [id]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "stress" || name === "mood" || name === "sleep_quality") {
      value = parseInt(value);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      ...formData,
      mood: "",
      stress: "",
      sleep_hours: "",
      sleep_quality: "",
      exercise_minutes: "",
      exercise_type: "",
      water: "",
      notes: "",
    });
    setError("");
  };

  const editLog = (e) => {
    e.preventDefault();
    const { id } = props;

    const {
      log_date,
      stress,
      mood,
      sleep_hours,
      sleep_quality,
      exercise_type,
      exercise_minutes,
      water,
      notes,
    } = formData;
    const updatedLog = {
      log_date: moment(log_date).format("YYYY-MM-DD"),
      stress,
      mood,
      sleep_hours,
      sleep_quality,
      exercise_type,
      exercise_minutes,
      water,
      notes,
    };
    fetch(config.API_BASE_URL + `/logs/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedLog),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + TokenService.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.ok) {
          res.json().then((e) => Promise.reject(e));
        }

        history.push("/logs");
        setDisplayEditLogForm(false);
      })
      .catch((error) => setError(error));
  };
  return (
    <>
      <LogInputForm
        handleChange={handleChange}
        handleSubmitLog={editLog}
        handleReset={handleReset}
        id={formData.log_id}
        key={formData.log_id}
        stress={formData.stress}
        mood={formData.mood}
        log_date={formData.log_date}
        sleep_hours={formData.sleep_hours}
        sleep_quality={formData.sleep_quality}
        exercise_minutes={formData.exercise_minutes}
        exercise_type={formData.exercise_type}
        water={formData.water}
        notes={formData.notes}
      />
      {error ? <h2>{error}</h2> : null}
    </>
  );
}

export default EditLog;
