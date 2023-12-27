import React, { useState } from 'react';
import Reports from './Reports';
import Issues from './Issues';
import Categories from './Categories';
import './AdminLogin.css';

const AdminLogin = () => {
  const [showReport, setShowReport] = useState(false);
  const [showIssues, setShowIssues] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const handleReportClick = () => {
    setShowReport(true);
    setShowIssues(false);
    setShowCategories(false);
  };

  const handleIssuesClick = () => {
    setShowIssues(true);
    setShowReport(false);
    setShowCategories(false);
  };

  const handleCategoriesClick = () => {
    setShowCategories(true);
    setShowReport(false);
    setShowIssues(false);
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <header>
          <nav>
            <ul className="taskbar">
              <li>
                <button onClick={handleReportClick}>Report</button>
              </li>
              <li>
                <button onClick={handleIssuesClick}>Issue Titles</button>
              </li>
              <li>
                <button onClick={handleCategoriesClick}>Categories</button>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <main className="content">
        {showReport && <Reports />}
        {showIssues && <Issues />}
        {showCategories && <Categories />}
      </main>
      <div className="bottom-bar"></div>
    </div>
  );
};

export default AdminLogin;
