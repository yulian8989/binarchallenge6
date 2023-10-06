import React, { useEffect, useState } from "react";
import { Box, Card, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovie = () => {
    try {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=81060521cd1d76a749c7242fde26246b"
      )
        .then((res) => res.json())
        .then((json) => setMovies(json.results));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movies);
  
  
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original${movies[2]?.poster_path})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "450px",
          width: "100%",
        }}
      >
        <div //button atas dan logo
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <div style={{ padding: "10px" }}>
            <h1
              style={{ color: "#FF0000", fontSize: "60px", fontWeight: "bold" }}
            >
              MovieList
            </h1>
          </div>
          <div>
            <input
              style={{
                marginRight: "200px",
                border: "2px solid rgba(255, 0, 0, 0.5)",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "20px",
                outline: "none",
                width: "500px", 
                borderRadius: "20px", 
              }}
              type="search"
              id="gsearch"
              name="gsearch"
              placeholder="What do you want to watch?"
              onChange={(e) => setSearch(e.target.value)}
            />

            <Button
              color="error"
              variant="contained"
              sx={{ height: "50px", borderRadius: "30px" }}
            >
              Register
            </Button>
            <Button
              color="error"
              variant="outlined"
              sx={{ height: "50px", marginLeft: "10px", borderRadius: "30px" }}
            >
              Login
            </Button>
          </div>
        </div>
              
        <div style={{ padding: "20px" }}> 
          <h1 style={{ color: "#F1F1F1", fontSize: "40px",fontWeight:"bolder" }}>
            {movies[2]?.original_title}
          </h1>
          <h5 style={{ color: "#F1F1F1", fontWeight:"lighter"}}>{movies[2]?.overview}</h5>
          <Button
            variant="contained"
            sx={{
              color: "white",
              bgcolor: "red",
              fontWeight: "bold",
              borderRadius: "20px",
            }}
          >
            {" "}
            Watch Trailer
          </Button>
        </div>
      </div>
      <div style={{ paddingTop: "10px", paddingLeft:"10px" }}>
        <h1 style={{ color: "#000000", fontSize: "40px",  }}>
          Popular Movies
        </h1>
        <div style={{ paddingRight: "30px", textAlign: "right", }}>
          <h4
            style={{ color: "#FF0000", fontSize: "20px" }}
          >
            See All Movies
          </h4>
        </div>
      </div>
               
      <div>
        <Grid
          container
          spacing={2}
          style={{
            paddingTop: "20px",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          {movies
            .filter((movie) => {
              return search.toLowerCase() === ""
                ? movie
                : movie.title.toLowerCase().includes(search);
            })
            .map((movie) => {
              return (
                <Grid item xs={3}>
                  <Box>
                    <Link to={`/movieDetail/${movie.id}`}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="450"
                          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        ></CardMedia>
                      </Card>
                    </Link>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
}

export default Home;
