import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import Paths from '../Routes';
import NavigationBar from './NavigationBar';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from './MovieDetail';
import axios from 'axios';
import Login from './Login';
// import PhotoHandler from './PhotoHandler';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Switch from '@mui/material/Switch';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import styles from '../styles/styles';


const App: FC = () => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [currentTheme, setCurrentTheme] = useState<boolean>(false);

  const [userPhoto, setUserPhoto] = useState<any>(currentUser?.profile_image_url);
  const [coverPhoto, setCoverPhoto] = useState<any>(currentUser?.profile_cover_photo_url);


  const theme = createTheme({
    palette: {
      type: currentTheme ? 'dark' : 'light',
    },
  })

  //image submission handler
  const handleProfilePhoto = (e: SyntheticEvent) => {
    e.preventDefault();
    const file = (e.target as HTMLInputElement).files![0];
    // setUserPhoto(URL.createObjectURL(file));
    const data = new FormData();
    data.append('image', file, file.name);
    axios.post('/api/photos/imgUpload', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(({ data }) => {
        axios.patch(`/api/users/${currentUser.id}`, { profile_image_url: data })
          .then(( data: any ) => {
            getLoggedInUser();
          })
      })
      .catch((err: any) => {
        console.error(err);
      });
  };



  const getLoggedInUser = () => {
    axios.get('/verify')
      .then(({ data }) => {
        setCurrentUser(data);
        setCurrentTheme(data.theme);
      })
      .catch((err) => {
        console.error('Unable to verify user', err);
      });
  };

  const setUserTheme = () => {
    axios.patch(`/api/users/${currentUser.id}`, { theme: !currentTheme })
      .then(() => {
        setCurrentTheme(!currentTheme);
      })
      .catch((err: any) => { console.error('Unable to update user theme') })
  }

  const handleTheme = () => {
    setUserTheme();
  }


  // currentUser.photos[0].value
  //this only needs to run once, will update when the user logs out and is redirected to login page.
  useEffect(() => {
    getLoggedInUser();
  }, []);


  return (
    <>
      {!currentUser
        ? <Login />
        : (<>
          <Login user={currentUser} />
          <ThemeProvider theme={theme}>
            <Paper style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(2px)' }}>
              <CssBaseline />
              <NavigationBar
                userImage={currentUser.profile_image_url}
                themeSwitch={<Switch checked={currentTheme} onChange={() => handleTheme()} />} />
              <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <Routes>
                  {Paths.map((route: any, index: number) => {
                    return <Route
                      path={route.path}
                      key={index}
                      element={<route.component
                        user={currentUser}
                        photo={userPhoto}
                        cover={currentUser.profile_cover_photo_url}
                        refreshUser={getLoggedInUser}
                        handlePhoto={handleProfilePhoto} />} />;
                  })}
                  <Route path='movies/:id' element={<MovieDetail children={currentUser}/>} />
                  <Route path="*" element={<h2>404: Not found</h2>} />
                </Routes>
              </div>
            </Paper>
          </ThemeProvider>
        </>
        )}
    </>
  );
};


export default App;
