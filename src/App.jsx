import { useEffect, useState } from "react";
import { getArticles, getTags } from "./services/getData";
import Home from "./components/home";
import LatestNews from "./components/latestNews";

function App() {
  const [article, setArticle] = useState([]);
  const [tags, setTags] = useState();

  useEffect(() => {
    Promise.all([getArticles(article), getTags(tags)])
      .then(([articleData, tagsData]) => {
        setArticle(articleData);
        setTags(tagsData);
        console.log(articleData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Home
        article={article}
        authors="+ 999 autores"
        title="Fique por dentro de todas novidades do mundo Dev!"
      />
      <LatestNews article={article} />
    </>
  );
}
export default App;
