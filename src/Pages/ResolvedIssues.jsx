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

const StatusEnum = {
  OPEN: 'Open',
  IN_PROGRESS: 'In Progress',
  RESOLVED: 'Resolved',
  CLOSED: 'Closed',
};

export default function ResolvedIssues() {
  const [issueData, setIssueData] = useState({
    category: '',
    issueTitle: '',
    location: '',
    endDate: '',
    endTime: '',
    informedByUser: '',
    actionTakenByUser: '',
    status: '',
  });

  const [usernames, setUsernames] = useState([]);
  const [categories, setCategories] = useState([]); // Added categories state

  useEffect(() => {
    async function fetchData() {
      try {
        const userResponse = await axios.get('http://localhost:8080/api/v1/user/userNames');
        setUsernames(userResponse.data);

        const categoryResponse = await axios.get('http://localhost:8080/api/categories/categoryNames');
        setCategories(categoryResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIssueData({ ...issueData, [name]: value });
  };

  const renderCategoryOptions = (options) => {
    return categoryNames.map((categoryName) => (
      <option key={categoryName} value={categoryName}>
        {categoryName}
      </option>
    ));
  };

  const renderUserOptions = () => {
    return usernames.map((username) => (
      <option key={username} value={username}>
        {username}
      </option>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(issueData);
  };

  return (
    <div className="entity-container">
      <h2>Resolved Issues</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-column">
          <label className="form-label">
            Category:
            <select
              name="category"
              value={issueData.category}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="">Select category</option>
              {renderOptions(categories)}
            </select>
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
              {Object.values(LocationEnum).map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-column">
          <label className="form-label">
            End Date:
            <input
              type="date"
              name="endDate"
              value={issueData.endDate}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            End Time:
            <input
              type="time"
              name="endTime"
              value={issueData.endTime}
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
          <label className="form-label">
            Status:
            <select
              name="status"
              value={issueData.status}
              onChange={handleInputChange}
              className="form-input"
            >
              {Object.values(StatusEnum).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
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
