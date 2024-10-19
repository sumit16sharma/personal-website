import React from "react";
import { FocusCards } from "./ui/focus-cards";

const RecentProjects = () => {
  const cards = [
    {
      title: "House Market Place",
      src: "/house_market_place.png",
      about: "Place to Sell and Rent homes",
      link: "https://house-market-place-five.vercel.app/",
      iconsLists: ["/re.svg", "/js.png"],
    },
    {
      title: "Recipe Recommendation System",
      src: "/recipe_recommendation.png",
      link: "https://github.com/sumit16sharma/recipe-recommendation-system",
      iconsLists: ["/re.svg", "/python.png"],
    },
    {
      title: "Github Finder",
      src: "/github-finder.png",
      link: "https://github.com/sumit16sharma/github-finder-app",
      iconsLists: ["/re.svg", "/js.png"],
    },
  ];

  return (
    <div id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-32">
        <FocusCards cards={cards} />
      </div>
    </div>
  );
};

export default RecentProjects;
