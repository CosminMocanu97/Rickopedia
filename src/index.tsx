import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CharacterDetails from "./components/characterDetails";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
