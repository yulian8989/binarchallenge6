import axios from "axios";
import { setPostDetails, setPosts, setSearch } from "../reducers/postReducers";
import { toast } from "react-toastify";
import DetailMovie from "../../components/MovieDetail";

// Function to get all the posts
const token = localStorage.getItem("token");
export const getMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://shy-cloud-3319.fly.dev/api/v1/movie/popular`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setPosts(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
  
};

// Function to get the details of a post
export const getPostDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://shy-cloud-3319.fly.dev/api/v1/movie/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setPostDetails(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getMovieSearch = (movie) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://shy-cloud-3319.fly.dev/api/v1/search/movie?page=1&query=${movie}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setSearch(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};