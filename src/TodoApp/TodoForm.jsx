import React, { useState } from "react";
import { addTodo } from "./todoService";
import { useForm } from "react-hook-form";

const TodoForm = ({ onAddTodo }) => {
  
  const [selectedFiles, setSelectedFiles] = useState([]); // State to hold selected attachments

  const handleFileSelection = (e) => {
    const newFiles = Array.from(e.target.files);
    setSelectedFiles((prev) => [...prev, ...newFiles]);
    e.target.value = ""; // Clear the input after selection
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      due: "",
      assignee: "",
      attachments: [],
    },
  });

  const onSubmit = (data) => {
    const newTodo = { ...data, attachments: selectedFiles.map((f) => f.name) }; // Extract file names for attachments

    addTodo(newTodo); // Add the new todo item using the service function
    onAddTodo(); // Call the function to reload the todo list
    console.log(newTodo);
    reset(); // Reset the form fields after submission
    setSelectedFiles([]); // Clear the selected files
  };

  return (
    <div className="container w-75 bg-white border rounded p-3 mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          {errors.title && (
            <div className="text-danger small">{errors.title.message}</div>
          )}
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            name="title"
            {...register("title", { required: "Title is required" })}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          {errors.description && (
            <div className="text-danger small">
              {errors.description.message}
            </div>
          )}
          <textarea
            className="form-control"
            rows="3"
            id="description"
            placeholder="Enter description"
            name="description"
            {...register("description", {
              required: "Description is required",
            })}
          ></textarea>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-md-6 order-1">
            <label htmlFor="date" className="form-label">
              Due Date
            </label>
            {errors.due && (
              <div className="text-danger small">{errors.due.message}</div>
            )}
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              {...register("due", { required: "Due date is required" })}
            />
          </div>

          <div className="col-12 col-md-6 mt-3 mt-md-0 order-2">
            <label htmlFor="assignee" className="form-label">
              Assign to Person (Optional)
            </label>
            <select
              className="form-select"
              id="assignee"
              name="assignee"
              {...register("assignee")}
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
              onChange={handleFileSelection}
            />
            <button
              className="btn btn-outline-danger"
              type="button"
              id="clearAttachment"
              onClick={() => setSelectedFiles([])}
            >
              &times;
            </button>
          </div>

          {/* Preview file list */}
          <ul className="list-group mt-3 border rounded p-2" id="fileList">
            {selectedFiles.map((file, idx) => (
              <li className="list-group-item border-0 p-0" key={file.name + file.lastModified}>{file.name}</li>
            ))}
          </ul>
        </div>

        <div className="mt-3 text-end">
          <button type="submit" id="submitForm" className="btn btn-primary">
            + Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
