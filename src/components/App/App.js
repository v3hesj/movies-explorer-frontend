import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import ErrNotFound from '../ErrNotFound/ErrNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { RequestError } from '../../utils/error';
import { RequestConfirm } from '../../utils/error';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();
  const [currentError, setCurrentError]= useState('');

  const localCurrentUser = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
  const [isLoggedIn, setIsLoggedIn] = useState(localCurrentUser);
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.setToken();
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
        .then(([user, elem]) => {
          setCurrentUser(user);
          setSavedMovies(elem.movie.filter((film) => film.owner === user._id));
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {})
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error(err);
        });
    } 
    else setIsLoggedIn(false);
  }, [navigate]);

  const handleLogin = (email, password) => {
    setIsLoading(true);
    setCurrentError('');
    mainApi
      .authorize(email, password)
      .then((res) => {
        setCurrentError(RequestConfirm.SUCCESS);
        localStorage.setItem('jwt', res.userToken);
        // console.log(localStorage.getItem('jwt'));
        setIsLoggedIn(true);
      })
      .catch((err) => {
        let message;
        switch (err.message) {
          case '401':
            message = RequestError.SIGNIN_ERR_401;
            break;
          case '500':
            message = RequestError.SERVER_ERR_500;
            break;
          default:
            message = RequestError.SIGNIN_DEFAULT;
        }
        setCurrentError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then(() => {
        setCurrentError(RequestConfirm.SUCCESS_REGISTER);
        handleLogin(email, password);
        setCurrentError('');
      })
      .catch((err) => {
        let message;
        switch (err.message) {
          case '409':
            message = RequestError.SIGNUP_ERR_409;
            break;
          case '500':
            message = RequestError.SERVER_ERR_500;
            break;
          default:
            message = RequestError.SIGNUP_DEFAULT;
        }
        setCurrentError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
 
  const handleSignout = () => {
    localStorage.removeItem('jwt');
    navigate('/');
    setIsLoggedIn(false);
    setIsLoading(false);
    setCurrentUser(null);
    localStorage.removeItem('jwt');
    localStorage.removeItem('localMovies');
    localStorage.removeItem('localKeyWord');
    localStorage.removeItem('checkboxIsShort');
  }

  return (
    <CurrentUserContext.Provider value={{ savedMovies, setSavedMovies, currentUser, setCurrentUser }}>
      <div className="app">
        <Routes>
            <Route 
              path='/signin'
              element={
                !isLoggedIn
                  ?
                    <Login
                      handleLogin={handleLogin}
                      isLoading={isLoading}
                    />
                  :
                    <Navigate to='/movies' />
              }
            />
            <Route 
              path='/signup'
              element={
                !isLoggedIn
                  ? 
                    <Register
                      handleRegister={handleRegister}
                      isLoading={isLoading}
                      currentError={currentError}
                    />
                  :
                    <Navigate to='/movies' />
              } 
            />
          <Route
            path='*'
            element={<ErrNotFound />}
          />

          <Route 
            path='/profile'
            element={
              <ProtectedRoute isLoading={isLoading}  isLoggedIn={isLoggedIn}>
                <Header
                 isLoggedIn = {isLoggedIn}
                />
                <Profile
                  handleSignout={handleSignout}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute isLoading={isLoading} isLoggedIn={isLoggedIn}>
                <Header
                  isLoggedIn = {isLoggedIn}
                />
                <SavedMovies />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute isLoading={isLoading} isLoggedIn={isLoggedIn}>
                <Header
                  isLoggedIn = {isLoggedIn}
                />
                <Movies />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            exact path='/'
            element={
              <>
                <Header
                  isLoggedIn = {isLoggedIn}
                />
                <Main />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
