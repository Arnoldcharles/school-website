import HeroSlider from "./components/HeroSlider";

export default function HomePage() {
  return (
    <div>
      <HeroSlider />

      <section id="about" className="home-section about">
        <div className="about-inner">
          <div className="about-text">
            <h2>About MySchool</h2>
            <p>
              We are committed to nurturing lifelong learners with strong
              character, creativity, and a love for knowledge. Our school blends
              academic excellence with a vibrant community.
            </p>

            <div className="about-cards">
              <div className="about-card">
                <h3>🎯 Vision</h3>
                <p>
                  To be a leading educational institution recognized for
                  excellence and innovation.
                </p>
              </div>
              <div className="about-card">
                <h3>💡 Mission</h3>
                <p>
                  To empower students through quality education and character
                  development.
                </p>
              </div>
              <div className="about-card">
                <h3>❤️ Values</h3>
                <p>Integrity, Respect, Excellence, and Lifelong Learning.</p>
              </div>
            </div>
          </div>

          <div className="about-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7518898310183!2d3.377585014792577!3d6.524379825489655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5d360b6f18f%3A0x5f7162e5db423f9!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1720523063600!5m2!1sen!2sng"
              width="100%"
              height="350"
              style={{ border: 0 }}
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
          </div>
        </div>
      </section>

      <section id="events" className="home-section events">
        <div className="section-inner">
          <h2>Upcoming Events</h2>
          <div className="event-cards">
            <div className="event-card">
              <h3>📅 July 15</h3>
              <p>Orientation Day for New Students</p>
            </div>
            <div className="event-card">
              <h3>🎓 July 25</h3>
              <p>Midterm Parent-Teacher Meeting</p>
            </div>
            <div className="event-card">
              <h3>🏅 August 1</h3>
              <p>Inter-house Sports Competition</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
