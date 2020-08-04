import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import db from '../firebase';
import firebase from 'firebase';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  // const[inputNote,setInputNote] = useState("");


  useEffect(() => {
    ///this code fire whn app.js loads

    db.collection('notes').orderBy('timestamp',
     'desc')
    .onSnapshot(snapshot => {
      setNotes(snapshot.docs.map(doc =>
         ({id: doc.id ,note: doc.data().note})))
    })
  },[]);
  const addNote = (event) => {
    //this will happen when we click button
    //event.preventDefault(); //prevent from refreshing
    
    db.collection('notes').add({
      
      note: note,
     
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);
    //clear up the input after clicking add todo button

  }

  // function addNote(newNote) {
  //   setNotes(prevNotes => {
  //     return [...prevNotes, newNote];
  //   });
  // }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            // note={noteItem}
             title={noteItem.title}
             content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
