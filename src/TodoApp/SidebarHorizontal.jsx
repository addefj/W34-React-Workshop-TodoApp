import React from "react";

const SidebarHorizontal = () => {
  return (
    <div className="d-lg-none d-flex justify-content-end gap-3 px-3 py-2 border-bottom">
      <a href="#" className="btn btn-custom btn-sm">
        <i className="bi bi-grid"></i>
      </a>
      <a href="#" className="btn btn-custom btn-sm">
        <i className="bi bi-people"></i>
      </a>
      <a href="#" className="btn btn-custom btn-sm">
        <i className="bi bi-list-task"></i>
      </a>
      <a href="#" className="btn btn-custom btn-sm">
        <i className="bi bi-gear"></i>
      </a>
      <a href="#" className="btn btn-custom btn-sm">
        <i className="bi bi-box-arrow-right"></i> Logout
      </a>
    </div>
  );
};

export default SidebarHorizontal;
