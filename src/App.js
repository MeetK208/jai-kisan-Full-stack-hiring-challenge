import React, { useState } from "react";
import CategoryList from "./components/CategoryList";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");

  const addCategory = () => {
    if (newCategoryName.trim() === "") {
      alert("Category name cannot be empty.");
      return;
    }
    setCategories([...categories, { name: newCategoryName, requirements: [] }]);
    setNewCategoryName("");
  };

  const deleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  }; 

  const addRequirement = (index, requirementName) => {
    if (requirementName.trim() === "") {
      alert("Requirement name cannot be empty.");
      return;
    }
    const updatedCategories = [...categories];
    updatedCategories[index].requirements.push(requirementName);
    setCategories(updatedCategories);
  };

  const deleteRequirement = (catIndex, reqIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[catIndex].requirements.splice(reqIndex, 1);
    setCategories(updatedCategories);
  };

  const exportCategories = () => {
    const json = JSON.stringify(categories, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "categories.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="app">
      <h2>Category and Requirement Manager</h2>
      <div className="main-container">
        <div className="left-panel">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Category Name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="input-box"
            />
            <button onClick={addCategory} className="add-btn">Add Category</button>
          </div>
          <CategoryList
            categories={categories}
            addRequirement={addRequirement}
            deleteCategory={deleteCategory}
            deleteRequirement={deleteRequirement}
          />
        </div>
        
        <div className="right-panel">
          <button onClick={exportCategories} className="export-button">
            Export JSON
          </button>
          <pre className="json-output">{JSON.stringify(categories, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
