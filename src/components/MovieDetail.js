import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

const keyapi = '81060521cd1d76a749c7242fde26246b';

function DetailMovie() {
  const { id } = useParams();
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchFilmDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${keyapi}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFilm(data);
        setGenres(data.genres);
      } catch (error) {
        console.error('Error fetching film detail:', error);
      }
    };

    fetchFilmDetail();
  }, [id]);

  if (!film) {
    return <div>LOADING...</div>;
  }
  console.log(film)
  return (
    <>
    <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{film.title}</h5>
        <p class="card-text">{film.overview}.</p>
        <p>
        Genre: {genres.map((genre) => genre.name).join(', ')}
      </p>
      <p>Score : {film.vote_average}</p>
        <p class="card-text"><small >{film.release_date}</small></p>
        <Link to={`/`}><button className='btn btn-danger'>Back to Home</button></Link>
      </div>
    </div>
  </div>
</div>
          </>
  );
}

export default DetailMovie;