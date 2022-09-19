import React from "react";
import "../styles/note.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ note, clickedNote, deleteNote, id }) => {
  return (
    <div className="note">
      <div className="note-header">
        <h2 onClick={() => clickedNote(note)}>{note.title}</h2>
        <button className="delete-button" onClick={() => deleteNote(id)}>
          <DeleteIcon className="deleteIcon" />
        </button>
      </div>
      <div className="note-body">
        <p>{note.text}</p>
        <h4>{note.date}</h4>
      </div>
    </div>
  );
};

export default Note;
