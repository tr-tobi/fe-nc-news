import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticleList";
import { Route, Routes } from "react-router-dom";
import IndividualArticle from "./components/IndividualArticle";
import Topics from "./components/Topics";
import ArticlesByTopicList from "./components/ArticlesByTopicsList";

function App() {
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");

  return (
    <>
      <Header />
      <Navigation sort={sort} order={order} />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleList
              order={order}
              setSort={setSort}
              setOrder={setOrder}
              sort={sort}
            />
          }
        />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic" element={<ArticlesByTopicList />} />
      </Routes>
    </>
  );
}

export default App;
