import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,
  setStudentForEdit,
  removeStudent,
} from "../features/studentSlice";
import { fetchData } from "../data/fetchData";
import { deleteData } from "../data/http";

const StudentList = () => {
  const [page, setPage] = useState(1);
  const students = useSelector((state) => state.students.students);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();

      if (response.status == "OK") {
        dispatch(fetchStudents(response.data));
      }
    };
    getData();
  }, []);

  const editStudentHandler = (index) => {
    const student = { ...students[index] };
    dispatch(setStudentForEdit({ index, student }));
  };

  const deleteStudentHandler = (index) => {
    deleteData(students[index].idDB);
    dispatch(removeStudent(index));
  };

  const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  };

  const range = calculateRange(students, 4);
  const studentsSlice = sliceData(students, page, 4);

  return (
    <>
      <h2>Students List</h2>
      <table>
        <thead className="thead">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentsSlice.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    type="button"
                    className="edit"
                    onClick={() => editStudentHandler(index)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="delete"
                    onClick={() => deleteStudentHandler(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={3} className="page-number">
              {range.map((number, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className={
                      number === page ? "active-number" : "inactive-number"
                    }
                    onClick={() => setPage(number)}
                  >
                    {number}
                  </button>
                );
              })}
            </th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default StudentList;
