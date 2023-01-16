import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import Count from "../Functions/Count";

const Projects = () => {
  const [data, setData] = useState({});
  const [IsLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/allprojects");
    setData(response.data);
    data && setIsLoading(true);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  return (
    <>
      <div className="name_page">Projects</div>
      <div className="div_description">
        <div className="description">
          I built several projects with different features for each, I love
          create Apps.
        </div>
      </div>
      <div className="listing_p_card">
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("RAWG", "00001");
              }}
            >
              <a
                href="https://rawg-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                RAWG.io{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">{IsLoading && data[0].visit} views</div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>Videogames API holding more than 830.000 references</div>
              <div className="p_features">
                Features : Responsive, Search, InfiniteScroll, Members
                features...
              </div>
              <div className="p_stack">
                Stack : NodeJS, ReactJS, MongoDB, GitHub, Netlify, NorthFlank
              </div>
            </div>
            <div
              onClick={() => {
                Count("RAWG", "00001");
              }}
            >
              <a
                href="https://rawg-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.14.35_lb68p4.png"
                  alt="rawg"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("Vinted", "00002");
              }}
            >
              <a
                href="https://vinted-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Vinted{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">{IsLoading && data[1].visit} views</div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>
                Marketplace for buying, selling & exchanging new or secondhand
                items
              </div>
              <div className="p_features">
                Features : Browsing, Offer creation, Buy, Login...
              </div>
              <div className="p_stack">
                Stack : NodeJS, ReactJS, MongoDB, Stripe, Forest Admin
              </div>
            </div>
            <div
              onClick={() => {
                Count("Vinted", "00002");
              }}
            >
              <a
                href="https://vinted-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.15.04_c565pe.png"
                  alt="vinted"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("Deliveroo", "00003");
              }}
            >
              <a
                href="https://deliveroo-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Deliveroo{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">{IsLoading && data[2].visit} views</div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>
                Marketplace for buying, selling & exchanging new or secondhand
                items
              </div>
              <div className="p_features">
                Features : Add items, remove items from basket, price update...
              </div>
              <div className="p_stack">Stack : NodeJS, ReactJS, Render</div>
            </div>
            <div
              onClick={() => {
                Count("Deliveroo", "00003");
              }}
            >
              <a
                href="https://deliveroo-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.16.10_lh8fsy.png"
                  alt="deliveroo"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("Marvel", "00004");
              }}
            >
              <a
                href="https://marvel-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Marvel{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">{IsLoading && data[3].visit} views</div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>
                Coding test interview on Marvel theme from a Tech Company
              </div>
              <div className="p_features">Features : Searching, Favorites</div>
              <div className="p_stack">
                Stack : NodeJS, ReactJS, Netlify, NorthFlank
              </div>
            </div>
            <div
              onClick={() => {
                Count("Marvel", "00004");
              }}
            >
              <a
                href="https://marvel-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.16.48_lah9hv.png"
                  alt="marvel"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("Tripadvisor", "00005");
              }}
            >
              <a
                href="https://tripadvisor-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                TripAdvisor{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">{IsLoading && data[4].visit} views</div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>Front-End replica of Kochi, Japan 🇯🇵</div>
              <div className="p_features">Features : Responsive, Carousel</div>
              <div className="p_stack">Stack : HTML, CSS, Netlify</div>
            </div>
            <div
              onClick={() => {
                Count("Tripadvisor", "00005");
              }}
            >
              <a
                href="https://tripadvisor-rockdean.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.17.13_bez0xd.png"
                  alt="tripadvisor"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("AirBnB", "00006");
              }}
            >
              <a
                href="https://tinyurl.com/airbnbEXPO"
                target="_blank"
                rel="noreferrer"
              >
                AirBnB Mobile{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">{IsLoading && data[5].visit} views</div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>
                Light App replica of the famous online service for lodging
              </div>
              <div className="p_features">
                Features : Sign in, Sign up, Browsing, Editing profile,
                Geolocation...
              </div>
              <div className="p_stack">
                Stack : React Native, Expo, Xcode, Android Studio
              </div>
            </div>
            <div
              onClick={() => {
                Count("AirBnb", "00006");
              }}
            >
              <a
                href="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673544644/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.29.59_niqixe.png"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673544644/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.29.59_niqixe.png"
                  alt="airbnb"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p_card">
          <div className="p_project">
            <div
              className="sub_project"
              onClick={() => {
                Count("Sixt", "00007");
              }}
            >
              <a
                href="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.17.37_ak5o35.png"
                target="_blank"
                rel="noreferrer"
              >
                Sixt{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </div>
            <div className="sub-view">{IsLoading && data[6].visit} views</div>
          </div>
          <div className="p_project">
            <div className="p_description">
              <div>
                Final project to obtain my certification (visible on demand)
              </div>
              <div className="p_features">
                Features : Set Rent offer, Customer details, Admin details
                Rentals...
              </div>
              <div className="p_stack">Stack : NodeJS, ReactJS, Postman</div>
            </div>
            <div
              onClick={() => {
                Count("Sixt", "00007");
              }}
            >
              <a
                href="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.17.37_ak5o35.png"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1673543925/my-content/Capture_d_e%CC%81cran_2023-01-12_a%CC%80_18.17.37_ak5o35.png"
                  alt="sixt"
                  width="120"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
