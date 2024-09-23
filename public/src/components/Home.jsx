import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./unifynd.css";
import searchMap from "./search.json";
import Map from "./MapComponent";
import MyColleges from "./MyColleges";
import NoteComponent from "./NoteComponent";
import { TextField, Box } from "@mui/material";
import australia_flag from "./images/australia_flag.webp";
import us_flag from "./images/us_flag.png";
import uk_flag from "./images/uk_flag.png";
import canada_flag from "./images/canada_flag.png";
import MetaTags from "./MetaTags"; 

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const Counter = React.memo(({ endValue, duration = 2000 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, endValue, { duration: duration / 1000 });

    return () => controls.stop();
  }, [count, endValue, duration]);

  return <motion.div>{rounded}</motion.div>;
});

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCountry, setselectedCountry] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState("note");
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const countries = [
    {
      id: "usa",
      title: "USA",
      flagUrl: us_flag,
      redirect: "/usa",
    },
    { id: "uk", title: "UK", flagUrl: uk_flag, redirect: "/uk" },
    {
      id: "australia",
      title: "Australia",
      flagUrl: australia_flag,
      redirect: "/australia",
    },
    {
      id: "canada",
      title: "Canada",
      flagUrl: canada_flag,
      redirect: "/canada",
    },
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      const matches = Object.keys(searchMap).filter((key) =>
        key.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matches.slice(0, 8));

      // Open the suggestions list with animation
      setIsOpen(matches.length > 0);
    } else {
      setSuggestions([]);
      setIsOpen(false); // Close the suggestions list with animation
    }
  };

  const handleRedirect = (id) => {
    // Set the selectedId state
    setSelectedId(id);

    // Find the country based on the provided id
    const selectedCountry = countries.find((c) => c.id === id);

    // Redirect to the URL specified in countries.redirect
    if (selectedCountry && selectedCountry.redirect) {
      navigate(selectedCountry.redirect);
    } else {
      console.error("No redirect URL found for selected country.");
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    setIsOpen(false); // Close the suggestions list with animation
    const collegeID = searchMap[suggestion];
    if (collegeID.substring(0, 2) === "US") {
      navigate(`/college-info/${encodeURIComponent(collegeID)}`);
    } else if (collegeID.substring(0, 2) === "UK") {
      console.log("UK");
      navigate(`/uk-college-info/${encodeURIComponent(collegeID)}`);
    } else {
      console.log("Error");
      // navigate(`/canada-college-info/${encodeURIComponent(collegeID)}`);
    }
  };

  const handleCardClick = (id) => {
    if (selectedId === id) {
      // Redirect on second click
      window.location.href = "./";
    } else {
      setSelectedId(id);
    }
  };

  const handleClose = () => {
    setSelectedId(null);
  };

  return (
    <>
      <MetaTags
        title="UNIFYND - Your Gateway to International College Search"
        description="Welcome to UNIFYND, your ultimate platform for searching and exploring top international colleges and countries. Find detailed information, apply for scholarships, and more."
        keywords="international colleges, college search, study abroad, top universities, scholarship opportunities, global education"
        url="https://unifynd.in/"
        image="https://unifynd.in/path/to/home-page-image.jpg" // Update with actual image URL
      />

      <div className="home-container mt-4">
        <div
          className="landingpage"
          style={{ display: "flex", flexDirection: "column", height: "70vh" }}
        >
          <div className="topic">
            Gateway to your International
            <br /> Educational Journey
          </div>
          <div
            className="searchbar"
            style={{ position: "relative", width: "70%", margin: "0 auto" }}
          >
            <Box sx={{ position: "relative", width: "70%", margin: "0 auto" }}>
              <TextField
                variant="outlined"
                id="outlined"
                label="Search Colleges"
                value={searchTerm}
                onChange={handleInputChange}
                InputLabelProps={{
                  sx: {
                    color: "white",
                  },
                }}
                sx={{
                  borderColor: "#B78FFA",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                    "& fieldset": {
                      borderColor: "white",
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#B78FFA",
                    },
                    "& input": {
                      paddingLeft: "20px",
                      color : "white"
                    },
                  },
                  width: "100%",
                  height: "5rem",
                  marginTop: "60px",
                  boxSizing: "border-box",
                  color: "white",
                }}
              />
            </Box>
            <motion.ul
              className="list-group mt-2 custom-scrollbar"
              style={{
                position: "absolute",
                top: "60%",
                left: "0",
                width: "100%",
                height: "auto",
                backgroundColor: "white",
                border: "1px solid #B78FFA",
                maxHeight: "200px",
                overflowY: "auto",
                zIndex: 20,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                pointerEvents: isOpen ? "auto" : "none",
              }}
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.2,
                  },
                },
              }}
            >
              {suggestions.map((suggestion, index) => (
                <motion.li
                  key={index}
                  className="list-group-item list-group-item-action"
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                    borderBottom: "1px solid #ddd",
                  }}
                  variants={itemVariants}
                >
                  {suggestion}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div
            style={{
              marginTop: "60px",
              backgroundColor: "transparent",
              padding: "10px 0",
              width: "100%",
              color: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "center", width: "30%" }}>
                <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                  <span
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <Counter endValue={1330} duration={1000} />
                    K+
                  </span>
                </div>
                <div style={{ fontSize: "20px" }}>Indian Students Abroad</div>
              </div>

              <div style={{ textAlign: "center", width: "27%" }}>
                <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                  <span
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <Counter endValue={35} duration={1000} />%
                  </span>
                </div>
                <div style={{ fontSize: "20px" }}>Emigration Rate Increase</div>
              </div>

              <div style={{ textAlign: "center", width: "27%" }}>
                <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                  <span
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <Counter endValue={7000} duration={1000} />+
                  </span>
                </div>
                <div style={{ fontSize: "20px" }}>Global Institutions</div>
              </div>
            </div>
          </div>
        </div>
        {/* Animation Cards for Countries */}
        <div className="country-cards-container">
          {countries.map((country) => (
            <motion.div
              key={country.id}
              layoutId={country.id}
              className="country-card"
              onClick={() => handleRedirect(country.id)} // Correctly pass country.id here
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.95 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.1,
                ease: "anticipate",
              }}
            >
              <img
                src={country.flagUrl}
                alt={`${country.title} flag`}
                className="card-image"
              />
              <div className="card-content">
                <motion.h5 className="card-subtitle">
                  {country.subtitle}
                </motion.h5>
                <motion.h2 className="card-title">{country.title}</motion.h2>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          className="window"
          style={{ marginBottom: "30px", height: "auto"}}
        >
          <nav className="tabs">
            <ul>
              <li
                className={selectedComponent === "note" ? "selected" : ""}
                onClick={() => setSelectedComponent("note")}
              >
                NoteComponent
                {selectedComponent === "note" && (
                  <motion.div className="underline" layoutId="underline" />
                )}
              </li>
              <li
                className={selectedComponent === "map" ? "selected" : ""}
                onClick={() => setSelectedComponent("map")}
              >
                Map
                {selectedComponent === "map" && (
                  <motion.div className="underline" layoutId="underline" />
                )}
              </li>
              <li
                className={selectedComponent === "mycolleges" ? "selected" : ""}
                onClick={() => setSelectedComponent("mycolleges")}
              >
                MyColleges
                {selectedComponent === "mycolleges" && (
                  <motion.div className="underline" layoutId="underline" />
                )}
              </li>
            </ul>
          </nav>

          <AnimatePresence mode="wait">
            {selectedComponent === "note" && (
              <motion.div
                key="note"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="main-content"
              >
                <NoteComponent />
              </motion.div>
            )}
            {selectedComponent === "map" && (
              <motion.div
                key="map"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="main-content"
              >
                <Map />
              </motion.div>
            )}
            {selectedComponent === "mycolleges" && (
              <motion.div
                key="mycolleges"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="main-content"
              >
                <MyColleges />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Home;
