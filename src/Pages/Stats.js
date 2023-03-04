import axios from "axios";
import React, { useState, useEffect } from "react";

const Stats = ({ frenchMode }) => {
  const [data, setData] = useState({});
  const [data_, setData_] = useState({});
  const [data__, setData__] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("https://api.github.com/users/6dean");
    const response_ = await axios.get(
      "https://site--backend-portfolio--6qn7tv96v7tt.code.run/allprojects"
    );
    const response__ = await axios.get(
      "https://site--backend-portfolio--6qn7tv96v7tt.code.run/allcomments"
    );
    setData(response.data);
    setData_(response_.data);
    setData__(response__.data);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let VisitToal =
    isLoading &&
    data_.map((elem) => {
      return elem.visit;
    });

  let total = 0;
  for (let index = 0; index < VisitToal.length; index++) {
    total += VisitToal[index];
  }

  return (
    <div className="stat_style">
      <div className="name_page">
        {frenchMode ? <>Statistiques</> : <>Statistics</>}
      </div>
      <div className="div_description">
        <div className="description">
          {frenchMode ? (
            <>
              J'aime suivre mes chiffres parfois, cela donne une bonne idée de
              la vitesse à laquelle je grandi. Certains de ces chiffres
              proviennent de l'API GitHub et de ma base de données de MongoDB.
            </>
          ) : (
            <>
              I love to track numbers sometimes, it gives a good idea how fast i
              grow up. Some of those numbers come from GitHub API and my DB from
              MongoDB.
            </>
          )}
        </div>
      </div>
      <div className="listing_ab">
        <div className="card_ab">
          <div className="stat">
            {frenchMode ? <>Projets</> : <>Projects</>}
          </div>
          <div className="count">{isLoading ? data_.length : ""}</div>
        </div>
        <div className="card_ab">
          <div className="stat">
            {frenchMode ? <>Repo Public</> : <>Public Repositories</>}
          </div>
          <div className="count">{isLoading ? data.public_repos : ""}</div>
        </div>
        <div className="card_ab">
          <div className="stat">
            {frenchMode ? <>Abonnés GitHub</> : <>GitHub Followers</>}
          </div>
          <div className="count">{isLoading ? data.followers : ""}</div>
        </div>
        <div className="card_ab">
          <div className="stat">
            {frenchMode ? <>Abonnements GitHub</> : <>GitHub Following</>}
          </div>
          <div className="count">{isLoading ? data.following : ""}</div>
        </div>
        <div className="card_ab">
          <div className="stat">
            {frenchMode ? <>Vues Total</> : <>Total Views</>}
          </div>
          <div className="count">{isLoading ? total : ""}</div>
        </div>
        <div className="card_ab">
          <div className="stat">
            {frenchMode ? <>Commentaires Total</> : <>Total Comments</>}
          </div>
          <div className="count">{isLoading ? data__.length : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
