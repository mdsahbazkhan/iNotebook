import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5006";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //Get all Note
  // const getNotes = async () => {
  //   try {
  //     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "auth-token":
  //           localStorage.getItem('token')
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Request failed with status: " + response.status);
  //     }
  //     const json = await response.json();
  //     setNotes(json);
  //   } catch (error) {
  //     console.error("Error while fetching notes:", error);
  //   }
  // };
    const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
      const notes = await response.json();
      setNotes(notes);
    } catch (error) {
      console.error("Error while fetching notes:", error);
    }
  };
  //Add a Note
  const addNote = async (title, description, tag) => {
    try {
      //API Call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const note = await response.json();
      setNotes(notes.concat(note));      
    } catch (error) {
      console.error("Error while adding a note:", error);
    }
  };
  //Delete a Note
  // const deleteNote = async (id) => {
  //   //API Call
  //   const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token":
  //         localStorage.getItem('token')
  //     },
  //   });
  //   const json = await response.json();
  //   const newNotes = notes.filter((notes) => {
  //     return notes._id !== id;
  //   });
  //   setNotes(newNotes);
  // };
  const deleteNote = async (id) => {
    try {
      // API Call to delete the note
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
  
      // Filter out the deleted note from the notes array
      const newNotes = notes.filter((note) => note._id !== id);
  
      // Update the state with the filtered notes array
      setNotes(newNotes);
    } catch (error) {
      console.error("Error while deleting note:", error);
    }
  };
  //Edit a Note
  // const editNote = async (id, title, description, tag) => {
  //   try {
  //     //API Call
  //     const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "auth-token":
  //           localStorage.getItem('token')
  //       },
  //       body: JSON.stringify({ title, description, tag }),
  //     });
  //     const json = await response.json();
      
  //     let newNotes = JSON.parse(JSON.stringify(notes));
   const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
      
      let newNotes = JSON.parse(JSON.stringify(notes));

      //Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break; 
        }
       
      }
      setNotes(newNotes);
    } catch (error) {
      console.error("Error while updating note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
