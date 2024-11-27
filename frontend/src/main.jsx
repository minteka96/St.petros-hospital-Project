import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/css/style.css";
import "./assets/css/flaticon.css";
import "./style/customeCSS/custome.css";
import "./assets/css/icofont.css";
// import ImageUploader from './markup/components/ImageUploader.jsx'; 
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
