import React, { useState } from "react";

import Navbar from "./app/Navbar";
import StudentForm from "./features/StudentForm";
import StudentList from "./features/StudentList";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="form-container">
          <h2>Student Form</h2>
          <StudentForm />
        </div>
        <div className="list-container">
          <StudentList />
        </div>
      </div>
    </>
  );
};

export default App;
