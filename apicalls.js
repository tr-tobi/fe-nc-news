import axios from "axios";

const newsApp = axios.create({
  baseURL: "https://nc-news-g9x6.onrender.com/api",
});

export const getAllArticles = () => {
  return newsApp.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApp.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
