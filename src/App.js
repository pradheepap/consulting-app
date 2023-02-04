import Home from './components/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import React, { createContext, useState } from 'react';
export const UserContext = createContext();


function App() {
  return (
    <Home/>
  )
}

export default App;
