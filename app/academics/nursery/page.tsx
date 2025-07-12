"use client";

import "./nursery.css";

export default function NurseryPage() {
  return (
    <main className="nursery-page">
      {/* Hero */}
      <section className="nursery-hero">
        <div className="hero-text">
          <h1>Welcome to Our Nursery</h1>
          <p>
            A fun, safe, and nurturing environment for your little ones to grow,
            explore, and thrive.
          </p>
        </div>
        <div className="hero-image">
          <img src="/nursery/hero.jpg" alt="Happy nursery kids" />
        </div>
      </section>

      {/* Program Description */}
      <section className="nursery-about">
        <h2>Our Nursery Program</h2>
        <p>
          Our nursery provides a child-centered curriculum that encourages
          exploration, creativity, and early learning. We focus on developing
          emotional, social, cognitive, and physical skills through play-based
          and interactive learning experiences.
        </p>
      </section>

      <div className="cta-button-wrapper">
        <a href="/academics/nursery/admission" className="cta-button">
          🎓Click to apply for Nursery Admission
        </a>
      </div>

      {/* Highlights */}
      <section className="nursery-highlights">
        <h2>What We Offer</h2>
        <div className="highlight-cards">
          <div className="highlight-card fade-in">
            <h3>🎨 Creative Play</h3>
            <p>
              Arts, crafts, music and imaginative play for expression and joy.
            </p>
          </div>
          <div className="highlight-card fade-in">
            <h3>📖 Early Literacy</h3>
            <p>
              Story time, letter sounds and language to build reading skills.
            </p>
          </div>
          <div className="highlight-card fade-in">
            <h3>🧩 Motor Skills</h3>
            <p>
              Fun activities to develop coordination and movement confidence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
