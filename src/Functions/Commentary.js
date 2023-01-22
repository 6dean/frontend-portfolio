import axios from "axios";

// ADD comment
const Commentary = async (username, email, comment, setDataError) => {
  const Today = new Date().toLocaleDateString().slice(0, 2);
  const Month = new Date().toLocaleDateString("en-US", { month: "long" });
  const Year = new Date().toLocaleDateString("fr-FR").slice(6, 10);
  const Hour = new Date().toLocaleTimeString("fr-FR").slice(0, 5);
  const date = Today + " " + Month + " " + Year + " " + Hour;

  const myString = username;

  if (myString.search(" ") !== -1) {
    setDataError("Usernames with space character are not allowed");
    return null;
  } else if (
    username.length === 0 &&
    email.length === 0 &&
    comment.length === 0
  ) {
    setDataError("Mmmh you need to write something...");
    return null;
  } else if (email.includes("@") !== true) {
    setDataError("Something goes wrong with your mail");
    return null;
  } else if (email.length < 10) {
    setDataError("Something goes wrong with your mail");
    return null;
  } else if (email.includes("test") === true) {
    setDataError("Something goes wrong with your mail");
    return null;
  } else if (email.includes("azerty") === true) {
    setDataError("Something goes wrong with your mail");
    return null;
  } else if (email.includes("qwerty") === true) {
    setDataError("Something goes wrong with your mail");
    return null;
  } else if (comment.length < 2) {
    setDataError("Your comment is too short");
    return null;
  } else {
    try {
      await axios.put(
        `https://site--backend-portfolio--6qn7tv96v7tt.code.run/comment`,
        {
          name: username,
          email: email,
          date: date,
          text: comment,
        }
      );
    } catch (error) {
      setDataError(error.response.data.message);
    }
  }
};

export default Commentary;
