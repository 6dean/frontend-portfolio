import axios from "axios";

// ADD project or Update VIEWS
const Count = async (name, id) => {
  await axios.put(
    `https://site--backend-portfolio--6qn7tv96v7tt.code.run/projects`,
    {
      id: id,
      project: name,
      visit: 1,
    }
  );
};

export default Count;
