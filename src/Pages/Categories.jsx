import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './EntityStyle.css'; 

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories'); 
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddCategory = async () => {
    try {
      const response = await axios.post('/api/categories', { categoryName: newCategoryName });
      setCategories([...categories, response.data]);
      setNewCategoryName('');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className="entity-container">
      <h2>Categories</h2>
      <div className="form-container">
        <input
          className="form-input"
          type="text"
          placeholder="Enter category name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button className="ui button" onClick={handleAddCategory}>Add</button>
      </div>
      <ul>
        {categories.map((category) => (
          <li className="form-column" key={category.categoryID}>{category.categoryName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
