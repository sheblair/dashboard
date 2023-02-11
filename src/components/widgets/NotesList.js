import React from "react";
import Note from "./Note";

export default function NotesList(props) {
  const filteredNotes = props.notes.filter((note) => note.doesMatchSearch);

  const renderNote = (note) => (
    <Note
      key={note.id}
      note={note}
      onType={props.onType}
      removeNote={props.removeNote}
    />
  );
  const notesListElements = filteredNotes.map(renderNote);

  return <ul className="notes-list">{notesListElements}</ul>;
}
