import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/User.jsx";
import { CommentProvider } from "./components/CommentCount.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <CommentProvider>
          <App />
        </CommentProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);
