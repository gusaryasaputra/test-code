import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentForEdit: {
    index: -1,
    student: {
      idDB: "",
      id: "",
      name: "",
      email: "",
    },
  },
  students: [],
};

const studentsSlice = createSlice({
  name: "students",
  initialState: initialState,
  reducers: {
    setStudentForEdit: (state, action) => {
      state.studentForEdit = action.payload;
    },
    fetchStudents: (state, action) => {
      state.students = [...action.payload];
    },
    updateStudent: (state, action) => {
      state.students[action.payload.index] = action.payload.student;
    },
    addNewStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.students.splice(action.payload, 1);
    },
  },
});

export const {
  setStudentForEdit,
  fetchStudents,
  updateStudent,
  addNewStudent,
  removeStudent,
} = studentsSlice.actions;
export default studentsSlice.reducer;
