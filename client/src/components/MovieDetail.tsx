import React, {FC, useState, useEffect} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

interface MovieObj {
  id: number;
  movie_id: string;
  title: string;
  release_date: string;
  description: string;
  trailer_url: string;
  thumbnailUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

const MovieDetail:FC = (props: any) => {
  const userId = props.children.id;
  const {id} = useParams();
  const [currentMovie, setCurrentMovie] = useState<null | MovieObj>(null);

  const getMovie = (id: number) => {
    axios.get(`/api/movies/${id}`)
      .then(({data}) => {
        setCurrentMovie(data);
      })
      .catch((err: any) => {
        console.error('error getting movie', err);
      });
  };

  const saveMovie = () => {
    axios.post('/api/users/user-movies', {movieId: id, userId: userId})
      .then()
      .catch((err: any) => console.error('failure to save', err));
  };

  useEffect(() => {
    getMovie(Number(id));
  }, []);

  if (!currentMovie) {
    return <Typography variant='h2'>Loading</Typography>;
  } else {
    const {movie_id, title, release_date, description, trailer_url} = currentMovie;
    return (
      <div
        className='movie-details'
        style={{
          color: 'white',
          margin: '30px',
          width: '1000px',
          display: 'grid',
          padding: '10px'
        }}
      >
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='h4'>{release_date}</Typography>
        <iframe width='1000' height='600' src={trailer_url} frameBorder='0'></iframe>
        <Typography variant='body1'>{description}</Typography>
        <Button variant='contained' onClick={saveMovie}>Save to favorites</Button>
      </div>
    );
  }
};

export default MovieDetail;
