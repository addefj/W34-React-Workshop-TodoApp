import React from 'react';

const SidebarVertical = () => {
  return (
    <nav className="col-lg-3 d-none d-lg-block sidebarVertical border-end vh-100 position-fixed">
      <div className="d-flex flex-column h-100 p-3">
        <div className="flex-grow-1 w-100">
          <h4 className="mb-4">Menu</h4>
          <ul className="nav nav-pills flex-column mb-auto w-100">
            <li className="nav-item">
              <a href="#" className="nav-link link-dark">
                <i className="bi bi-grid"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <i className="bi bi-people"></i> Users
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <i className="bi bi-list-task"></i> Tasks
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <i className="bi bi-gear"></i> Settings
              </a>
            </li>
          </ul>
        </div>

        <div>
          <small>Username</small>
          <br />
          <a href="#" className="btn btn-custom link-dark">
            <i className="bi bi-box-arrow-right"></i> Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SidebarVertical;
