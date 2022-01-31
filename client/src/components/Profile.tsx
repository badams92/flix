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

const Profile: FC<any> = ({ user, handlePhoto, photo, cover }) => {
  console.log('photo', photo)
  //User favorites {movies, actors, genres, directors}
  const [favoriteDirectors, setFavoriteDirectors] = useState<any>();
  const [favoriteGenres, setFavoriteGenres] = useState<any>();
  const [currentTab, setCurrentTab] = useState<string>('Favorite Movies');
  //photo states
  const [userPhoto, setUserPhoto] = useState<any>(photo);


  const classes = useStyles();

  const tabInfo = [
    { title: 'Favorite Movies', icon: <FavoriteIcon /> },
    { title: 'Favorite Actors', icon: <SettingsAccessibilityIcon /> },
    { title: 'Favorite Genres', icon: <TheaterComedyIcon /> },
    { title: 'Favorite Directors', icon: <MovieCreationIcon /> },
    { title: 'Settings', icon: <SettingsApplicationsIcon /> },
  ];


  const getTabContent = () => {
    if (currentTab === 'Favorite Movies') {
      return <MovieCards userId={user.id} />
    }
    if (currentTab === 'Favorite Actors') {
      return <ActorCards userId={user.id} />
    }
    if (currentTab === 'Favorite Genres') {
      return <GenreCards userId={user.id} />
    }
    if (currentTab === 'Favorite Directors') {
      return <DirectorCards userId={user.id} />
    }
    if (currentTab === 'Settings') {
      return <UserPreferences userId={user.id} />
    }

    setCurrentTab('Favorite Movies');
    return <MovieCards userId={user.id} />
  };

  // useEffect(() => {
  //   setUserPhoto(user.profile_image_url)
  // }, [])


  //put in functions for handling the photo changes here, then pass the click handler for those down to user prefs

  // const handleProfilePhoto = (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   const file = (e.target as HTMLInputElement).files![0];
  //   setUserPhoto(URL.createObjectURL(file));
  //   const data = new FormData();
  //   data.append('image', file, file.name);
  //   axios.post('/api/photos/imgUpload', data, {
  //     headers: { 'Content-Type': 'multipart/form-data' }
  //   })
  //     .then(({ data }) => {
  //       axios.patch(`/api/users/${user.id}`, { profile_image_url: data })
  //         .then(() => {
  //           setUserPhoto(data);
  //           console.log('updated profile photo')
  //         });
  //     })
  //     .catch((err: any) => {
  //       console.error(err);
  //     });
  // };

  useEffect(() => {
    // setUserPhoto(photo)
  }, [])

  return (

    <div>
      {!user ? null :
        <>
          <Card className={classes.root}>
            <div style={{ height: '50vh' }}>
              <CardMedia className={classes.media} image={user.profile_cover_photo_url} title="Cover" />
            </div>
            <div className={classes.main} style={{ maxHeight: '175px' }}>
              <Avatar sx={{ width: 250, height: 250 }}
                src={userPhoto} className={classes.profileImage} />
            </div>


            <h3>Upload a profile photo</h3>
            {!!photo && (
              <div>
                <img alt="not found" width={"250px"} src={photo} />
              </div>
            )}
            <form
              encType="multipart/form-data"
            >
              <input
                type="file"
                onChange={() => handlePhoto(photo)}
              />
            </form>


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