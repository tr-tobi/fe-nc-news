import axios from "axios";

const newsApp = axios.create({
  baseURL: "https://nc-news-g9x6.onrender.com/api",
});

export const getAllArticles = (sort, order, topic) => {
  return newsApp
    .get(
      `/articles?sort_by=${sort ? sort : "created_at"}&order=${
        order ? order : "desc"
      }&topic=${topic ? topic : ""}`
    )
    .then(({ data }) => {
      return data.articles;
    });
};

export const getAllUsers = () => {
  return newsApp.get("/users").then(({ data }) => {
    const arrOfUsernames = [];
    for (const user of data.users) {
      arrOfUsernames.push(user.username);
    }
    return arrOfUsernames;
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

export const postCommentByArticleId = (article_id, body, user) => {
  const obj = {
    author: user,
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

export const deleteCommentById = (comment_id) => {
  return newsApp.delete(`/comments/${comment_id}`).then(({ data }) => {
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
