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

export const getCommentByArticleId = (article_id) => {
  return newsApp.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postCommentByArticleId = (article_id, body) => {
  const obj = {
    author: "cooljmessy",
    body: body,
  };
  return newsApp
    .post(`/articles/${article_id}/comments`, obj)
    .then(({ data }) => {
      return data;
    });
};

export const patchArticleVote = (value, article_id) => {
  const updatedArticle = { inc_votes: value };
  return newsApp
    .patch(`/articles/${article_id}`, updatedArticle)
    .then(({ data }) => {
      return data;
    });
};
