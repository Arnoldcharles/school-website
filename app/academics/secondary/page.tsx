'use client';

import './secondary.css';

export default function SecondaryPage() {
  return (
    <main className="secondary-page">
      {/* Hero Section */}
      <section className="secondary-hero">
        <div className="hero-text">
          <h1>Welcome to Our Secondary School</h1>
          <p>
            Building a strong academic and moral foundation to prepare students for global leadership and success.
          </p>
        </div>
        <div className="hero-image">
          <img src="/secondary/hero.jpg" alt="Secondary students" />
        </div>
      </section>

      {/* About Section */}
      <section className="secondary-about">
        <h2>About Our Program</h2>
        <p>
          Our Secondary School combines academic rigor with leadership, ethics, and life skills. Students are encouraged
          to think critically, collaborate, and contribute meaningfully to society while preparing for national and
          international examinations.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="secondary-highlights">
        <h2>Key Highlights</h2>
        <div className="highlight-cards">
          <div className="highlight-card fade-in">
            <h3>📚 Curriculum</h3>
            <p>Well-rounded WAEC/NECO-compliant academic program with international exposure.</p>
          </div>
          <div className="highlight-card fade-in">
            <h3>🔬 Facilities</h3>
            <p>Modern science labs, computer rooms, library, and digital classrooms.</p>
          </div>
          <div className="highlight-card fade-in">
            <h3>⚽ Co-Curricular</h3>
            <p>Clubs, sports, arts, and leadership training to build talents and character.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-button-wrapper">
        <a href="/academics/secondary/admission" className="cta-button">
          Apply for Secondary Admission
        </a>
      </div>
    </main>
  );
}
