import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const HeaderResponsive = ({
  darkMode,
  setDarkMode,
  displayMenu,
  setDisplayMenu,
}) => {
  const navigate = useNavigate();

  return (
    <div className="HeaderResponsive">
      <header>
        {!displayMenu ? (
          <Link to="/navigation">
            <div
              className="faBars"
              onClick={() => {
                setDisplayMenu(true);
              }}
            >
              <FontAwesomeIcon icon={faBars} size="2x" />
            </div>
          </Link>
        ) : (
          <div
            className="faBars"
            onClick={() => {
              setDisplayMenu(false);
              navigate(-1);
            }}
          >
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </div>
        )}
        <div
          className={darkMode ? "h_mode_light" : "h_mode"}
          onClick={() => {
            darkMode ? setDarkMode(false) : setDarkMode(true);
          }}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faMoon} size="lg" />
          )}
        </div>
      </header>
    </div>
  );
};
export default HeaderResponsive;
