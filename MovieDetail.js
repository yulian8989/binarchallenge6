import { Grid } from "@mui/material"
import React from "react"
import { useLocation} from 'react-router-dom'

function MovieDetail(){

    const location = useLocation()
    return (
        <Grid container spacing={2}>
        <div>
            <Grid item xs={8}>  
            <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${location.state.movie?.poster_path})`,
            height:"100vh",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
             }}>
                <Grid>
                <h1 style={{ color:"white" }}>{location.state.movie?.original_title}</h1>
                </Grid>
                    
                <Grid>
                <h5 style={{ color:"white" }}>{location.state.movie?.genre}</h5>
                </Grid>

                <Grid>
                <h5 style={{ color:"white" }}>{location.state.movie?.overview}</h5>
                </Grid>

                <Grid>
                <h5 style={{ color:"white" }}>{location.state.movie?.rating}</h5>
                </Grid>
                
            </div>
            </Grid>

            <Grid item xs={4}>
            <div>
                <div>
                    Add Review
                </div>
                <div>
                    Show Review
                </div>
            </div>
            </Grid>
        </div>
        </Grid>
    )
}

export default MovieDetail