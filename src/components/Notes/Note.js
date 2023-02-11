import React from "react";

export default function Note(props) {
  const updateTitle = (event) => {
    const updatedValue = event.target.value;
    const changedNoteId = props.note.id;
    props.onType(changedNoteId, "title", updatedValue);
  };

  const updateBody = (event) => {
    const updatedValue = event.target.value;
    const changedNoteId = props.note.id;
    props.onType(changedNoteId, "body", updatedValue);
  };

  return (
    <li
      className="note"
      style={{ backgroundColor: props.note.backgroundColor }}
    >
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        className="note__body"
        placeholder="Body..."
        value={props.note.body}
        onChange={updateBody}
      />
      <i
        className="fa-solid fa-trash-can note__delete"
        onClick={() => props.removeNote(props.note.id)}
      ></i>
    </li>
  );
}
