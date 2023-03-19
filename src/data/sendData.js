import axios from "axios";

const BACKEND_URL =
  "https://students-job-test-default-rtdb.asia-southeast1.firebasedatabase.app/students.json";

export async function sendData(data) {
  const response = await axios.post(BACKEND_URL, data);

  if (response === "ok") {
    return true;
  } else {
    // CALL HANDLER ALERT
    return false;
  }
}
