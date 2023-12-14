import React, { useState } from 'react';
import './EntityStyle.css'; 

export default function ResolvedIssues() {
  const [issueData, setIssueData] = useState({
    category: '',
    issueTitle: '',
    location: '',
    endDate: '',
    endTime: '',
    informedByUser: '',
    actionTakenByUser: '',
    status:''
   
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
      <h2>Resolved Issues</h2>
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
            End Date:
            <input type="text" name="endDate" value={issueData.startDate} onChange={handleInputChange} className="form-input" />
          </label>
          <label className="form-label">
            End Time:
            <input type="text" name="endTime" value={issueData.startTime} onChange={handleInputChange} className="form-input" />
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
          <label className="form-label">
            Status:
            <input type="text" name="status" value={issueData.status} onChange={handleInputChange} className="form-input" />
          </label>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>
  );
}
