import React from "react";
import moment from "moment";
import "./LogInputForm.css";

function LogInputForm(props) {
  const {
    log_date,
    mood,
    stress,
    sleep_hours,
    sleep_quality,
    exercise_type,
    exercise_minutes,
    water,
    notes,
    handleChange,
    handleSubmitLog,
    handleReset,
  } = props;
  const today = new Date();
  const maxDate = moment(today).format("YYYY-MM-DD");
  return (
    <form onSubmit={handleSubmitLog}>
      <section className="date_section">
        <label className="box_label" htmlFor="date">
          Log Date{" "}
        </label>
        <input
          type="date"
          id="log_date"
          name="log_date"
          value={log_date}
          max={maxDate}
          onChange={handleChange}
        />
      </section>
      <br />

      <div>
        <section className="mental">
          <h2 className="section_header">Psychological</h2>
          <div>
            <h3 className="box_label bold">Mood Rating</h3>
            <h3 className="box_label">
              1 = Bad Mood <br /> 5 = Great Mood
            </h3>
            {/* {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="1"
                name="mood"
                value={1}
                onChange={handleChange}
              />
            ) : ( */}
            <input
              type="radio"
              id="1"
              name="mood"
              value={1}
              checked={mood === 1}
              onChange={handleChange}
            />
            {/* )} */}
            <label htmlFor="mood">1</label>
            {/* {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="2"
                name="mood"
                value={2}
                onChange={handleChange}
              />
            ) : ( */}
            <input
              type="radio"
              id="2"
              name="mood"
              value={2}
              checked={mood === 2}
              onChange={handleChange}
            />
            {/* // )} */}
            <label htmlFor="mood">2</label>
            {/* {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="3"
                name="mood"
                value={3}
                onChange={handleChange}
              />
            ) : ( */}
            <input
              type="radio"
              id="3"
              name="mood"
              value={3}
              checked={mood === 3}
              onChange={handleChange}
            />
            {/* )} */}
            <label htmlFor="mood">3</label>
            {/* {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="4"
                name="mood"
                value={4}
                onChange={handleChange}
              />
            ) : ( */}
            <input
              type="radio"
              id="4"
              name="mood"
              value={4}
              checked={mood === 4}
              onChange={handleChange}
            />
            {/* )} */}
            <label htmlFor="mood">4</label>
            {/* {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="5"
                name="mood"
                value={5}
                onChange={handleChange}
              />
            ) : ( */}
            <input
              type="radio"
              id="5"
              name="mood"
              value={5}
              checked={mood === 5}
              onChange={handleChange}
            />
            {/* )} */}
            <label htmlFor="mood">5</label>
          </div>
          <div className="stress">
            <h2 className="box_label bold">Stress Level</h2>
            <h3 className="box_label">
              1 = Low Stress <br />5 = High Stress
            </h3>
            {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="1"
                name="stress"
                value={1}
                onChange={handleChange}
              />
            ) : (
              <input
                type="radio"
                id="1"
                name="stress"
                value={1}
                checked={stress === 1}
                onChange={handleChange}
              />
            )}
            <label htmlFor="stress">1</label>
            {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="2"
                name="stress"
                value={2}
                onChange={handleChange}
              />
            ) : (
              <input
                type="radio"
                id="2"
                name="stress"
                value={2}
                checked={stress === 2}
                onChange={handleChange}
              />
            )}
            <label htmlFor="stress">2</label>
            {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="3"
                name="stress"
                value={3}
                onChange={handleChange}
              />
            ) : (
              <input
                type="radio"
                id="3"
                name="stress"
                value={3}
                checked={stress === 3}
                onChange={handleChange}
              />
            )}
            <label htmlFor="stress">3</label>
            {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="4"
                name="stress"
                value={4}
                onChange={handleChange}
              />
            ) : (
              <input
                type="radio"
                id="4"
                name="stress"
                value={4}
                checked={stress === 4}
                onChange={handleChange}
              />
            )}
            <label htmlFor="stress">4</label>
            {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="5"
                name="stress"
                value={5}
                onChange={handleChange}
              />
            ) : (
              <input
                type="radio"
                id="5"
                name="stress"
                value={5}
                checked={stress === 5}
                onChange={handleChange}
              />
            )}
            <label htmlFor="stress">5</label>
          </div>
        </section>
        <section className="sleep">
          <h2 className="section_header">Sleep</h2>
          <label className="box_label" htmlFor="sleep">
            Hours slept
          </label>
          <br />
          <input
            type="number"
            className="input_box"
            name="sleep_hours"
            id="sleep_hours"
            value={sleep_hours}
            onChange={handleChange}
          />
          <div>
            <h3 className="box_label">Sleep quality</h3>
            {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="1"
                name="sleep_quality"
                value={1}
                onChange={handleChange}
              />
            ) : (
              <input
                type="radio"
                id="1"
                name="sleep_quality"
                value={1}
                checked={sleep_quality === 1}
                onChange={handleChange}
              />
            )}
            <label htmlFor="sleep_quality">1</label>
            {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="2"
                name="sleep_quality"
                value={2}
                onChange={handleChange}
              />
            ) : (
              <input
                type="radio"
                id="2"
                name="sleep_quality"
                value={2}
                checked={sleep_quality === 2}
                onChange={handleChange}
              />
            )}
            <label htmlFor="sleep_quality">2</label>
            {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="3"
                name="sleep_quality"
                value={3}
                onChange={handleChange}
              />
            ) : (
              <input
                type="radio"
                id="3"
                name="sleep_quality"
                value={3}
                checked={sleep_quality === 3}
                onChange={handleChange}
              />
            )}
            <label htmlFor="sleep_quality">3</label>
            {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="4"
                name="sleep_quality"
                value={4}
                onChange={handleChange}
              />
            ) : (
              <input
                type="radio"
                id="4"
                name="sleep_quality"
                value={4}
                checked={sleep_quality === 4}
                onChange={handleChange}
              />
            )}
            <label htmlFor="sleep_quality">4</label>
            {props.parent === "submitLog" ? (
              <input
                type="radio"
                id="5"
                name="sleep_quality"
                value={5}
                onChange={handleChange}
              />
            ) : (
              <input
                type="radio"
                id="5"
                name="sleep_quality"
                value={5}
                checked={sleep_quality === 5}
                onChange={handleChange}
              />
            )}
            <label htmlFor="sleep_quality">5</label>
          </div>
        </section>

        <section className="exercise">
          <h2 className="section_header">Physical</h2>
          <label className="box_label" htmlFor="exercise_minutes">
            Minutes of exercise
          </label>
          <br />
          <input
            type="number"
            className="input_box"
            name="exercise_minutes"
            id="exercise_minutes"
            value={exercise_minutes}
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="box_label" htmlFor="exercise_type">
            Type of exercise
          </label>
          <br />
          <input
            type="text"
            className="input_box"
            name="exercise_type"
            id="exercise_type"
            value={exercise_type}
            onChange={handleChange}
          />
          <br />
          <br />

          <label className="box_label" htmlFor="water">
            Water consumed (oz.)
          </label>
          <br />
          <input
            type="number"
            className="input_box"
            name="water"
            id="water"
            value={water}
            onChange={handleChange}
          />
        </section>
      </div>

      <div>
        <section className="other">
          <label className="box_label" htmlFor="notes">
            Additional notes
          </label>
          <br />
          <textarea
            id="notes"
            name="notes"
            rows="4"
            placeholder="Anything else you would like to track? Note it here!"
            value={notes}
            onChange={handleChange}
          />
        </section>
      </div>
      <section className="button-section">
        <button className="form_btn" type="submit">
          Submit
        </button>
        <button className="form_btn" type="reset" onClick={handleReset}>
          Reset
        </button>
      </section>
    </form>
  );
}

LogInputForm.defaultProps = {
  handleChange: () => {},
};

export default LogInputForm;
