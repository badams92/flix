import React, { FC } from 'react';
import Paths from '../Routes';
import NavigationBar from './NavigationBar';
import { Routes, Route } from 'react-router-dom';

const App:FC = () => {

  return (
    <>
      <NavigationBar />
      <Routes>
        {Paths.map((route: any, index: number) => {
          return <Route
            path={route.path}
            key={index}
            element={<route.component />}
          />
        })}
        <Route path ="*" element={<h2>404: Not found</h2>}/>
      </Routes>
    </>
  );
};


export default App;
