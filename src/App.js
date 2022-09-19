import { useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [selectedNote, setSelectedNote] = useState({});
  const [search, setSearch] = useState("");

  const addNote = (category, title, text) => {
    const date = new Date();
    const newNote = {
      category: category,
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevItems) => {
      return prevItems.filter((note, index) => {
        return index !== id;
      });
    });
    setSelectedNote({});
  };

  const clickedNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className="app-container">
      <h1>Notebook</h1>
      <div className="app-body">
        <div className="allNotes">
          <Search setSearch={setSearch} />
          <NotesList
            notes={notes.filter((note) => {
              return (
                note.text.toLowerCase().includes(search.toLowerCase()) ||
                note.title.toLowerCase().includes(search.toLowerCase()) ||
                note.category.toLowerCase().includes(search.toLowerCase())
              );
            })}
            clickedNote={clickedNote}
            addNote={addNote}
            deleteNote={deleteNote}
          />
        </div>

        {Object.keys(selectedNote).length !== 0 ? (
          <div className="selected-note">
            <div className="selectedNote-header">
              <h2>{selectedNote.title}</h2>
              <h4>{selectedNote.date}</h4>
            </div>
            <h4>
              Category: <span>{selectedNote.category}</span>
            </h4>
            <p>{selectedNote.text}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
