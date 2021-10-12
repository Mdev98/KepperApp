import React from "react";

function CreateArea(props) {
  function off(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={off}>
        <input
          name="title"
          placeholder="Title"
          onChange={() => {
            props.onEdit();
          }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={() => {
            props.onEdit();
          }}
        />
        <button
          onClick={() => {
            props.onCreate();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
