import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote,showAlert} = props;
  
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-item-center">
            <h5 className="card-title">
              {note.title}
              <i
                className="fa-regular fa-trash-can mx-2"
                onClick={() => {
                  deleteNote(note._id);
                 showAlert("Deleted Succeessfully","success")
                }}
              ></i>
              <i
                className="fa-solid fa-pen-to-square mx-2"
                onClick={() => {
                  updateNote(note);
                  
                }}
              ></i>
            </h5>
          </div>

          <p className="card-text"> {note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
