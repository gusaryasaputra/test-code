import axios from "axios";

const BACKEND_URL =
  "https://students-job-test-default-rtdb.asia-southeast1.firebasedatabase.app/students.json";

export async function fetchData() {
  const response = await axios.get(BACKEND_URL);

  const students = [];

  for (const key in response.data) {
    const studentObj = {
      id: key,
      name: response.data[key].name,
      gender: response.data[key].gender,
      age: response.data[key].age,
      birthDay: new Date(response.data[key].birthDay),
    };
    students.push(studentObj);
  }

  return students;
}
