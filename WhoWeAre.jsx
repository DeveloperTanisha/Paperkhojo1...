import React from "react";

const WhoWeAre = () => {
  return (
    <section className="who-section">

      <div className="who-container">

        {/* Left Side */}
        <div className="who-content">

          <div className="section-heading">
            <h2>
              Who We <span>Are</span>
            </h2>

            <div className="heading-dots">
              • • • •
            </div>
          </div>

          <p className="who-description">
            Paperkhojo is a student-focused platform designed to make
            previous year question papers easier to find and use.
            From universities and colleges to different courses and
            subjects, we bring useful academic resources together
            in one convenient place.
          </p>

          {/* Mission */}
          <div className="info-box">

            <div className="info-icon mission-icon">
              ✓
            </div>

            <div className="info-text">
              <h3>Our Mission</h3>

              <p>
                To make exam preparation simpler by helping students
                quickly discover useful previous year papers and
                practice according to real examination patterns.
              </p>
            </div>

          </div>

          {/* Vision */}
          <div className="info-box">

            <div className="info-icon vision-icon">
              ◉
            </div>

            <div className="info-text">
              <h3>Our Vision</h3>

              <p>
                To become a trusted academic resource platform where
                students can confidently find papers and prepare
                better for their examinations.
              </p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="who-image">
          <img
            src="./src/assets/photo1.png"
            alt="Academic books"
          />
        </div>

      </div>

    </section>
  );
};

export default WhoWeAre;