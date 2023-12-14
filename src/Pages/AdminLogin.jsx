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
                <a  onClick={handleReportClick}>Reports</a>
              </li>
              <li>
                <a  onClick={handleIssuesClick}>Issues</a>
              </li>
              <li>
                <a  onClick={handleCategoriesClick}>Categories</a>
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
    </div>
  );
};

export default AdminLogin;
