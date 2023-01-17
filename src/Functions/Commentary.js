import axios from "axios";

// ADD comment
const Commentary = async (username, email, comment, date) => {
  await axios.put(`http://localhost:3001/comment`, {
    name: username,
    email: email,
    date: date,
    text: comment,
  });
};

export default Commentary;
