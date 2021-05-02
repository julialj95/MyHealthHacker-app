import React, { useState } from "react";
import "./LogItem.css";
import EditLog from "../EditLog/EditLog";
import config from "../config";
import TokenService from "../services/token-service";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faWalking } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
function LogItem(props) {
  const [displayFull, setDisplayFull] = useState(false);
  const [displayEditLogForm, setDisplayEditLogForm] = useState(false);
  const [error, setError] = useState("");

  const setStressColor = (param) => {
    if (param === 1) {
      return "#80b918";
    }
    if (param >= 2 && param < 5) {
      return "yellow";
    }
    if (param === 5) {
      return "#c1121f";
    }
  };

  const setMoodColor = (param) => {
    if (param === 1) {
      return "#c1121f";
    }
    if (param >= 2 && param < 4) {
      return "yellow";
    }
    if (param >= 4) {
      return "#80b918";
    }
  };
  const deleteLog = () => {
    const { id } = props;

    fetch(`${config.API_BASE_URL}/logs/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + TokenService.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
      })
      .then(() => {
        props.removeLog(id);
      })
      .catch((error) => setError(error));
  };

  const renderFullItem = () => {
    return (
      <section className="log_record long">
        <h2 className="title_row date_display">
          <FontAwesomeIcon icon={faCalendarAlt} />{" "}
          {moment(props.date).format("YYYY-MM-DD")}
        </h2>
        <div className="top_section">
          <div className="log_section">
            <label htmlFor="stress" className="tracker margin">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                style={{ color: setStressColor(props.stress) }}
              />{" "}
              Stress Level: {props.stress !== "" ? props.stress + "/5 " : null}
              <input
                className="stress_style"
                type="range"
                name="stress"
                id="stress"
                min="1"
                max="5"
                step="1"
                disabled={true}
                value={props.stress}
              />
            </label>
            <label htmlFor="mood" className="tracker margin">
              <FontAwesomeIcon
                icon={faSmile}
                style={{ color: setMoodColor(props.mood) }}
              />{" "}
              Mood: {props.mood !== "" ? props.mood + "/5 " : null}
              <input
                className="mood_style"
                type="range"
                name="mood"
                id="mood"
                min="0"
                max="5"
                step="1"
                disabled={true}
                value={props.mood}
              />
            </label>
          </div>
          <div className="log_section">
            <p className="tracker">
              <FontAwesomeIcon icon={faClock} /> Sleep: {props.sleep_hours}{" "}
              hours
            </p>

            <label className="tracker margin" htmlFor="sleep_quality">
              <FontAwesomeIcon icon={faBed} /> Sleep Quality:{" "}
              {props.sleep_quality !== "" ? props.sleep_quality + "/5 " : null}
              <input
                className="sleep_style"
                type="range"
                name="sleep_quality"
                id="sleep_quality"
                min="0"
                max="5"
                step="1"
                disabled={true}
                value={props.sleep_quality}
              />
            </label>
          </div>
          <div className="log_section">
            <p className="tracker">
              <FontAwesomeIcon icon={faHourglassHalf} /> Exercise:{" "}
              {props.exercise} minutes
            </p>
            <p className="tracker">
              <FontAwesomeIcon icon={faWalking} /> Exercise Type:{" "}
              {props.exercise_type}
            </p>
            <p className="tracker">
              <FontAwesomeIcon icon={faTint} /> Water Intake: {props.water} oz.
            </p>
          </div>
        </div>
        <div className="log_section">
          <p className="tracker">
            {" "}
            <FontAwesomeIcon icon={faClipboard} /> Additional Notes:{" "}
            {props.notes}
          </p>
        </div>
        <div className="button_section">
          <button
            className="logItem_btn"
            onClick={() => setDisplayEditLogForm(true)}
          >
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
          <button className="logItem_btn" onClick={deleteLog}>
            <FontAwesomeIcon icon={faTrashAlt} /> Delete
          </button>
          <button className="logItem_btn" onClick={() => setDisplayFull(false)}>
            <FontAwesomeIcon icon={faMinusSquare} /> Collapse Log
          </button>
        </div>
      </section>
    );
  };
  const renderPartialItem = () => {
    return (
      <section className="log_record short">
        <h2 className="date_display">
          <FontAwesomeIcon icon={faCalendarAlt} />{" "}
          {moment(props.date).format("YYYY-MM-DD")}
        </h2>
        <button onClick={() => setDisplayFull(true)} className="view_btn">
          View Log
        </button>
      </section>
    );
  };

  return (
    <div>
      {displayFull ? renderFullItem() : renderPartialItem()}
      {displayEditLogForm ? (
        <div className="edit_log_form">
          <h2 className="log_form_header">Edit Log</h2>
          <EditLog
            id={props.id}
            setDisplayEditLogForm={setDisplayEditLogForm}
          />
        </div>
      ) : null}
      {error ? <h2>{error.message}</h2> : null}
    </div>
  );
}

export default LogItem;
