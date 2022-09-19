import React from "react";
import NewNote from "./NewNote";
import Note from "./Note";
import "../styles/notesList.css";

const NotesList = ({ notes, clickedNote, addNote, deleteNote }) => {
  return (
    <div className="noteList">
      <NewNote addNote={addNote} />
      <div className="notes">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            note={note}
            clickedNote={clickedNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
