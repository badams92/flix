import React, { FC, useState, useEffect, SyntheticEvent } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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

const MovieDetail: FC = (props: any) => {
  const userId = props.children.id;
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState<null | MovieObj>(null);
  //MUI Snackbar state
  const [open, setOpen] = useState<boolean>(false);

  const getMovie = (id: number) => {
    axios.get(`/api/movies/${id}`)
      .then(({ data }) => {
        setCurrentMovie(data);
      })
      .catch((err: any) => {
        console.error('error getting movie', err);
      });
  };

  const saveMovie = () => {
    axios.post('/api/users/user-movies', { movieId: id, userId: userId })
      .then(() => setOpen(true))
      .catch((err: any) => console.error('failure to save', err));
  };

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  //close action on snackbar
  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  useEffect(() => {
    getMovie(Number(id));
  }, []);

  if (!currentMovie) {
    return <Typography variant='h2'>Loading</Typography>;
  } else {
    const { movie_id, title, release_date, description, trailer_url } = currentMovie;
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
        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Saved to Favorites"
        // action={action}
      />
      </div>
    );
  }
};

export default MovieDetail;
