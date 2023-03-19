import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewStudent } from "../features/studentSlice";

const StudentForm = () => {
  const student = useSelector((state) => state.students.student);

  console.log(student);

  const [studentName, setStudentName] = useState(student.name);
  const [studentEmail, setStudentEmail] = useState(student.email);

  const [isClicked, setIsClicked] = useState(false);
  const [isStudentName, setIsStudentName] = useState(false);
  const [isStudentEmail, setIsStudentEmail] = useState(false);

  const dispatch = useDispatch();

  const onStudentNameChanged = (event) => {
    setStudentName(event.target.value);
    setIsStudentName(true);
  };
  const onStudentEmailChanged = (event) => {
    setStudentEmail(event.target.value);
    setIsStudentEmail(true);
  };

  const saveStudentHandler = (event) => {
    event.preventDefault();

    setIsClicked(true);

    if (studentName.length === 0) {
      setIsStudentName(false);
    }

    if (studentEmail.length === 0) {
      setIsStudentEmail(false);
    }

    if (!isStudentName || !isStudentEmail) {
      return;
    }

    const studentId = Math.floor(Math.random() * 99);

    const newStudent = {
      id: studentId,
      name: studentName,
      email: studentEmail,
    };

    setStudentName("");
    setStudentEmail("");

    dispatch(addNewStudent(newStudent));
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="studentName">Name:</label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          placeholder="Student Name"
          value={studentName}
          onChange={onStudentNameChanged}
        />
        {!isStudentName && isClicked ? (
          <span className="text-danger">This field is required!</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label htmlFor="studentEmail">Email:</label>
        <input
          type="email"
          id="studentEmail"
          name="studentEmail"
          placeholder="Student Email"
          value={studentEmail}
          onChange={onStudentEmailChanged}
        />
        {!isStudentEmail && isClicked ? (
          <span className="text-danger">This field is required!</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <button type="submit" onClick={saveStudentHandler}>
          Save Post
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
