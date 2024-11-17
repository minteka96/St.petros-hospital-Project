/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    salary: '',
    organizationName: '',
    applicantName: '',
    fathersName: '',
    grandFathersName: '',
    birthDate: '',
    address: '',
    region: '',
    zone: '',
    woreda: '',
    kebele: '',
    telNo: '',
    envelopeNo: '',
    gender: 'Male',
    nationality: '',
    race: '',
    familyStatus: 'Single',
    noOfChildren: '',
    physicalHealthDefects: '',
    legalHistory: 'no',
    relationshipWithHospital: 'no',
    schoolName: '',
    title: '',
    learnFrom: '',
    learnTo: '',
    profession: '',
    educationalStatus: '',
    languages: [
      {
        language: '',
        read: 'Excellent',
        write: 'Excellent',
        speak: 'Excellent',
        hear: 'Excellent',
        ranking: 'Excellent',
      },
    ],
    workExperience: [{
      organizationName: '',
      duration: '',
      professionName: '',
      salary: '',
      qualification: '',
      reasonForRelease: ''
    }],
    hobbies: '',
    referenceName: '',
    referenceOccupation: '',
    referenceAddress: '',
    otherDetails: '',
    cv: null,
    confirmation: false,
  });

  // Handle change for all form fields, including dynamic languages and nested fields like work experience
  const handleChange = (e, index = null) => {
    const { name, value } = e.target;

    if (name.startsWith('languageStatus')) {
      const languages = [...formData.languages];
      const field = name.split('.')[1]; // Get the specific field (e.g., read, write)

      languages[index][field] = value;
      setFormData({ ...formData, languages });
    } else if (name.includes('workExperience')) {
      const [section, field, i] = name.split('.');
      const newWorkExperience = [...formData.workExperience];
      newWorkExperience[i][field] = value;
      setFormData({ ...formData, workExperience: newWorkExperience });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Add a new language input section
  const handleAddLanguage = () => {
    setFormData({
      ...formData,
      languages: [
        ...formData.languages,
        {
          language: '',
          read: 'Excellent',
          write: 'Excellent',
          speak: 'Excellent',
          hear: 'Excellent',
          ranking: 'Excellent',
        },
      ],
    });
  };

  // Remove a language input section
  const handleRemoveLanguage = (index) => {
    const newLanguages = formData.languages.filter((_, i) => i !== index);
    setFormData({ ...formData, languages: newLanguages });
  };

  // Add a new work experience entry
  const handleAddWorkExperience = () => {
    setFormData({
      ...formData,
      workExperience: [
        ...formData.workExperience,
        {
          organizationName: '',
          duration: '',
          professionName: '',
          salary: '',
          qualification: '',
          reasonForRelease: '',
        },
      ],
    });
  };

  // Remove a work experience entry
  const handleRemoveWorkExperience = (index) => {
    const newWorkExperience = formData.workExperience.filter((_, i) => i !== index);
    setFormData({ ...formData, workExperience: newWorkExperience });
  };

  // Handle checkbox change (e.g., confirmation)
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <h2>Job Application Form</h2>

      {/* Job Details */}
      <section>
        <h3>Job Details</h3>
        <table>
          <tbody>
            <tr>
              <td>Job Title</td>
              <td><input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Salary</td>
              <td><input type="text" name="salary" value={formData.salary} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Organization Name</td>
              <td><input type="text" name="organizationName" value={formData.organizationName} onChange={handleChange} /></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Personal Details */}
      <section>
        <h3>Personal Details</h3>
        <table>
          <tbody>
            <tr><td>Applicant Name</td><td><input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} /></td></tr>
            <tr><td>Fathers Name</td><td><input type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} /></td></tr>
            <tr><td>Grandfathers Name</td><td><input type="text" name="grandFathersName" value={formData.grandFathersName} onChange={handleChange} /></td></tr>
            <tr><td>Birth Date</td><td><input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} /></td></tr>
            <tr><td>Address</td><td><input type="text" name="address" value={formData.address} onChange={handleChange} /></td></tr>
            <tr><td>Region</td><td><input type="text" name="region" value={formData.region} onChange={handleChange} /></td></tr>
            <tr><td>Zone</td><td><input type="text" name="zone" value={formData.zone} onChange={handleChange} /></td></tr>
            <tr><td>Woreda</td><td><input type="text" name="woreda" value={formData.woreda} onChange={handleChange} /></td></tr>
            <tr><td>Kebele</td><td><input type="text" name="kebele" value={formData.kebele} onChange={handleChange} /></td></tr>
            <tr><td>Tel No</td><td><input type="text" name="telNo" value={formData.telNo} onChange={handleChange} /></td></tr>
            <tr><td>Envelope No</td><td><input type="text" name="envelopeNo" value={formData.envelopeNo} onChange={handleChange} /></td></tr>
            <tr><td>Gender</td><td><select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select></td></tr>
            <tr><td>Nationality</td><td><input type="text" name="nationality" value={formData.nationality} onChange={handleChange} /></td></tr>
            <tr><td>Race</td><td><input type="text" name="race" value={formData.race} onChange={handleChange} /></td></tr>
            <tr><td>Family Status</td><td><select name="familyStatus" value={formData.familyStatus} onChange={handleChange}>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Separated">Separated</option>
              <option value="Deceased">Deceased</option>
            </select></td></tr>
            <tr><td>No. of Children</td><td><input type="number" name="noOfChildren" value={formData.noOfChildren} onChange={handleChange} /></td></tr>
            <tr><td>Physical/Health Defects</td><td><textarea name="physicalHealthDefects" value={formData.physicalHealthDefects} onChange={handleChange} /></td></tr>
            <tr><td>History of Legal Issues</td><td><select name="legalHistory" value={formData.legalHistory} onChange={handleChange}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select></td></tr>
          <tr>
  <td>Is there someone working at St. Peter Hospital who already knows your marital or family relationship status or has a personal connection with you?</td>
  <td>
    <select name="relationshipWithHospital" value={formData.relationshipWithHospital} onChange={handleChange}>
      <option value="no">No</option>
      <option value="yes">Yes</option>
    </select>
  </td>
