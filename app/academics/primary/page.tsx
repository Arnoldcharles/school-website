'use client';

import './primary.css';

export default function PrimaryPage() {
  return (
    <main className="primary-page">
      {/* Hero Section */}
      <section className="primary-hero">
        <div className="hero-text">
          <h1>Welcome to Our Primary School</h1>
          <p>
            Laying strong academic and moral foundations for future leaders through fun, structured, and values-based learning.
          </p>
        </div>
        <div className="hero-image">
          <img src="/primary/hero.jpg" alt="Primary students in class" />
        </div>
      </section>

      {/* Program Overview */}
      <section className="primary-about">
        <h2>About Our Primary Program</h2>
        <p>
          Our Primary School combines core academics with moral instruction, practical learning, and creativity. We aim to develop confident learners, strong communicators, and well-rounded young citizens.
        </p>
      </section>

      {/* Learning Highlights */}
      <section className="primary-highlights">
        <h2>Core Learning Areas</h2>
        <div className="highlight-cards">
          <div className="highlight-card fade-in">
            <h3>📖 Literacy & Numeracy</h3>
            <p>Building a strong base in reading, writing, and math using engaging activities.</p>
          </div>
          <div className="highlight-card fade-in">
            <h3>💡 STEM & Discovery</h3>
            <p>Hands-on science, tech, and exploration through themed projects.</p>
          </div>
          <div className="highlight-card fade-in">
            <h3>🎭 Art & Values</h3>
            <p>Creative expression, moral instruction, and character development.</p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <div className="cta-button-wrapper">
        <a href="/primary/admission" className="cta-button">
          Apply for Primary Admission
        </a>
      </div>
    </main>
  );
}
