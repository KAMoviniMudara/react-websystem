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
                  <button type="button" onClick={handleAddIssuesClick}>Add Issues</button>
                </li>
                <li>
                  <button type="button" onClick={handleResolvedIssuesClick}>Resolved Issues</button>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <main className="content">
          {showAddIssues && <AddIssues />}
          {showResolvedIssues && <ResolvedIssues />}
        </main>
        <div className="bottom-bar"></div>
      </div>
    );
  };
  
  export default UserLogin;
  