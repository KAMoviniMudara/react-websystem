import React, { useState, useEffect } from 'react';
import './EntityStyle.css';
import axios from 'axios';

const LocationEnum = {
  HEAD_OFFICE_CC_COLOMBO: 'Head Office CC Colombo',
  CC_JAFFNA: 'CC Jaffna',
  ITC_BADULLA: 'ITC Badulla',
  ITC_KANDY: 'ITC Kandy',
  SAKS: 'SAKS',
};

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

  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userResponse = await axios.get('http://localhost:8080/api/v1/user/userNames');
        setUsernames(userResponse.data);
      } catch (error) {
        console.error('Error fetching usernames:', error.message);
      }
    }
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIssueData({ ...issueData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(issueData);
  };

  const renderUserOptions = () => {
    return usernames.map((username) => (
      <option key={username} value={username}>
        {username}
      </option>
    ));
  };

  const renderLocationOptions = () => {
    return Object.values(LocationEnum).map((location) => (
      <option key={location} value={location}>
        {location}
      </option>
    ));
  };

  return (
    <div className="entity-container">
      <h2>Add Issues</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-column">
          <label className="form-label">
            Category:
            <input
              type="text"
              name="category"
              value={issueData.category}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Issue Title:
            <input
              type="text"
              name="issueTitle"
              value={issueData.issueTitle}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Location:
            <select
              name="location"
              value={issueData.location}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="">Select location</option>
              {renderLocationOptions()}
            </select>
          </label>
        </div>
        <div className="form-column">
          <label className="form-label">
            Start Date:
            <input
              type="date"
              name="startDate"
              value={issueData.startDate}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Start Time:
            <input
              type="time"
              name="startTime"
              value={issueData.startTime}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-column">
          <label className="form-label">
            Informed By User:
            <select
              name="informedByUser"
              value={issueData.informedByUser}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="">Select user</option>
              {renderUserOptions()}
            </select>
          </label>
          <label className="form-label">
            Action Taken By User:
            <select
              name="actionTakenByUser"
              value={issueData.actionTakenByUser}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="">Select user</option>
              {renderUserOptions()}
            </select>
          </label>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
