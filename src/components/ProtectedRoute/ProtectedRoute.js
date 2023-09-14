import React from 'react';
import { Navigate } from "react-router-dom";
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ children, isLoading, isLoggedIn }) => {
  if (isLoading)
    return <Preloader />;
  return isLoggedIn ? children : <Navigate to='/' />
};

export default ProtectedRoute;