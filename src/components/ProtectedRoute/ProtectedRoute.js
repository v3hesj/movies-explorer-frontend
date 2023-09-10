import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ children, isLoading, isLoggedIn }) => {
  if (isLoading)
    return <Preloader />;
  if (isLoggedIn === 0)
    return <Navigate to='/' />;
  return children;
};

export default ProtectedRoute;