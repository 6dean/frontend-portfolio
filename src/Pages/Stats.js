import axios from "axios";
import React, { useState, useEffect } from "react";

const Stats = () => {
  const [data, setData] = useState({});
  const [data_, setData_] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("https://api.github.com/users/6dean");
    const response_ = await axios.get(
      "https://site--backend-portfolio--6qn7tv96v7tt.code.run/allprojects"
    );
    setData(response.data);
    setData_(response_.data);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="name_page">Statistics</div>
      <div className="div_description">
        <div className="description">
          I love to track numbers sometimes, it gives a good idea how fast i
          grow up. Some of those number come from GitHub API and my DB from
          MongoDB.
        </div>
      </div>
      <div className="listing_ab">
        <div className="card_ab">
          <div className="stat">Projects</div>
          <div className="count">{isLoading ? data_.length : "..."}</div>
        </div>
        <div className="card_ab">
          <div className="stat">Public Repositories</div>
          <div className="count">{isLoading ? data.public_repos : "..."}</div>
        </div>
        <div className="card_ab">
          <div className="stat">GitHub Followers</div>
          <div className="count">{isLoading ? data.followers : "..."}</div>
        </div>
        <div className="card_ab">
          <div className="stat">GitHub Following</div>
          <div className="count">{isLoading ? data.following : "..."}</div>
        </div>
      </div>
    </>
  );
};

export default Stats;
