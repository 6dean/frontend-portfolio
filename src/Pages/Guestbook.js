import axios from "axios";
import { useState, useEffect } from "react";
import Commentary from "../Functions/Commentary";

const Guestbook = () => {
  const [data, setData] = useState([]);
  const [writing, setWriting] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [dataError, setDataError] = useState("");

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/allcomments");
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const Today = new Date().toLocaleDateString().slice(0, 2);
  const Month = new Date().toLocaleDateString("en-US", { month: "long" });
  const Year = new Date().toLocaleDateString().slice(6, 10);
  const Hour = new Date().toLocaleTimeString().slice(0, 5);
  const date = Today + " " + Month + " " + Year + " " + Hour;

  if (dataError === "True") {
    setTimeout(function () {
      window.location.reload(false);
    }, 800);
  }

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
                  setDataError("");
                  setUsername("");
                  setEmail("");
                  setComment("");
                }}
              >
                cancel
              </p>
            </div>
            <form id="commentForm">
              <div className="user_input_text">
                <div className="text__input_1">
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(elem) => setUsername(elem.target.value)}
                  />
                </div>
                <div className="text__input">
                  <input
                    type="email"
                    placeholder="email"
                    onChange={(elem) => setEmail(elem.target.value)}
                  />
                </div>
              </div>
              <div className="user_input_comment">
                <div className="comment_elem"></div>
                <input
                  className="box_comment"
                  type="text"
                  maxLength="160"
                  placeholder="I love your portfolio ! Great job :) "
                  onChange={(elem) => setComment(elem.target.value)}
                />
              </div>
            </form>
            <div className="limit_div">Max 160 characters</div>
            <div className="error">{dataError !== "True" && dataError}</div>
          </div>
          {dataError === "True" ? (
            <button className="button_done">✅ DONE</button>
          ) : (
            <button
              className="button_accept"
              onClick={() => {
                Commentary(username, email, comment, date, setDataError);
              }}
            >
              COMMENT
            </button>
          )}
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

      <div>
        {data.length > 0 &&
          data
            .sort(function (a, b) {
              return b.id - a.id;
            })
            .map((elem, i) => {
              return (
                <div key={i}>
                  <div>{elem.text}</div>
                  <div>
                    <div>{elem.name}</div>
                    {elem.date}
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Guestbook;