</tr>

{formData.relationshipWithHospital === "yes" && (
  <tr>
    <td>If yes, please list the persons name and your relationship status with them:</td>
    <td>
      <input
        type="text"
        name="relationshipDetails"
        value={formData.relationshipDetails}
        onChange={handleChange}
        placeholder="e.g., Abebe - cousin"
      />
    </td>
  </tr>
)}
          </tbody>
        </table>
      </section>

      {/* Educational Details */}
      <section>
        <h3>Educational Details</h3>
        <table>
          <tbody>
            <tr><td>School Name</td><td><input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} /></td></tr>
            <tr><td>Title</td><td><input type="text" name="title" value={formData.title} onChange={handleChange} /></td></tr>
            <tr><td>Learn From</td><td><input type="text" name="learnFrom" value={formData.learnFrom} onChange={handleChange} /></td></tr>
            <tr><td>Learn To</td><td><input type="text" name="learnTo" value={formData.learnTo} onChange={handleChange} /></td></tr>
            <tr><td>Profession</td><td><input type="text" name="profession" value={formData.profession} onChange={handleChange} /></td></tr>
            <tr><td>Educational Status</td><td><input type="text" name="educationalStatus" value={formData.educationalStatus} onChange={handleChange} /></td></tr>
          </tbody>
        </table>
      </section>

      {/* Languages */}
      <section>
        <h3>Languages</h3>
        {formData.languages.map((language, index) => (
          <div key={index} className="language-section">
            <table>
              <tbody>
                <tr><td>Language</td><td><input type="text" name="languages.language" value={language.language} onChange={(e) => handleChange(e, index)} /></td></tr>
                <tr><td>Reading Ability</td><td><input type="text" name={`languageStatus.read.${index}`} value={language.read} onChange={(e) => handleChange(e, index)} /></td></tr>
                <tr><td>Writing Ability</td><td><input type="text" name={`languageStatus.write.${index}`} value={language.write} onChange={(e) => handleChange(e, index)} /></td></tr>
                <tr><td>Speaking Ability</td><td><input type="text" name={`languageStatus.speak.${index}`} value={language.speak} onChange={(e) => handleChange(e, index)} /></td></tr>
                <tr><td>Hearing Ability</td><td><input type="text" name={`languageStatus.hear.${index}`} value={language.hear} onChange={(e) => handleChange(e, index)} /></td></tr>
              </tbody>
            </table>
            <button type="button" onClick={() => handleRemoveLanguage(index)}>Remove Language</button>
          </div>
        ))}
        <button type="button" onClick={handleAddLanguage}>Add Another Language</button>
      </section>

      {/* Work Experience */}
      <section>
        <h3>Work Experience</h3>
        {formData.workExperience.map((experience, index) => (
          <div key={index}>
            <table>
              <tbody>
                <tr><td>Organization Name</td><td><input type="text" name={`workExperience[${index}].organizationName`} value={experience.organizationName} onChange={handleChange} /></td></tr>
                <tr><td>Duration</td><td><input type="text" name={`workExperience[${index}].duration`} value={experience.duration} onChange={handleChange} /></td></tr>
                <tr><td>Profession Name</td><td><input type="text" name={`workExperience[${index}].professionName`} value={experience.professionName} onChange={handleChange} /></td></tr>
                <tr><td>Salary</td><td><input type="text" name={`workExperience[${index}].salary`} value={experience.salary} onChange={handleChange} /></td></tr>
                <tr><td>Qualification</td><td><input type="text" name={`workExperience[${index}].qualification`} value={experience.qualification} onChange={handleChange} /></td></tr>
                <tr><td>Reason for Release</td><td><input type="text" name={`workExperience[${index}].reasonForRelease`} value={experience.reasonForRelease} onChange={handleChange} /></td></tr>
              </tbody>
            </table>
            <button type="button" onClick={() => handleRemoveWorkExperience(index)}>Remove Work Experience</button>
          </div>
        ))}
        <button type="button" onClick={handleAddWorkExperience}>Add Another Work Experience</button>
      </section>

      {/* Confirmation */}
      <section>
        <input type="checkbox" name="confirmation" checked={formData.confirmation} onChange={handleCheckboxChange} />
        <label>I confirm that the above information is correct.</label>
      </section>

      {/* Submit */}
      <section>
        <button type="submit">Submit Application</button>
      </section>
    </form>
  );
};

export default ApplicationForm;
