import React, { useState } from 'react';
import AddIssues from './AddIssues';
import './AdminLogin.css';
import ResolvedIssues from './ResolvedIssues';

const UserLogin = () => {
  const [showAddIssues, setShowAddIssues] = useState(false);
  const [showResolvedIssues, setShowResolvedIssues] = useState(false);

  const handleAddIssuesClick = () => {
    setShowAddIssues(true);
    setShowResolvedIssues(false);
  };

  const handleResolvedIssuesClick = () => {
    setShowResolvedIssues(true);
    setShowAddIssues(false);
  };


  return (
    <div className="admin-container">
      <div className="sidebar">
        <header>
          <nav>
            <ul className="taskbar">
              <li>
                <a  onClick={handleAddIssuesClick}>Add Issues</a>
              </li>
              <li>
                <a  onClick={handleResolvedIssuesClick}>Resolved Issues</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <main className="content">
        {showAddIssues && <AddIssues />}
        {showResolvedIssues && <ResolvedIssues />}
      </main>
    </div>
  );
};

export default UserLogin;
