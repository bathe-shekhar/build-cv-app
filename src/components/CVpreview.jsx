import SingleEducationView from "./SingleEducationView";
import SingleExperienceView from "./SingleExperienceView";

function CVpreview({
  personalDetails,
  profileHeading,
  profileSummary,
  experienceList,
  educationList,
}) {
  return (
    <div className="cv-container" id="section-to-print">
      <div className="cv-header">
        <div className="cv-name">
          {personalDetails.fullname || "Your Name Here..."}
        </div>
        {profileHeading && <div className="cv-heading">{profileHeading}</div>}
      </div>
      <div className="cv-subheader">
        {personalDetails.email && (
          <div className="cv-email">
            <i className="fa-solid fa-envelope email-icon"></i>
            {personalDetails.email}
          </div>
        )}
        {personalDetails.phone && (
          <div className="cv-phone">
            <i className="fa-solid fa-phone phone-icon"></i>
            {personalDetails.phone}
          </div>
        )}
      </div>
      <div className="cv-block">
        {profileSummary && (
          <div className="cv-summary-block">
            <div className="cv-header-block">
              <i className="fa-solid fa-user-large cv-header-icon"></i>
              <div className="cv-block-heading"> profile</div>
            </div>
            <div className="cv-summary">{profileSummary}</div>
          </div>
        )}
        <div className="cv-experience-block">
          {experienceList.length > 0 && (
            <div className="cv-header-block">
              <i className="fa-solid fa-briefcase cv-header-icon"></i>
              <div className="cv-block-heading"> Experience</div>
            </div>
          )}
          {experienceList &&
            experienceList.map((exp) => {
              console.log(exp.id);

              return (
                <SingleExperienceView key={exp.company + exp.key} exp={exp} />
              );
            })}
        </div>

        <div className="cv-education-block">
          {educationList.length > 0 && (
            <div className="cv-header-block">
              <i className="fa-solid fa-user-graduate cv-header-icon"></i>
              <div className="cv-block-heading"> Education</div>
            </div>
          )}
          {educationList &&
            educationList.map((edu) => {
              console.log(edu.id);

              return (
                <SingleEducationView key={edu.degree + edu.key} edu={edu} />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default CVpreview;
