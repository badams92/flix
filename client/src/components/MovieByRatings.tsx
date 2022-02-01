import axios from "axios";
import React, { useEffect } from "react";
import { useState, FC, SyntheticEvent } from "react";
import { Button } from "@material-ui/core";
import {Card, CardHeader, CardMedia, CardContent, Typography} from '@mui/material';

const MovieByRating:FC<any> = ({user}) => {

  const [movieData, setMovieData] = useState<any>([]);
  const [count, setCounter] = useState(0);


  // count < movieData.length ? movieData[count].thumbnailUrl : setCounter(0) && movieData[count].thumbnailUrl} 



  const watchCount = () => {
    // count < movieData.length && count > -1 ? setCounter(count) : setCounter(0);
    if (count > movieData.length - 1) {
      setCounter(0);
    } else if (count < 0) {
      setCounter(movieData.length - 1);
    }
  };

  const combinedFuncAdd = () => {
    if (count === movieData.length -1) {
      setCounter(0);
    } else {
      setCounter(count + 1);
    }
  };


  const combinedFuncSub = () => {
    if (count === 0) {
      setCounter(movieData.length - 1);
    } else {
      setCounter(count - 1);
    }
  };


  const getMovieData = (rating: string) => {
    axios.get(`api/movies/moviesByRating/${rating}`)
      .then(({data}: any) => {
        const filteredArray = data.filter(function(movie: any) {
          return movie.linkEmbed !== null;
        });
        setMovieData(filteredArray);
      })
      .catch(() => console.log('failed to get movies'));
  };

  const saveMovie = () => {
    if(user) {
      axios({
        method: 'post',
        url: '/api/users/user-movies',
        data: {
          movieId: movieData[count].imDbId,
          userId: user.id
        }
      });
    }
  };

  useEffect(() => {watchCount()}, [count]);

  const handleClick = (e: SyntheticEvent, rating: string) => {
    e.preventDefault();
    !!rating && getMovieData(rating);
  };

  return (
    <>
      <div
        style={{
          margin: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '30px'
        }}
      >
        <br></br>
        <Button variant="contained" id="outlined-basic" style={{background: 'white', color: 'black'}} value={'G'} onClick={(e) => handleClick(e, 'G')}>Find G rated movies</Button>
        <Button variant="contained" id="outlined-basic" style={{background: 'white', color: 'black'}} value={'PG'} onClick={(e) => handleClick(e, 'PG')}>Find PG rated movies</Button>
        <Button variant="contained" id="outlined-basic" style={{background: 'white', color: 'black'}} value={'PG-13'} onClick={(e) => handleClick(e, 'PG-13')}>Find PG-13 rated movies</Button>
        <Button variant="contained" id="outlined-basic" style={{background: 'white', color: 'black'}} value={'R'} onClick={(e) => handleClick(e, 'R')}>Find R rated movies</Button>
        {/* <Button variant="contained" id="outlined-basic" style={{background: 'white', color: 'black'}} value='NC-17' onClick={(e) => handleClick(e, 'NC-17')}>Find R rated movies</Button> */}
        <br></br>
      </div>
      {!! movieData.length && (
      <>
        <div
          style={{
            display: 'grid',
          }}
        >
          <Button variant="contained" id="outlined-basic" style={{background: 'white', color: 'black', height: 'fit-content'}} onClick={() => {combinedFuncSub()}}>Show Previous Movie</Button>
          <Card
            variant='outlined'
            sx={{ maxWidth: 345, margin: '30px' }}
          >
            <CardMedia
              component="img"
              height="194"
              src={movieData[count].thumbnailUrl}
              title="movie trailer"
            />
            <CardHeader
              title={movieData[count].title}
              subheader={movieData[count].year}
            />
            <CardContent>
              <Typography>
                {movieData[count].videoDescription}
              </Typography>
            </CardContent>
          </Card>
          <Button variant="contained" id="outlined-basic" style={{background: 'white', color: 'black', height: 'fit-content'}} onClick={() => {combinedFuncAdd()}}>Show Next Movie</Button>
        </div>
        <div>
          <Button type="submit" onClick={() => {saveMovie()}} variant="contained" id="outlined-basic" style={{background: 'white', color: 'black', height: 'fit-content'}}>Add movie to favorites</Button>
        </div>
      </>
    )}
  </>);
}

export default MovieByRating;