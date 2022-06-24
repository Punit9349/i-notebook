import React from "react";
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState=(props)=>{

    const notesInitial = [
          {
            "_id": "62ab6200cde044e2733dab1e",
            "user": "62aa19bd4dd200099326a251",
            "title": "My Title",
            "description": "Its my title na",
            "tag": "personal",
            "date": "2022-06-16T17:01:52.907Z",
            "__v": 0
          },
          {
            "_id": "62b373aa7b97d8bf17efad92",
            "user": "62aa19bd4dd200099326a251",
            "title": "My Title1",
            "description": "Its my title na",
            "tag": "personal",
            "date": "2022-06-22T19:55:22.261Z",
            "__v": 0
          },
          {
            "_id": "62ab6200cde044e2733dab1e1",
            "user": "62aa19bd4dd200099326a251",
            "title": "My Title",
            "description": "Its my title na",
            "tag": "personal",
            "date": "2022-06-16T17:01:52.907Z",
            "__v": 0
          },
          {
            "_id": "62b373aa7b97d8bf17efad921",
            "user": "62aa19bd4dd200099326a251",
            "title": "My Title1",
            "description": "Its my title na",
            "tag": "personal",
            "date": "2022-06-22T19:55:22.261Z",
            "__v": 0
          },
          {
            "_id": "62ab6200cde044e2733dab1e2",
            "user": "62aa19bd4dd200099326a251",
            "title": "My Title",
            "description": "Its my title na",
            "tag": "personal",
            "date": "2022-06-16T17:01:52.907Z",
            "__v": 0
          },
          {
            "_id": "62b373aa7b97d8bf17efad922",
            "user": "62aa19bd4dd200099326a251",
            "title": "My Title1",
            "description": "Its my title na",
            "tag": "personal",
            "date": "2022-06-22T19:55:22.261Z",
            "__v": 0
          }
      ]

      const [notes, setnotes] = useState(notesInitial)

      // Add a Note
      const addNote=(title, description, tag)=>{
        // TODO: API call
        console.log("Adding a new note");
        const note= {
          "_id": "62b373aa7b97d8bf17efad922",
          "user": "62aa19bd4dd200099326a251",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-06-22T19:55:22.261Z",
          "__v": 0
        };
        setnotes(notes.concat(note));

      }

      // Delete a Note
      const deleteNote=(id)=>{
        // TODO: API call
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{ return note._id!==id}) 
        setnotes(newNotes);
      }

      // Edit a Note
      const editNote=()=>{

      }

    return (
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )

}

export default NoteState;