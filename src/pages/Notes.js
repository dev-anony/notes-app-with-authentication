import React, { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(stored);
  }, []);

  const addNote = () => {
    if (!input.trim()) return;
    const newNotes = [...notes, input];
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setInput("");
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Your Notes</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Write a note..." />
      <button onClick={addNote}>Add</button>
      <div>
        {notes.map((note, i) => (
          <NoteCard key={i} text={note} onDelete={() => deleteNote(i)} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
