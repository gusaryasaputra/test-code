import axios from "axios";

const BACKEND_URL =
  "https://students-job-test-default-rtdb.asia-southeast1.firebasedatabase.app/students.json";

export async function fetchData() {
  const response = await axios.get(BACKEND_URL);

  const students = [];

  for (const key in response.data) {
    const studentObj = {
      idDB: key,
      id: response.data[key].id,
      name: response.data[key].name,
      email: response.data[key].email,
    };
    students.push(studentObj);
  }

  return { data: students, status: response.statusText };
}
