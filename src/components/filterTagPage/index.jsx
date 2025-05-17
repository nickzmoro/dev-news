import { useState } from "react";
import FilterPosterContainer from "../filterPosterContainer";

const FilterPage = ({ article }) => {
  const [filterArticlesByTag, setFilterArticlesByTag] = useState();
  const [showAllArticles, setShowAllArticles] = useState(true);
  const [activeTag, setActiveTag] = useState(null);

  const filteredArticles = (tag) => {
    setFilterArticlesByTag(article.filter((item) => item.tags.includes(tag)));
    setActiveTag(tag);
    setShowAllArticles(false);

    return filterArticlesByTag;
  };

  console.log(article);

  return (
    <section className="w-screen min-h-screen flex items-start justify-center">
      <div className="w-[80%] h-auto flex flex-col items-start justify-start">
        <div className="flex gap-5 mb-10">
          <button
            className={`text-[#ffffffe3] cursor-pointer p-1 ${
              showAllArticles &&
              "text-[#fff] font-[600] border-b-2 border-b-[#fff]"
            }`}
            onClick={() => {
              setShowAllArticles(true);
              setActiveTag(null);
            }}
          >
            Tudo
          </button>
          <button
            className={`text-[#ffffffe3] cursor-pointer p-1 ${
              activeTag === "react" &&
              "text-[#fff] font-[600] border-b-2 border-b-[#fff]"
            }`}
            onClick={() => filteredArticles("react")}
          >
            React
          </button>
          <button
            className={`text-[#ffffffe3] cursor-pointer p-1 ${
              activeTag === "javascript" &&
              "text-[#fff] font-[600] border-b-2 border-b-[#fff]"
            }`}
            onClick={() => filteredArticles("javascript")}
          >
            JavaScript
          </button>
          <button
            className={`text-[#ffffffe3] cursor-pointer p-1 ${
              activeTag === "webdev" &&
              "text-[#fff] font-[600] border-b-2 border-b-[#fff]"
            }`}
            onClick={() => filteredArticles("webdev")}
          >
            Web Dev
          </button>
          <button
            className={`text-[#ffffffe3] cursor-pointer p-1 ${
              activeTag === "ai" &&
              "text-[#fff] font-[600] border-b-2 border-b-[#fff]"
            }`}
            onClick={() => filteredArticles("ai")}
          >
            IA
          </button>
          <button
            className={`text-[#ffffffe3] cursor-pointer p-1 ${
              activeTag === "programming" &&
              "text-[#fff] font-[600] border-b-2 border-b-[#fff]"
            }`}
            onClick={() => filteredArticles("programming")}
          >
            Programação
          </button>
          <button
            className={`text-[#ffffffe3] cursor-pointer p-1 ${
              activeTag === "python" &&
              "text-[#fff] font-[600] border-b-2 border-b-[#fff]"
            }`}
            onClick={() => filteredArticles("python")}
          >
            Python
          </button>
        </div>
        <div className="text-[#fff]">
          {showAllArticles
            ? article
                .slice(0, 12)
                ?.map((item) => <FilterPosterContainer item={item} />)
            : filterArticlesByTag?.map((item) => (
                <FilterPosterContainer item={item} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
