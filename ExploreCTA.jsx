import React from "react";

const ExploreCTA = () => {
  return (
    <section className="explore-cta">

      <div className="cta-content">

        <div className="cta-image">
          <img
            src="./src/assets/photo paperkhojo.jpeg"
            alt="Paperkhojo study resources"
          />
        </div>

        <div className="cta-text">

          <h2>
            Apna previous year paper <span>khojo</span>
          </h2>

          <p>
            Smart preparation ki pehli step yahi se shuru hoti hai.
          </p>

          <button className="cta-button">
            Start Exploring
            <span>→</span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default ExploreCTA;