import React from "react";
import RequirementForm from "./RequirementForm";

function CategoryList({ categories, addRequirement, deleteCategory, deleteRequirement }) {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <div className="category-header">
            <span>{category.name}</span>
            <button onClick={() => deleteCategory(index)} className="delete-btn">Delete Category</button>
          </div>
          <RequirementForm
            categoryIndex={index}
            addRequirement={addRequirement}
            deleteRequirement={deleteRequirement}
            requirements={category.requirements}
          />
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
