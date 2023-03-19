import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "../features/studentSlice";

export default configureStore({
  reducer: {
    students: studentsReducer,
  },
});
