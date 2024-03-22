import { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import Login from './Login/Login';
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

