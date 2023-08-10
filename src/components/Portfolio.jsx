import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from "../Data/portfolio";

const Portfolio = () => {
  return (
    <div className="flex mx-auto px-2 flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolio.map((project) => {
          return (
            <PortfolioItem
              title={project.title}
              imgUrl={project.imgUrl}
              stack={project.stack}
              link={project.link}
              //   key={}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
