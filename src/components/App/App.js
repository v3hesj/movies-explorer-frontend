import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

import ErrNotFound from '../ErrNotFound/ErrNotFound';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="app">
        <Routes>
            <Route 
              path='/signin'
              element={
                <Login
                  isValid = {false}
                />
              }
            />
            <Route 
              path='/signup'
              element={
                <Register
                  isValid = {true}
                />
              }
            />
          <Route
            path='*'
            element={<ErrNotFound />}
          />

          <Route 
            path='/profile'
            element={
              <>
                <Header
                 loggedIn = {true}
                />
                <Profile />
              </>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <>
                <Header
                  loggedIn = {true}
                />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route
            path='/movies'
            element={
              <>
                <Header
                  loggedIn = {true}
                />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            exact path='/'
            element={
              <>
                <Header
                  loggedIn={false}
                />
                <Main />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
