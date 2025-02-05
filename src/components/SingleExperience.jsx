import { useState } from "react";

function SingleExperience({
  index,
  exprience,
  removeExperience,
  handleChange,
}) {
  const [companyName, setCompanyName] = useState(exprience.companyName);
  const [position, setPosition] = useState(exprience.position);
  const [details, setDetails] = useState(exprience.details);
  const [fromDate, setFromDate] = useState(exprience.fromDate);
  const [toDate, setToDate] = useState(exprience.toDate);

  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
    console.log(e.target.value);
    handleChange(index, "companyName", e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
    handleChange(index, "position", e.target.value);
  }

  function handleDetailsChange(e) {
    setDetails(e.target.value);
    handleChange(index, "details", e.target.value);
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
    console.log(exprience);
    removeExperience(exprience.key);
  }

  return (
    <div className="single-experience">
      <div className="form-field">
        <label>Company Name:</label>
        <input
          id="company"
          type="text"
          value={companyName}
          onChange={handleCompanyNameChange}
        />
      </div>

      <div className="form-field">
        <label>Position:</label>
        <input
          id="position"
          type="text"
          value={position}
          onChange={handlePositionChange}
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
            // defaultValue={fromDate.format("dd-mm-yyyy")}
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
      <div className="form-profile-summary">
        <label>Details:</label>
        <textarea
          id="details"
          type="text"
          rows="6"
          value={details}
          onChange={handleDetailsChange}
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
export default SingleExperience;
