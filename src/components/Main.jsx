import { useState } from "react";
import CVpreview from "./Cvpreview";
import Form from "./Form";

function Main() {
  const [expKey, setExpKey] = useState(1);
  const [eduKey, setEduKey] = useState(1);

  const [personalDetails, setPersonalDetails] = useState({
    fullname: "Robert James",
    email: "robert.james1234@gmail.com",
    phone: "1234567890",
  });

  const [profileSummary, setProfileSummary] = useState(
    "Proactive, collaborative, and user-oriented front end web developer with 5+ years’ experience leveraging programming skills to deliver custom software solutions to support company goals. Efficient team player with C+ and C++ proficiencies, track record of collaborating via Git / GitHub, and ability to work independently or as part of a team to complete development tasks while meeting delivery deadlines."
  );
  const [profileHeading, setProfileHeading] = useState("Front End Developer");

  const [experienceList, setExperienceList] = useState([
    {
      id: "TechNova Solutions1",
      companyName: "TechNova Solutions",
      position: "Software Engineer",
      details:
        "As a Software Engineer at TechNova Solutions, the individual will be responsible for designing, developing, and maintaining web applications that cater to a variety of industries, from finance to healthcare. They will work collaboratively with cross-functional teams to understand user needs and translate them into high-quality software solutions.",
      fromDate: "2021-01-04",
      toDate: "2024-03-31",
    },
    {
      id: "Innovation Technologies2",
      companyName: "Innovation Technologies",
      position: "Software Developer",
      details:
        "As a Software Engineer at Innovation Technologies, the individual will be responsible for designing, developing, and maintaining software applications that cater to a variety of industries, from finance to healthcare. They will work collaboratively with cross-functional teams to understand user needs and translate them into high-quality software solutions.",
      fromDate: "2020-06-01",
      toDate: "2021-03-31",
    },
  ]);

  const [educationList, setEducationList] = useState([
    {
      degree: "Bachelor of Computer Engineering",
      school: "University of Chicago",
      location: "Chicago, U.S.",
      fromDate: "2020-03-31",
      toDate: "2016-06-01",
    },
    {
      degree: "High School Degree",
      school: "Massachusetts Institute",
      location: "Massachusetts, U.S.",
      fromDate: "2016-03-31",
      toDate: "2014-06-01",
    },
  ]);

  function handlePersonChange(field) {
    setPersonalDetails({
      ...personalDetails,
      ...field,
    });
    console.log("personalDetails:", personalDetails);
  }

  function handleProfileChange(text) {
    setProfileSummary(text);
  }

  function handleProfileHadingChange(text) {
    setProfileHeading(text);
  }

  function handleExperienceChange(expList) {
    setExperienceList(expList);
  }

  function addExperience() {
    // const expList = experineceList;
    const newexp = {
      key: expKey,
      companyName: "",
      position: "",
      details: "",
    };
    setExpKey(expKey + 1);
    setExperienceList([...experienceList, newexp]);
    console.log(experienceList);
  }

  function handleEducationChange(eduList) {
    setEducationList(eduList);
  }

  function addEducation() {
    const newEdu = {
      key: eduKey,
      school: "",
      degree: "",
      location: "",
    };
    setEduKey(eduKey + 1);
    setEducationList([...educationList, newEdu]);
  }

  return (
    <div className="main-div">
      <Form
        personalDetails={personalDetails}
        handlePersonChange={handlePersonChange}
        profileSummary={profileSummary}
        handleProfileChange={handleProfileChange}
        profileHeading={profileHeading}
        handleProfileHadingChange={handleProfileHadingChange}
        experienceList={experienceList}
        handleExperienceChange={handleExperienceChange}
        addExperience={addExperience}
        educationList={educationList}
        handleEducationChange={handleEducationChange}
        addEducation={addEducation}
      />

      <CVpreview
        personalDetails={personalDetails}
        profileHeading={profileHeading}
        profileSummary={profileSummary}
        experienceList={experienceList}
        educationList={educationList}
      />
    </div>
  );
}

export default Main;
