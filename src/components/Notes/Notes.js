import React, { useState, useEffect } from "react";
import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";

export default function Notes() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [searchText, setSearchText] = useState("");
  const [notesColors, setNotesColors] = useState([]);

  useEffect(() => {
    fetch("https://www.thecolorapi.com/scheme?hex=fffacd&mode=analogic")
      .then((response) => response.json())
      .then((data) => {
        setNotesColors(data.colors.map((color) => color.hex.value));
      })
      .catch((error) =>
        alert(
          "Oops! Unable to load random color generator. All notes will default to light yellow."
        )
      );
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote() {
    const newNote = {
      id: Date.now(),
      title: "",
      body: "",
      doesMatchSearch: true,
      backgroundColor:
        notesColors[Math.floor(Math.random() * notesColors.length)],
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }

  function removeNote(clickedId) {
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== clickedId));
  }

  function onType(changedNoteId, updatedKey, updatedValue) {
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id !== changedNoteId) {
          return note;
        } else {
          if (updatedKey === "title") {
            return { ...note, title: updatedValue };
          } else {
            return { ...note, body: updatedValue };
          }
        }
      })
    );
  }

  function onSearch(text) {
    const newSearchText = text.toLowerCase();

    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (!newSearchText) {
          note.doesMatchSearch = true;
          return note;
        } else {
          const title = note.title.toLowerCase();
          const body = note.body.toLowerCase();
          const titleMatch = title.includes(newSearchText);
          const bodyMatch = body.includes(newSearchText);
          const hasMatch = titleMatch || bodyMatch;
          note.doesMatchSearch = hasMatch;
          return note;
        }
      })
    );
    setSearchText(newSearchText);
  }

  return (
    <div className="widget">
      <NotesHeader addNote={addNote} onSearch={onSearch} searchText={searchText} />
      <NotesList notes={notes} onType={onType} removeNote={removeNote} />
    </div>
  );
}
