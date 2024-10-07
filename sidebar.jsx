// AdminPanel.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <a className="sidebar-brand" href="index.html">
            <span className="align-middle">AdminKit</span>
          </a>

          <ul className="sidebar-nav">
            <li className="sidebar-header">Pages</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/dashboard">
                <i className="align-middle" data-feather="sliders"></i>
                <span className="align-middle">Dashboard</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/profile">
                <i className="align-middle" data-feather="user"></i>
                <span className="align-middle">Profile</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/sign-in">
                <i className="align-middle" data-feather="log-in"></i>
                <span className="align-middle">Sign In</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/sign-up">
                <i className="align-middle" data-feather="user-plus"></i>
                <span className="align-middle">Sign Up</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/blank">
                <i className="align-middle" data-feather="book"></i>
                <span className="align-middle">Blank</span>
              </Link>
            </li>

            <li className="sidebar-header">Tools & Components</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/ui-buttons">
                <i className="align-middle" data-feather="square"></i>
                <span className="align-middle">Buttons</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/ui-forms">
                <i className="align-middle" data-feather="check-square"></i>
                <span className="align-middle">Forms</span>
              </Link>
            </li>

            <li className="sidebar-item active">
              <Link className="sidebar-link" to="/ui-cards">
                <i className="align-middle" data-feather="grid"></i>
                <span className="align-middle">Cards</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/ui-typography">
                <i className="align-middle" data-feather="align-left"></i>
                <span className="align-middle">Typography</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/icons">
                <i className="align-middle" data-feather="coffee"></i>
                <span className="align-middle">Icons</span>
              </Link>
            </li>

            <li className="sidebar-header">Plugins & Addons</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/charts">
                <i className="align-middle" data-feather="bar-chart-2"></i>
                <span className="align-middle">Charts</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/maps">
                <i className="align-middle" data-feather="map"></i>
                <span className="align-middle">Maps</span>
              </Link>
            </li>
          </ul>

          <div className="sidebar-cta">
            <div className="sidebar-cta-content">
              <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
              <div className="mb-3 text-sm">
                Are you looking for more components? Check out our premium version.
              </div>
              <div className="d-grid">
                <a href="upgrade-to-pro.html" className="btn btn-primary">
                  Upgrade to Pro
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminPanel;
