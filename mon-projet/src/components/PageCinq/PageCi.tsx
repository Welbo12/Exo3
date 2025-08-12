import React from "react";
import ie from "../../assets/ie.png";
import './../../style/index.css'

const Cinq: React.FC = () => {
  return (
    <div className="portfolio-section">
     
      <div className="portfolio-left">
        <h4 className="portfolio-tag">Portfolio</h4>
        <h1>
          My Creative Works <br />
          Latest <span>Projects</span>
        </h1>
        <p>
          I have selected and mentioned here some of my latest projects to share
          with you.
        </p>
        <button className="btn-show-more">Show More</button>
      </div>

     
 <div className="portfolio-right">
        <img src={ie} alt="Project 1" className="portfolio-img" />
        {/* <img src={ie} alt="Project 2" className="portfolio-img" />
        <img src={ie} alt="Project 3" className="portfolio-img" /> */}
      </div>
    </div>
  );
};

export default Cinq;
