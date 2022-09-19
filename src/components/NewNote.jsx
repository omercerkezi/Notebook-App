import { React, useState } from "react";
import "../styles/newNote.css";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import CancelIcon from "@mui/icons-material/Cancel";

const NewNote = ({ addNote }) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [textNote, setTextNote] = useState(false);

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleTextNote = () => {
    setTextNote((prev) => !prev);
  };

  const saveText = () => {
    if (text.trim().length > 0 && title.length > 0 && category.length > 0) {
      addNote(category, title, text);
      setTitle("");
      setCategory("");
      setText("");
    }
  };

  return (
    <div className="newNote">
      <div
        className="newNote-buttonNote"
        style={{ display: textNote && "none" }}
      >
        <button onClick={handleTextNote}>
          Add new Note
          <span>
            <NoteAltIcon />
          </span>
        </button>
      </div>
      <div
        className="newNote-textNote"
        style={{
          display: !textNote && "none",
        }}
      >
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={handleCategory}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitle}
        />
        <textarea
          rows={5}
          col={5}
          value={text}
          placeholder="Type to add new note!"
          onChange={handleText}
        />
        <div className="newNote-buttons">
          <button className="addButton" onClick={saveText}>
            <NoteAddIcon />
          </button>
          <button className="exitButton" onClick={handleTextNote}>
            <CancelIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
