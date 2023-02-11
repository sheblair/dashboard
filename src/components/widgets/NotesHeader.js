import React from "react";

export default function NotesHeader(props) {
  const callSearch = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <header className="app-header__controls">
      <h1 className="app-header__title">Sticky Notes</h1>
      <aside>
        <button onClick={props.addNote} className="add-new">
          + New Note
        </button>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
          onChange={callSearch}
        />
      </aside>
    </header>
  );
}
