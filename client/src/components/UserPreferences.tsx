import axios from 'axios';
import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import Button from '@mui/material/Button';
import { Grid, IconButton, Tooltip } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import useStyles from "../styles/profile.styles";
import { PhotoCamera } from '@material-ui/icons';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


const Input = styled('input')({
  display: 'none',
});

const UserPreferences: FC<any> = ({ userId }: { userId: number }, { handleProfilePhoto, handleCoverPhoto, refreshUser }) => {

  const [currentUser, setCurrentUser] = useState<any>(userId);
  const [age, setAge] = useState<number>();
  const [userPhoto, setUserPhoto] = useState<any>();
  const [coverPhoto, setCoverPhoto] = useState<any>();

  const classes = useStyles();

  const handleAgeChange = (e: SyntheticEvent) => {
    e.preventDefault;
    axios.patch('/api/users/:id', { 'age': age })
      .then(() => { console.log('Successfully set user age'); })
      .catch((err: any) => { console.log('Unable to update age.') });
  };

  const handleProfilePhotoChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const file = (e.target as HTMLInputElement).files![0];
    setUserPhoto(URL.createObjectURL(file));
    const data = new FormData();
    data.append('image', file, file.name);
    axios.post('/api/photos/imgUpload', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(({ data }) => {
        setUserPhoto(data);
        axios.patch(`/api/users/${currentUser.id}`, { profile_image_url: data })
          .then(() => {
            console.log('updated profile photo')
          });
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const getLoggedInUser = () => {
    axios.get('/verify')
      .then(({ data }) => setCurrentUser(data))
      .catch((err) => console.error('Unable to verify user', err));
  };
  useEffect(() => {
    getLoggedInUser();
  }, [currentUser?.profile_image_url]);

  const handleCoverPhotoChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const file = (e.target as HTMLInputElement).files![0];
    //set photo as temp url so can be set as cover photo before axios update occurs
    setCoverPhoto(URL.createObjectURL(file));
    //create FormData object to be sent back
    const data = new FormData();
    data.append('image', file, file.name);
    //set image to user cover photo entry
    axios.post('/api/photos/imgUpload', data, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(({ data }) => {
        // setCoverPhoto(data.profile_cover_photo_url);
        console.log('imageurl', data.profile_cover_photo_url)
        //patch user with new url
        axios.patch(`/api/users/${currentUser.id}`, { profile_cover_photo_url: data })
          .then(() => {
            // axios.get(`/api/users/${currentUser.id}`)
            console.log('updated cover photo')
          });
      })
      .catch((err: any) => {
        console.log('error POSTing file');
        console.error(err);
      })

  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const handleProfileRemove = (e: SyntheticEvent) => {
    e.preventDefault();
    setUserPhoto('');
  };

  const handleCoverRemove = (e: SyntheticEvent) => {
    e.preventDefault();
    setUserPhoto('');
  };

  const handleRemoveAge = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('age', currentUser.age);
    // setAge();
  }
  /*
  first axios post the picture, then the returning data is to be an axios patch request to the user
  */


  return (
    <Grid
      container
      spacing={3}
      justifyContent='center'
      alignItems='center'
      direction='row'
      style={{ marginTop: '0.5rem' }}
    >
      <Grid item className={classes.main}>
        <label htmlFor="icon-button-file">
          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={handleProfilePhoto} />
          <Tooltip title='Upload a new profile photo' placement='bottom' arrow>
            <Button
              color="primary"
              aria-label="upload picture"
              variant='contained'
              component="span"
              startIcon={<PhotoCamera />}
            >
              Edit Profile Photo
            </Button>
          </Tooltip>
        </label>
      </Grid>
      <Grid item>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple type="file"
            onChange={handleCoverPhoto} />
          <Tooltip title='Upload a new cover photo' placement='bottom' arrow>
            <Button variant="contained" component="span" startIcon={<AddPhotoAlternateIcon />}>
              Edit cover photo
            </Button>
          </Tooltip>
        </label>
      </Grid>
    </Grid>
  );

};


export default UserPreferences;
