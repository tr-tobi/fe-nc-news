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
    const arrOfComments = data.comments;
    arrOfComments.sort(function (a, b) {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });

    return arrOfComments;
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

export const getTopics = () => {
  return newsApp.get("/topics").then(({ data }) => {
    const arrOfTopics = [];
    for (const topic of data.topics) {
      arrOfTopics.push(topic.slug);
    }
    return arrOfTopics;
  });
};

export const getArticleByTopic = (topic) => {
  return newsApp.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
};
