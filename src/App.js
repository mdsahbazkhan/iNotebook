import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import Home from "./component/Home";
import About from "./component/About";
import NoteState from "./context/notes/NotesState";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home showAlert={showAlert} />}
              ></Route>
              <Route
                exact
                path="/about"
                element={<About showAlert={showAlert} />}
              ></Route>
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              ></Route>
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
