'use client';

import { useEffect, useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: 'My child has grown so much since joining this school. The teachers are outstanding!',
    author: '— Mrs. Adebayo',
  },
  {
    quote: 'A safe, clean, and caring environment where children thrive.',
    author: '— Mr. Chinedu',
  },
  {
    quote: 'Excellent facilities and an amazing academic record.',
    author: '— Mrs. Oladipo',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="home-section testimonials" id="testimonials">
      <h2>What Parents Say</h2>
      <div className="testimonial-card">
        <p>“{testimonials[index].quote}”</p>
        <cite>{testimonials[index].author}</cite>
      </div>
    </section>
  );
}
