function SingleExperienceView({ exp }) {
  var fDate = "",
    tDate = "";
  if (exp.fromDate) {
    const df = exp.fromDate.split("-");
    fDate = df[2] + "/" + df[1] + "/" + df[0];
  }

  if (exp.toDate) {
    const dt = exp.toDate.split("-");
    tDate = dt[2] + "/" + dt[1] + "/" + dt[0];
  }
  return (
    <div className="cv-single-experience">
      <div className="cv-single-experience-heading">
        <div className="cv-position">{exp.position}</div>
        <span>-</span>
        <div className="cv-company">{exp.companyName}</div>
        {fDate && tDate && (
          <div className="cv-period">
            <span>( </span>
            {fDate} - {tDate}
            <span> ) </span>
          </div>
        )}
      </div>

      <div className="cv-work-details">{exp.details}</div>
    </div>
  );
}
export default SingleExperienceView;
