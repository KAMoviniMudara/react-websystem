
import React, { useState } from 'react';
import './EntityStyle.css';

export default function Issues() {
  const [issueTitleData, setIssueTitleData] = useState({
    title: '',
    categoryID: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIssueTitleData({ ...issueTitleData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/issue-titles/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(issueTitleData)
      });

      if (response.ok) {
        console.log('Issue Title added successfully!');
        // Handle success state or reset form if needed
      } else {
        console.error('Error adding Issue Title:', await response.text());
        // Handle error state or display error message
      }
    } catch (error) {
      console.error('Error adding Issue Title:', error.message);
      // Handle error state or display error message
    }
  };

  return (
    <div className="entity-container">
      <h2>Issue Title</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-column">
          <label className="form-label">
            Title:
            <input
              type="text"
              name="title"
              value={issueTitleData.title}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Category ID:
            <input
              type="text"
              name="categoryID"
              value={issueTitleData.categoryID}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
