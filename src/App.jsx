import { useEffect, useState } from "react";
import { getArticles, getTags, getVideos } from "./services/getData";
import Home from "./components/home";
import LatestNews from "./components/latestNews";
import FilterPage from "./components/filterTagPage";
import ArticleVideos from "./components/articleVideos";

function App() {
  const [article, setArticle] = useState([]);
  const [tags, setTags] = useState();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    Promise.all([getArticles(article), getTags(tags), getVideos(video)])
      .then(([articleData, tagsData, videoData]) => {
        setArticle(articleData);
        setTags(tagsData);
        setVideo(videoData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(video);

  return (
    <>
      <Home
        article={article}
        authors="+ 999 autores"
        title="Fique por dentro de todas novidades do mundo Dev!"
      />
      <LatestNews article={article} />
      <FilterPage article={article} />
      <ArticleVideos video={video} />
    </>
  );
}
export default App;
