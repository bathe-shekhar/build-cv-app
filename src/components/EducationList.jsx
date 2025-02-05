import SingleEducation from "./SingleEducation";

function EducationList({ educationList, handleEducationChange }) {
  function removeEducation(key) {
    console.log("key: ", key);
    const eduList = educationList.filter((edu) => edu.key !== key);
    console.log("eduList: ", eduList);
    handleEducationChange(eduList);
  }

  const handleChange = (index, field, value) => {
    const updatedList = [...educationList];
    updatedList[index][field] = value;
    // setExperienceList(updatedList);
    handleEducationChange(updatedList);
  };

  return (
    <div className="experience-list">
      {educationList.length > 0 &&
        educationList.map((edu, index) => (
          <SingleEducation
            index={index}
            key={edu.key}
            education={edu}
            removeEducation={removeEducation}
            handleChange={handleChange}
          />
        ))}
    </div>
  );
}
export default EducationList;
