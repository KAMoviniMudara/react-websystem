import React, { useState } from 'react';
import axios from 'axios';
import './EntityStyle.css';

export default function Categories() {
  const [newCategory, setNewCategory] = useState('');

  const handleInputChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/categories/add', {
        categoryName: newCategory,
      });

      if (response.status === 200) {
        console.log('Category added successfully');
        setNewCategory('');
      } else {
        throw new Error('Failed to add category');
      }
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };


  return (
    <div className="entity-container">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-column">
          <label className="form-label">
            Category Name:
            <input
              className="form-input"
              type="text"
              value={newCategory}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-column">
          <button className="ui button" type="submit">
            Add
          </button>
        
        </div>
      </form>
    </div>
  );
}
