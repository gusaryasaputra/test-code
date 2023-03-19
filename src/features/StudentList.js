import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudent, removeStudent } from "../features/studentSlice";

const StudentList = () => {
  const students = useSelector((state) => state.students.students);

  const dispatch = useDispatch();

  const editStudentHandler = (id) => {
    const existingStudent = students.find((student) => student.id === id);
    dispatch(getStudent(existingStudent));
  };

  const deleteStudentHandler = (index) => {
    dispatch(removeStudent(index));
  };

  return (
    <div>
      <h2>Disini List</h2>
      {students.map((student, index) => {
        return (
          <div key={index}>
            <span>ID: </span>
            <span>{student.id}</span>
            <span>Name: </span>
            <span>{student.name}</span>
            <span>Email: </span>
            <span>{student.email}</span>
            <button onClick={() => editStudentHandler(student.id)}>Edit</button>
            <button onClick={() => deleteStudentHandler(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default StudentList;
