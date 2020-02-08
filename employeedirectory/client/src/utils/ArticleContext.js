import React from "react";

const ArticleContext = React.createContext({
  title: "",
  description: "",
  url: ""
});

export default ArticleContext;
