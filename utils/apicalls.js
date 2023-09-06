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
    console.log(arrOfComments);
    console.log(new Date(arrOfComments[0].created_at).getTime());
    arrOfComments.sort(function (a, b) {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });

    console.log(arrOfComments);
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
