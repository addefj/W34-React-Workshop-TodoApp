import React, {useState} from 'react'
import { addTodo } from './todoService';

const TodoForm = ({onAddTodo}) => {

  const handleClick = (e) => {
    const newTodo =  {
      title: "Todo 1",
      description: "Description for Todo 1",
      created: "2025-08-21",
      due: "2025-08-30",
      assignee: "Måns Jönsson",
      attachments: 2,
    };
    addTodo(newTodo);
    onAddTodo(); // Call the function to reload the todo list
    // reset the form elements
  }

  return (
    
            <div className="container w-75 bg-white border rounded p-3 mt-4">
              <form id="form"  noValidate>
                <div>
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter title"
                    name="title"
                    required
                  />
                  <div className="invalid-feedback">Please enter a title.</div>
                </div>

                <div className="mt-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    id="description"
                    placeholder="Enter description"
                    name="description"
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter a description.
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12 col-md-6 order-1">
                    <label htmlFor="date" className="form-label">
                      Due Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a date.
                    </div>
                  </div>

                  <div className="col-12 col-md-6 mt-3 mt-md-0 order-2">
                    <label htmlFor="assignee" className="form-label">
                      Assign to Person (Optional)
                    </label>
                    <select
                      className="form-select"
                      id="assignee"
                      name="assignee"
                    >
                      <option value="">--Select Person (Optional)--</option>
                      <option value="Sven">Sven</option>
                      <option value="Karl">Karl</option>
                      <option value="John">John</option>
                    </select>
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="attachments" className="form-label">
                    Attachments
                  </label>
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      id="attachments"
                      name="attachments"
                      multiple
                    />
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      id="clearAttachment"
                    >
                      &times;
                    </button>
                  </div>

                  <ul
                    className="list-group mt-2 border rounded p-4"
                    id="fileList"
                  ></ul>
                </div>

                <div className="mt-3 text-end">
                  <button
                    type="button"
                    id="submitForm"
                    className="btn btn-primary"
                    onClick={handleClick}
                  >
                    + Add Todo
                  </button>
                </div>
              </form>
            </div>

  )
}

export default TodoForm