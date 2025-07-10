'use client';

import { useEffect, useState, useRef } from 'react';
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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Handle swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) next();
    else if (distance < -50) prev();
  };

  return (
    <section className="home-section testimonials" id="testimonials">
      <h2>What Parents Say</h2>
      <div
        className="testimonial-card"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <p>“{testimonials[index].quote}”</p>
        <cite>{testimonials[index].author}</cite>
      </div>
    </section>
  );
}
