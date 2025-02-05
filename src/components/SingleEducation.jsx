import { useState } from "react";

function SingleEducation({ index, education, removeEducation, handleChange }) {
  const [school, setSchool] = useState(education.school);
  const [degree, setDegree] = useState(education.degree);
  const [location, setLocation] = useState(education.location);
  const [fromDate, setFromDate] = useState(education.fromDate);
  const [toDate, setToDate] = useState(education.toDate);

  function handleSchoolChange(e) {
    setSchool(e.target.value);
    console.log(e.target.value);
    handleChange(index, "school", e.target.value);
  }

  function handleDegreeChange(e) {
    setDegree(e.target.value);
    console.log(e.target.value);
    handleChange(index, "degree", e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
    console.log(e.target.value);
    handleChange(index, "location", e.target.value);
  }

  function handleFromDateChange(e) {
    setFromDate(e.target.value);
    // const dd = e.target.value.split("-");
    // const df = dd[2] + "/" + dd[1] + "/" + dd[0];
    handleChange(index, "fromDate", e.target.value);
  }

  function handleToDateChange(e) {
    setToDate(e.target.value);
    // const dd = e.target.value.split("-");
    // const dt = dd[2] + "/" + dd[1] + "/" + dd[0];
    handleChange(index, "toDate", e.target.value);
  }

  function handleDelete() {
    console.log(education);
    removeEducation(education.key);
  }

  return (
    <div className="single-experience">
      <div className="form-field">
        <label>School/University:</label>
        <input
          id="school"
          type="text"
          value={school}
          onChange={handleSchoolChange}
        />
      </div>

      <div className="form-field">
        <label>Degree:</label>
        <input
          id="position"
          type="text"
          value={degree}
          onChange={handleDegreeChange}
        />
      </div>
      <div className="form-field-date-block">
        <div className="form-field-date">
          <label>From :</label>
          <input
            id="from"
            type="date"
            placeholder="dd-mm-yyyy"
            value={fromDate}
            onChange={handleFromDateChange}
          />
        </div>
        <div className="form-field-date">
          <label>To :</label>
          <input
            id="toDate"
            type="date"
            placeholder="dd-mm-yyyy"
            value={toDate}
            onChange={handleToDateChange}
          />
        </div>
      </div>
      <div className="form-field">
        <label>Location:</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div>
        <button className="form-delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default SingleEducation;
