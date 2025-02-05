function SingleEducationView({ edu }) {
  var fDate = "",
    tDate = "";
  if (edu.fromDate) {
    const df = edu.fromDate.split("-");
    fDate = df[2] + "/" + df[1] + "/" + df[0];
  }

  if (edu.toDate) {
    const dt = edu.toDate.split("-");
    tDate = dt[2] + "/" + dt[1] + "/" + dt[0];
  }
  console.log(edu);

  return (
    <div className="cv-single-education">
      <div className="cv-single-education-heading">
        <div className="cv-degree">{edu.degree}</div>
      </div>
      <div className="cv-education-details">
        <div className="cv-school">{edu.school}</div>
        {fDate && tDate && (
          <div className="cv-edu-period">
            <span>( </span>
            {fDate} - {tDate}
            <span> ) </span>
          </div>
        )}
      </div>
      <div>{edu.location}</div>
    </div>
  );
}
export default SingleEducationView;
