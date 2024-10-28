// src/components/Category.js
import React from 'react';
import Requirement from './Requirement';

function Category({ category, index, updateCategoryName, addRequirement, updateRequirement }) {
  const handleCategoryNameChange = (e) => {
    updateCategoryName(index, e.target.value);
  };

  const handleAddRequirement = () => {
    addRequirement(index);
  };

  return (
    <div className="category">
      <label>Category</label>
      <input
        type="text"
        placeholder="Category Name"
        value={category.name}
        onChange={handleCategoryNameChange}
      />
      <div className="requirements">
        {category.requirements.map((requirement, reqIndex) => (
          <Requirement
            key={reqIndex}
            requirement={requirement}
            catIndex={index}
            reqIndex={reqIndex}
            updateRequirement={updateRequirement}
          />
        ))}
      </div>
      <button className="add-requirement-btn" onClick={handleAddRequirement}>
        Add Requirement
      </button>
    </div>
  );
}

export default Category;
