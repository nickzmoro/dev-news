import { useEffect, useState } from "react";
import { getArticles, getTags, getVideos } from "./services/getData";
import Home from "./components/home";
import LatestNews from "./components/latestNews";
import FilterPage from "./components/filterTagPage";
import ArticleVideos from "./components/articleVideos";
import Header from "./components/header";
import Footer from "./components/footer";

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

  return (
    <>
      <Header article={article} />
      <Home
        article={article}
        authors="+ 999 autores"
        title="Fique por dentro de todas novidades <dev/>"
      />
      <LatestNews article={article} />
      <FilterPage article={article} />
      <ArticleVideos video={video} />
      <Footer />
    </>
  );
}
export default App;
