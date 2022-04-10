import React, { useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Paper, Box, Typography, ThemeProvider, createTheme } from '@mui/material';
import About from './components/about';
import Simulation from './components/simulation';
import Scenario from './components/scenario';
import Home from './components/home';
import { AppContainer } from './styles';
import Header from './components/header';


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <AppContainer>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/scenario" element={<Scenario />} />
            <Route path="/simulation" element={<Simulation />} />
          </Routes>
        </AppContainer>
      </Router>


    </ThemeProvider >
  );
}

export default App;
