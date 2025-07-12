export default function TestimonialCard({
  name,
  message,
}: {
  name: string;
  message: string;
}) {
  return (
    <div className="testimonial">
      <p>“{message}”</p>
      <h4>— {name}</h4>
    </div>
  );
}
