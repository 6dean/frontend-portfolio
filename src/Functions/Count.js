import axios from "axios";

// ADD project or Update VIEWS
const Count = async (name, id) => {
  await axios.put(`http://localhost:3001/projects`, {
    id: id,
    project: name,
    visit: 1,
  });
};

export default Count;
