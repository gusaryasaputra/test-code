import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewStudent, updateStudent } from "../features/studentSlice";
import { sendData, updateData } from "../data/http";

const StudentForm = () => {
  const studentForEdit = useSelector((state) => state.students.studentForEdit);

  const [isNewData, setIsNewData] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();

  const doUpdate = () => {
    const student = {
      id: studentForEdit.student.id,
      name: studentName,
      email: studentEmail,
    };

    updateData(studentForEdit.student.idDB, student);

    dispatch(updateStudent({ index: studentForEdit.index, student }));
  };

  const doAddNew = async () => {
    const studentId = Math.floor(Math.random() * 99);

    const newStudent = {
      id: studentId,
      name: studentName,
      email: studentEmail,
    };

    const response = await sendData(newStudent);

    if (response.status == "OK") {
      dispatch(addNewStudent(newStudent));
    }
  };

  const onStudentNameChanged = (event) => {
    setStudentName(event.target.value);
  };
  const onStudentEmailChanged = (event) => {
    setStudentEmail(event.target.value);
  };

  const saveStudentHandler = (event) => {
    event.preventDefault();
    setIsClicked(true);

    if (!studentName || !studentEmail) {
      return;
    }

    isNewData ? doAddNew() : doUpdate();

    setStudentName("");
    setStudentEmail("");
    setIsClicked(false);
    setIsNewData(true);
  };

  useEffect(() => {
    if (studentForEdit.index >= 0) {
      setStudentName(studentForEdit.student.name);
      setStudentEmail(studentForEdit.student.email);
      setIsNewData(false);
    } else {
      setIsNewData(true);
    }
  }, [studentForEdit]);

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
        {!studentName && isClicked ? (
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
        {!studentEmail && isClicked ? (
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
