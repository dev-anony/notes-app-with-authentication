import React from "react";

function NoteCard({ text, onDelete }) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <p>{text}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default NoteCard;
