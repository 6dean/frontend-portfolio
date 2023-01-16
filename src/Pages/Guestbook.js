import axios from "axios";
import { useState, useEffect } from "react";

const Guestbook = () => {
  const [data, setData] = useState({});
  const [IsLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/comment");
    setData(response.data);
    data && setIsLoading(true);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="name_page">Guestbook</div>
      <div className="div_description">
        <div className="description">
          This portfolio is a fullstack project, there is a DB accepting
          comments, so why not write a little text to support me or asking me a
          question?
        </div>
      </div>
    </>
  );
};

export default Guestbook;
