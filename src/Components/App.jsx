import { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import GlobalStyle from './GlobalStyle';
import Login from './Login/Login';
export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>

        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

