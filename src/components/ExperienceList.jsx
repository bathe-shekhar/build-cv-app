import SingleExperience from "./SingleExperience";

function ExperienceList({ experienceList, handleExperienceChange }) {
  function removeExperience(key) {
    console.log("key: ", key);
    const expList = experienceList.filter((exp) => exp.key !== key);
    console.log("expList: ", expList);
    handleExperienceChange(expList);
  }

  const handleChange = (index, field, value) => {
    const updatedList = [...experienceList];
    updatedList[index][field] = value;
    // setExperienceList(updatedList);
    handleExperienceChange(updatedList);
  };

  return (
    <div className="experience-list">
      {experienceList.length > 0 &&
        experienceList.map((exp, index) => (
          <SingleExperience
            index={index}
            key={exp.key}
            exprience={exp}
            removeExperience={removeExperience}
            handleChange={handleChange}
          />
        ))}
    </div>
  );
}

export default ExperienceList;
