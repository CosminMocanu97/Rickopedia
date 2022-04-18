import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CharacterDetails from './components/characterDetails';
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path=":id" element={<CharacterDetails/>} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
