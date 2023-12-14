import React, { useState } from 'react';
import './EntityStyle.css'; 

export default function Issues() {
  const [issueData, setIssueData] = useState({
    category: '',
    issueTitle: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIssueData({ ...issueData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(issueData); 
  };

  return (
    <div className="entity-container ">
      <h2>Issues</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-column">
          <label className="form-label">
            Category:
            <input type="text" name="category" value={issueData.category} onChange={handleInputChange} className="form-input" />
          </label>
          <label className="form-label">
            Issue Title:
            <input type="text" name="issueTitle" value={issueData.issueTitle} onChange={handleInputChange} className="form-input" />
          </label>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
         </div>

  );
}
