import axios from "axios";
import { useState, useEffect } from "react";
import Commentary from "../Functions/Commentary";

const Guestbook = () => {
  const [data, setData] = useState({});
  const [writing, setWriting] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/comment");
    setData(response.data);
    data && setIsLoading(true);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const date = new Date();

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

      {writing ? (
        <div className="comment_warn">
          <div>
            <div className="title_comment">
              <div>
                <p className="style_warn">Write a comment</p>
              </div>
              <p
                className="cancel"
                onClick={() => {
                  setWriting(false);
                }}
              >
                cancel
              </p>
            </div>
            <div className="user_input_text">
              <div className="text__input_1">
                <p className="style_inf_text">Username</p>{" "}
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(elem) => setUsername(elem.target.value)}
                />
              </div>
              <div className="text__input">
                <p className="style_inf_text">Email</p>
                <input
                  type="email"
                  placeholder="email"
                  onChange={(elem) => setEmail(elem.target.value)}
                />
              </div>
            </div>
            <div className="user_input_comment">
              <div className="comment_elem">
                <p className="style_inf_text">Comment</p>{" "}
              </div>
              <div>
                <input
                  className="box_comment"
                  type="text"
                  placeholder="I love your portfolio ! :) "
                  onChange={(elem) => setComment(elem.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            className="button_accept"
            onClick={() => {
              Commentary(username, email, comment, date);
            }}
          >
            COMMENT
          </button>
        </div>
      ) : (
        <div className="comment_warn">
          <div>
            <p className="style_warn">Want to write a comment ? </p>
            <p className="style_inf">
              Set an Username, a Gmail address and be funny ! 😁
            </p>
            <button
              className="button_accept"
              onClick={() => {
                setWriting(true);
                console.log(date);
              }}
            >
              LET'S GO !
            </button>
          </div>
          <div className="text_box">
            <p className="text_inf">
              Your informations will not be shared or used for commercial
              purposes.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Guestbook;
