import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "../redux/actions/postAction";

function DetailMovie() {
  const dispatch = useDispatch();
  const {postDetails} = useSelector((state) => state.post)
  console.log(postDetails);
    
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPostDetails(id))
  }, [dispatch, id]);
 
  if (!postDetails) {
    return <div>LOADING...</div>;
  }
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w300${postDetails.poster_path}`}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{postDetails.title}</h5>
              <p class="card-text">{postDetails.overview}.</p>
              <p>Genre: {postDetails.genres?.map((genre) => genre.name).join(", ")}</p>
              <p>Score : {postDetails.vote_average}</p>
              <p class="card-text">
                <small>{postDetails.release_date}</small>
              </p>
              <Link to={`/`}>
                <button className="btn btn-danger">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailMovie;
