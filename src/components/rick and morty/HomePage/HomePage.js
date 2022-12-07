import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../AppBar/AppBar";
import axios from "axios";
import { Box, Container, Grid } from "@mui/material";
import "../index.css";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  //   const [page, setPage] = useState(2);
  let page = 2;

  const card_call = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(function (response) {
        const data = response.data.results;
        console.log("Before :", characters);
        const new_data = characters.concat(data);
        console.log("new_data", new_data);
        setCharacters(new_data);
        console.log("After :", characters);
      })
      .catch(function (error) {
        console.error(error);
      });
    page++;
  };

  function handleScroll(e) {
    e.preventDefault();
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      card_call();
    }
  }

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`).then((res) => {
      setCharacters(res.data.results);
    });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <ResponsiveAppBar />
      <Grid
        container
        mt={1}
        maxWidth="xl"
        sx={{ margin: "auto" }}
        className="main_character_container"
      >
        {characters &&
          characters.map((character, Index) => {
            return (
              <Grid
                key={Index}
                item
                xs={12}
                md={5}
                m={2}
                className="character_container"
              >
                <img className="character_img" src={character.image}></img>
                <Container sx={{ display: "flex", flexDirection: "column" }}>
                  <span className="character_name">{character.name}</span>
                  <Box sx={{ display: "flex", alignItems: "center" }} mb={2}>
                    <Box
                      className={`status-circle ${
                        character.status === "Dead" ? "status-circle-dead" : ""
                      }
                      ${
                        character.status === "Alive"
                          ? "status-circle-alive"
                          : ""
                      }
                      ${
                        character.status === "unknown"
                          ? "status-circle-unknow"
                          : ""
                      }`}
                      mr={1}
                    ></Box>
                    <span className="character_status">
                      {character.status} - {character.species}
                    </span>
                  </Box>
                  <Container sx={{ marginBottom: "16px", paddingLeft: "0px" }}>
                    <Box className="location_title">Last known location:</Box>
                    <Box className="location_value">
                      {character.location.name}
                    </Box>
                  </Container>
                  <Container>
                    <Box className="seen_title">First seen in:</Box>
                    <Box className="seen_value">{character.location.name}</Box>
                  </Container>
                </Container>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default HomePage;
