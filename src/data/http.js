import axios from "axios";

const BACKEND_URL =
  "https://students-job-test-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function sendData(data) {
  const response = await axios.post(BACKEND_URL + "/students.json", data);

  return { status: response.statusText };
}

export function updateData(id, data) {
  return axios.put(BACKEND_URL + `/students/${id}.json`, data);
}

export function deleteData(id) {
  return axios.delete(BACKEND_URL + `/students/${id}.json`);
}
