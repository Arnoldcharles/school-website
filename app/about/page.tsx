"use client";

import "./about.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="intro">
        <h1>About MySchool</h1>
        <p>
          At MySchool, we are passionate about delivering world-class education
          in a nurturing environment. Our commitment to excellence in academics,
          leadership, and community makes us one of the most respected schools
          in the region.
        </p>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Foundation</h2>
        <div className="cards">
          <div className="card fade-in">
            <h3>🎯 Vision</h3>
            <p>
              To be a leading educational institution recognized for innovation
              and global excellence.
            </p>
          </div>
          <div className="card fade-in">
            <h3>💡 Mission</h3>
            <p>
              To empower students through holistic education and moral
              leadership.
            </p>
          </div>
          <div className="card fade-in">
            <h3>❤️ Values</h3>
            <p>
              Excellence, Integrity, Respect, Responsibility, and Lifelong
              Learning.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="principal">
        <div className="principal-image">
          <img src="/staff/principal.jpg" alt="School Principal" />
        </div>
        <div className="principal-text">
          <h2>Welcome from the Principal</h2>
          <p>
            Welcome to MySchool! We believe every child deserves the opportunity
            to thrive and grow in a safe, loving, and intellectually stimulating
            environment. We are proud of our passionate teachers, supportive
            families, and outstanding students.
          </p>
          <p>— Mr. Adewale Johnson, Principal</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="/staff/teacher1.jpg" alt="Mrs. Amina" />
            <h4>Mrs. Amina Yusuf</h4>
            <p>Head of Science</p>
          </div>
          <div className="member">
            <img src="/staff/teacher2.jpg" alt="Mr. Emeka" />
            <h4>Mr. Emeka Obi</h4>
            <p>Mathematics Coordinator</p>
          </div>
          <div className="member">
            <img src="/staff/teacher3.jpg" alt="Mrs. Chioma" />
            <h4>Mrs. Chioma Okeke</h4>
            <p>Language Arts</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <h2>School Photo Gallery</h2>
        <div className="gallery-grid">
          <img src="/gallery/1.jpg" alt="Classroom" />
          <img src="/gallery/2.jpg" alt="Science Lab" />
          <img src="/gallery/3.jpg" alt="Sports Field" />
          <img src="/gallery/4.jpg" alt="Library" />
          <img src="/gallery/5.jpg" alt="Computer Room" />
          <img src="/gallery/6.jpg" alt="Art Studio" />
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <h2>Visit Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0468148673795!2d3.3898447!3d6.515759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d24c04d3e75%3A0x7347f1a6be13e004!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1752179495400!5m2!1sen!2sng"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=University+of+Lagos"
          target="_blank"
          rel="noopener noreferrer"
          className="directions-btn"
        >
          🧭 Get Directions
        </a>
      </section>
    </main>
  );
}
