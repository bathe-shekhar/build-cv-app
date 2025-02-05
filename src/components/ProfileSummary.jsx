import { useState } from "react";

function ProfileSummary({
  profileSummary,
  handleProfileChange,
  profileHeading,
  handleProfileHadingChange,
}) {
  const [summary, setSummary] = useState(profileSummary);
  const [profHaeading, setProfHeading] = useState(profileHeading);

  function handleSummaryChange(e) {
    setSummary(e.target.value);
    handleProfileChange(e.target.value);
  }

  function handleClearSummary() {
    setSummary("");
    handleProfileChange("");
  }

  function handleProfHeadingChange(e) {
    setProfHeading(e.target.value);
    handleProfileHadingChange(e.target.value);
  }

  return (
    <>
      <div className="form-profile-summary">
        <label>Profile Heading:</label>
        <input
          id="pfHeading"
          value={profHaeading}
          rows="6"
          onChange={handleProfHeadingChange}
        />
        <div></div>
        <label>Profile Summary:</label>
        <textarea
          id="summary"
          value={summary}
          rows="6"
          onChange={handleSummaryChange}
        />
        <div>
          <button className="form-button" onClick={handleClearSummary}>
            Clear Summary
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileSummary;
