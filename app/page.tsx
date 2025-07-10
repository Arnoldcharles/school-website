import TestimonialCard from "./components/TestimonialCard";

export default function HomePage() {
  return (
    <div>
      <img
        src="/school.jpg"
        alt="School banner"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h1>Welcome to Your School</h1>
      <p>
        Your School is dedicated to academic excellence and character
        development. Our students are prepared to thrive in an ever-changing
        world.
      </p>
      <h2>🎓 What Parents Say</h2>
      <div className="testimonial-grid">
        <TestimonialCard
          name="Mrs. Okoro"
          message="The teachers are passionate and supportive!"
        />
        <TestimonialCard
          name="Mr. Bello"
          message="My child is thriving here academically and socially."
        />
      </div>
    </div>
  );
}
