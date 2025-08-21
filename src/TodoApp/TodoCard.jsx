import React from "react";

const Card = () => {
  return (
    <div className="container w-75 bg-white border rounded p-3 mt-4">
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

        {/* Static Todo Card */}
        <div id="card-body" className="card-body">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h5 class="card-title mb-0">Toto title</h5>
            </div>
            <div class="col-md-6 text-end">
              <div class="d-inline-block me-3 text-muted">
                <small>Created: 2025-08-21</small>
              </div>
              <div class="btn-group">
                <button
                  class="mark-as-done btn btn-sm btn-outline-secondary"
                  title="Mark as done"
                >
                  <i class="bi bi-check-circle"></i>
                </button>
                <button class="btn btn-sm btn-outline-secondary" title="Edit">
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  class="delete-btn btn btn-sm btn-outline-secondary"
                  title="Delete"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>

          <p class="card-text mb-1">
            Description Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Provident, ullam.
          </p>

          <div class="row gx-2 gy-0">
            <div class="col-12 col-sm-auto">
              <small class="text-muted">
                <i class="bi bi-calendar-event"></i> Due: 2025-08-30
              </small>
            </div>
            <div class="col-12 col-sm-auto">
              <span class="badge bg-info text-dark">Måns Jönsson</span>
            </div>

            <div class="col-12 col-sm-auto">
              <span class="badge bg-secondary">2 attachment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
