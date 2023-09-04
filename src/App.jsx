import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticleList";
import { Route, Routes } from "react-router-dom";
import IndividualArticle from "./components/IndividualArticle";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
      </Routes>
    </>
  );
}

export default App;
