import { useState } from "react";

function PersonalDetails({ personalDetails, handlePersonChange }) {
  const [name, setName] = useState(personalDetails.fullname);
  const [email, setEmail] = useState(personalDetails.email);
  const [phone, setPhone] = useState(personalDetails.phone);

  function handleNameChange(e) {
    setName(e.target.value);
    handlePersonChange({ fullname: e.target.value });
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    handlePersonChange({ email: e.target.value });
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
    handlePersonChange({ phone: e.target.value });
  }

  function handleClearAll() {
    setName("");
    setEmail("");
    setPhone("");
    handlePersonChange({ fullname: "", email: "", phone: "" });
  }

  return (
    <>
      <div className="form-field">
        <label>Full Name:</label>
        <input
          id="fullName"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-field">
        <label>Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-field">
        <label>Mobile:</label>
        <input
          id="phone"
          type="number"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div>
        <button className="form-button" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </>
  );
}

export default PersonalDetails;
