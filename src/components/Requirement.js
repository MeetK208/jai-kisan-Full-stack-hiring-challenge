// src/components/Requirement.js
import React from 'react';

function Requirement({ requirement, catIndex, reqIndex, updateRequirement }) {
  const handleRequirementChange = (e) => {
    updateRequirement(catIndex, reqIndex, e.target.value);
  };

  return (
    <div className="requirement">
      <label>Requirement</label>
      <input
        type="text"
        placeholder="Requirement Name"
        value={requirement}
        onChange={handleRequirementChange}
      />
    </div>
  );
}

export default Requirement;
 
// state
// props
// Hooks - Use States, Use Effects
// How to pass data from parent to child components
// How to pass data from child to Parent Components
// 