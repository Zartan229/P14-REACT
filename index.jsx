import React from "react";
import ReactDOM from "react-dom/client";
import CreateEmployee from "./src/pages/CreateEmployee.jsx";
import PageEmployee from "./src/pages/PageEmployee.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./src/Utility/Store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee" element={<PageEmployee />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
