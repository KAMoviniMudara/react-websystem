import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EntityStyle.css'; 

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/categories/add');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddCategory = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/categories/add', {
        categoryName: newCategoryName,
      });
      setCategories([...categories, response.data]);
      setNewCategoryName('');
      setSuccessMessage('Category added successfully!');
      setErrorMessage('');
    } catch (error) {
      console.error('Error adding category:', error.response ? error.response.data : error.message);
      setSuccessMessage('');
      setErrorMessage('Error adding category. Please try again.');
    }
  };
  

  return (
    <div>
      <h2>Categories</h2>
      <div>
        <input
          type="text"
          placeholder="Enter category name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add</button>
      </div>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <ul>
        {categories.map((category) => (
          <li key={category.categoryID}>{category.categoryName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
