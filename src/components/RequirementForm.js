import React, { useState } from "react";

function RequirementForm({ categoryIndex, addRequirement, deleteRequirement, requirements }) {
  const [requirementName, setRequirementName] = useState("");

  const handleAddRequirement = () => {
    addRequirement(categoryIndex, requirementName);
    setRequirementName("");
  };

  return (
    <div className="requirement-form">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Requirement"
          value={requirementName}
          onChange={(e) => setRequirementName(e.target.value)}
          className="input-box"
        />
        <button onClick={handleAddRequirement} className="add-btn">Add Requirement</button>
      </div>
      <ul className="requirement-list">
        {requirements.map((req, reqIndex) => (
          <li key={reqIndex} className="requirement-item">
            {req}
            <button onClick={() => deleteRequirement(categoryIndex, reqIndex)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequirementForm;
