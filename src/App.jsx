import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticleList";
import { Route, Routes, useParams } from "react-router-dom";
import IndividualArticle from "./components/IndividualArticle";
import Topics from "./components/Topics";
import NotFoundPage from "./components/NotFoundPage";
function App() {
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [topics, setTopics] = useState([]);

  return (
    <>
      <Header />
      <Navigation />

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
        <Route
          path="/topics"
          element={<Topics topics={topics} setTopics={setTopics} />}
        />
        <Route
          path="/topics/:topic"
          element={
            <ArticleList
              order={order}
              setSort={setSort}
              setOrder={setOrder}
              sort={sort}
              topics={topics}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
