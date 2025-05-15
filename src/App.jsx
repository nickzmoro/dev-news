import { useEffect, useState } from "react";
import { getArticles, getTags } from "./services/getData";

function App() {
  const [article, setArticle] = useState();
  const [tags, setTags] = useState();

  useEffect(() => {
    Promise.all([getArticles(article), getTags(tags)])
      .then(([article, tags]) => {
        setArticle(article);
        setTags(tags);
        console.log(article);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Artigo mais popular</h1>
    </>
  );
}
export default App;
