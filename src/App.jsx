// import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import { ToastContainer } from 'react-toastify';

import './App.css'
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const isAuth = JSON.parse(localStorage.getItem('auth'))
  return (
      <BrowserRouter>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
        <Routes>
          <Route path='/' element={isAuth ? <Navigate to='/home' /> : <Navigate to='/login' />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
