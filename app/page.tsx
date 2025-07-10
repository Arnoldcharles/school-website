import HeroSlider from './components/HeroSlider';

export default function HomePage() {
  return (
    <div>
      <HeroSlider />

      <section className="home-section about">
        <h2>About MySchool</h2>
        <p>
          We are committed to nurturing lifelong learners with strong character,
          creativity, and a love for knowledge. Our school blends academic
          excellence with a vibrant community.
        </p>
      </section>

      <section className="home-section events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>📅 July 15 – Orientation Day for New Students</li>
          <li>🎓 July 25 – Midterm Parent-Teacher Meeting</li>
          <li>🏅 August 1 – Inter-house Sports Competition</li>
        </ul>
      </section>

      <section className="home-section testimonials">
        <h2>What Parents Say</h2>
        <blockquote>
          “My child has grown so much since joining this school. The teachers are outstanding!”
        </blockquote>
        <cite>— Mrs. Adebayo</cite>
      </section>
    </div>
  );
}
