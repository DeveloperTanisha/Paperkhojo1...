import React from "react";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-container">

        {/* Left Content */}
        <div className="about-hero-content">

          <div className="hero-small-badge">
            <span className="badge-icon">▣</span>
            Your Preparation, Our Purpose
          </div>

          <h1>
            About <span>Us</span>
          </h1>

          <div className="hero-line"></div>

          <p>
            Helping students prepare smarter with easy access to
            previous year question papers and reliable study resources.
          </p>

        </div>

        {/* Right Image */}
        <div className="about-hero-image">
          <img
            src="./src/assets/book.png"
            alt="Books and study materials"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutHero;