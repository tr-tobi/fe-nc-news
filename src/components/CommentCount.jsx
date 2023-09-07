import { createContext, useState } from "react";

export const CommentCountContext = createContext();

export const CommentProvider = ({ children }) => {
  const [commentCount, setCommentCount] = useState(0);
  return (
    <CommentCountContext.Provider value={{ commentCount, setCommentCount }}>
      {children}
    </CommentCountContext.Provider>
  );
};
