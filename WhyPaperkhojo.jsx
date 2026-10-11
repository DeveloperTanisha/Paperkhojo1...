import React from "react";
import { useNavigate } from "react-router-dom";

const specialCards = [
  {
    icon: "✓",
    title: "Trusted Resources",
    description:
      "Find useful question papers and academic resources collected for students.",
    path: "/trusted-resources"
  },
  {
    icon: "◷",
    title: "Save Your Time",
    description:
      "Spend less time searching and more time preparing for your examinations.",
    path: "/save-time"
  },
  {
    icon: "◎",
    title: "Better Practice",
    description:
      "Practice with previous papers to understand question patterns and improve preparation.",
    path: "/better-practice"
  },
  {
    icon: "♙",
    title: "Made for Students",
    description:
      "A simple platform created to help students from different courses and colleges.",
    path: "/made-for-students"
  }
];

const WhyPaperkhojo = () => {

  // This is used to open another page
  const navigate = useNavigate();

  return (
    <section className="special-section">

      <div className="special-container">

        <div className="special-heading">

          <div className="special-dots">
            • • • •
          </div>

          <h2>
            What Makes Us <span>Special?</span>
          </h2>

          <div className="special-dots">
            • • • •
          </div>

        </div>

        <div className="special-grid">

          {specialCards.map((card, index) => (
            <div
              className="special-card"
              key={index}
              onClick={() => navigate(card.path)}
            >

              <div className="special-icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyPaperkhojo;