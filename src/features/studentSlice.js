import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: {
    id: "",
    name: "",
    email: "",
  },
  students: [],
};

const studentsSlice = createSlice({
  name: "students",
  initialState: initialState,
  reducers: {
    getStudent: (state, action) => {
      state.student = action.payload;
    },
    addNewStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.students.splice(action.payload, 1);
    },
  },
});

export const { getStudent, addNewStudent, removeStudent } =
  studentsSlice.actions;
export default studentsSlice.reducer;
