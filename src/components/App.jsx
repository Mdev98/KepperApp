import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// function addNote(data) {
//   return <Note key={1} title={data.title} content={data.content} onPress={deleteNote}/>;
// }

function App() {
  const [notes, setNotes] = useState([]);

  const [entry, setEntry] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    console.log("Change will be handled here");

    const inputField = document.querySelector("input");

    const textField = document.querySelector("textarea");

    setEntry((preValue) => {
      return {
        ...preValue,
        title: inputField.value,
        content: textField.value
      };
    });
  }

  function createNote() {
    console.log("Note will be created here");

    if (entry.title === "" && entry.content === "") {
      return false;
    }

    setNotes((preValue) => {
      return [...preValue, entry];
    });
  }

  function deleteNote(val){
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.title !== val);
    });
  }

  function addNote(data) {
    return <Note key={1} title={data.title} content={data.content} onPress={deleteNote}/>;
  }

  return (
    <div>
      <Header />
      <CreateArea onCreate={createNote} onEdit={handleChange} />
      {notes.map(addNote)}
      <Footer />
    </div>
  );
}

export default App;
