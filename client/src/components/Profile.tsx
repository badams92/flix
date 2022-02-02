import React, { useState, FC, useEffect, SyntheticEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
//MUI
import {
  Avatar,
  Stack,
  Button,
  Typography,
  Card,
  CardContent,
  Tab,
  Tabs,
  CardMedia,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

import useStyles from "../styles/profile.styles";
import UserPreferences from './UserPreferences';
import MovieCards from './MovieCards';
import ActorCards from './ActorCards';
import GenreCards from './GenreCards';
import DirectorCards from './DirectorCards';
import { Grid, IconButton } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import { styled } from '@material-ui/styles';
import Tooltip from '@mui/material/Tooltip';



const Input = styled('input')({
  display: 'none',
});


const Profile: FC<any> = ({ user, handleProfilePhoto, handleCoverPhoto, refreshUser }) => {
  //User favorites {movies, actors, genres, directors}
  const [favoriteDirectors, setFavoriteDirectors] = useState<any>();
  const [favoriteGenres, setFavoriteGenres] = useState<any>();
  const [currentTab, setCurrentTab] = useState<string>('Favorite Movies');
  //photo states
  // const [userPhoto, setUserPhoto] = useState<any>(user.profile_image_url);


  const classes = useStyles();

  const tabInfo = [
    { title: 'Favorite Movies', icon: <FavoriteIcon /> },
    { title: 'Favorite Actors', icon: <SettingsAccessibilityIcon /> },
    // { title: 'Favorite Genres', icon: <TheaterComedyIcon /> },
    // { title: 'Favorite Directors', icon: <MovieCreationIcon /> },
    { title: 'Settings', icon: <SettingsApplicationsIcon /> },
  ];


  const getTabContent = () => {
    if (currentTab === 'Favorite Movies') {
      return <MovieCards userId={user.id} />
    }
    if (currentTab === 'Favorite Actors') {
      return <ActorCards userId={user.id} />
    }
    // if (currentTab === 'Favorite Genres') {
    //   return <GenreCards userId={user.id} />
    // }
    // if (currentTab === 'Favorite Directors') {
    //   return <DirectorCards userId={user.id} />
    // }
    if (currentTab === 'Settings') {
      return <UserPreferences userId={user.id} />
    }

    setCurrentTab('Favorite Movies');
    return <MovieCards userId={user.id} />
  };




  useEffect(() => {
    refreshUser();
  }, [])

  return (

    <div>
      {!user ? null :
        <>
          <Card className={classes.root}>
            <div style={{ height: '50vh' }}>
              <CardMedia className={classes.media} image={user.profile_cover_photo_url} title="Cover" />
              <div className={classes.media} style={{ maxHeight: '175px' }}>
                <div className={classes.main}>
                  <Avatar
                    title='profile-photo-container'
                    sx={{ width: 250, height: 250 }}
                    src={user.profile_image_url}
                    className={classes.profileImage} />
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />


            <Typography
              align={"center"}
              className={classes.main}
              variant="h4"
            >
              {user.username}
            </Typography>
            {!user.twitter_user_name ? null :
              <Typography className={classes.userName}
                align={"center"}
                variant="h6"
              >
                {`@${user.twitter_user_name}`}
              </Typography>}

            <CardContent className={classes.contentContainer}>

              <Tabs
                centered
                className={classes.main}
                value={currentTab}
              >
                {tabInfo.map(({ icon, title }) => (
                  <Tab key={title} value={title} onClick={() => setCurrentTab(title)} icon={icon} label={title} />
                ))}
              </Tabs>

              <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', paddingTop: '1rem' }}>
                {getTabContent()}
              </div>
            </CardContent>
          </Card>
        </>
      }
    </div>
  );
};

export default Profile;