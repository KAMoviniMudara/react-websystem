import React, { useState } from 'react';
import './EntityStyle.css'; 

export default function AddIssues() {
  const [issueData, setIssueData] = useState({
    category: '',
    issueTitle: '',
    location: '',
    startDate: '',
    startTime: '',
    informedByUser: '',
    actionTakenByUser: '',
   
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
      <h2>Add Issues</h2>
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
          <label className="form-label">
            Location:
            <input type="text" name="location" value={issueData.location} onChange={handleInputChange} className="form-input" />
          </label>
        </div>
        <div className="form-column">
          <label className="form-label">
            Start Date:
            <input type="text" name="startDate" value={issueData.startDate} onChange={handleInputChange} className="form-input" />
          </label>
          <label className="form-label">
            Start Time:
            <input type="text" name="startTime" value={issueData.startTime} onChange={handleInputChange} className="form-input" />
          </label>
        </div>
        <div className="form-column">
          <label className="form-label">
            Informed By User:
            <input type="text" name="informedByUser" value={issueData.informedByUser} onChange={handleInputChange} className="form-input" />
          </label>
          <label className="form-label">
            Action Taken By User:
            <input type="text" name="actionTakenByUser" value={issueData.actionTakenByUser} onChange={handleInputChange} className="form-input" />
          </label>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>
  );
}
