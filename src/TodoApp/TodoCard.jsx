import React, { useState } from "react";

const TodoCard = ({ todoItems }) => {
  return (
    <div className="container w-75 bg-white border rounded p-3 my-4">
      <div className="card mt-3">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="mb-0">Todos</h3>
            </div>
            <div className="col-auto">
              <div className="btn-group">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  title="Filter"
                >
                  <i className="bi bi-funnel"></i>
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  title="Sort"
                >
                  <i className="bi bi-sort-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Start of conditional rendering */}
        {todoItems.length === 0 ? (
          <li className="list-group-item border-0 p-3">
            No items in your Todolist
          </li>
        ) : (
          todoItems.map((item) => (
            <div id="card-body" className="card-body border" key={item.id}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h5 className="card-title mb-0">{item.title}</h5>
                </div>
                <div className="col-md-6 text-end">
                  <div className="d-inline-block me-3 text-muted">
                    <small>Created: {item.created}</small>
                  </div>
                  <div className="btn-group">
                    <button
                      className="mark-as-done btn btn-sm btn-outline-secondary"
                      title="Mark as done"
                    >
                      <i className="bi bi-check-circle"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      title="Edit"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="delete-btn btn btn-sm btn-outline-secondary"
                      title="Delete"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>

              <p className="card-text mb-1">{item.description}</p>

              <div className="row gx-2 gy-0">
                <div className="col-12 col-sm-auto">
                  <small className="text-muted">
                    <i className="bi bi-calendar-event"></i> Due: {item.due}
                  </small>
                </div>
                <div className="col-12 col-sm-auto">
                  <span className="badge bg-info text-dark">
                    {item.assignee}
                  </span>
                </div>

                <div className="col-12 col-sm-auto">
                  {item.attachments && item.attachments.length > 0 ? (
                    <span className="badge bg-secondary">
                      {item.attachments.length} attachment
                      {item.attachments.length > 1 ? "s" : ""}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))
        )}
        {/* End of conditional rendering */}
      </div>
    </div>
  );
};

export default TodoCard;
