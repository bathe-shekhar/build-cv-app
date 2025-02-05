import Accordion from "react-bootstrap/Accordion";
import PersonalDetails from "./PersonalDetails";
import ProfileSummary from "./ProfileSummary";
import ExperienceList from "./ExperienceList";
import EducationList from "./EducationList";

function Form({
  personalDetails,
  handlePersonChange,
  profileSummary,
  handleProfileChange,
  profileHeading,
  handleProfileHadingChange,
  experienceList,
  handleExperienceChange,
  addExperience,
  educationList,
  handleEducationChange,
  addEducation,
}) {
  return (
    <div className="form-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Personal Details</Accordion.Header>
          <Accordion.Body>
            <PersonalDetails
              personalDetails={personalDetails}
              handlePersonChange={handlePersonChange}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Profile Summary</Accordion.Header>
          <Accordion.Body>
            <ProfileSummary
              profileSummary={profileSummary}
              handleProfileChange={handleProfileChange}
              profileHeading={profileHeading}
              handleProfileHadingChange={handleProfileHadingChange}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Experience</Accordion.Header>
          <Accordion.Body>
            <ExperienceList
              experienceList={experienceList}
              handleExperienceChange={handleExperienceChange}
            />
            <div>
              <button className="form-button" onClick={addExperience}>
                Add Experience
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Education Details</Accordion.Header>
          <Accordion.Body>
            <EducationList
              educationList={educationList}
              handleEducationChange={handleEducationChange}
            />
            <div>
              <button className="form-button" onClick={addEducation}>
                Add Education
              </button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Form;
