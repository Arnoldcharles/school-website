"use client";

import { useEffect, useState, useRef } from "react";
import "./HeroSlider.css";

const slides = [
  {
    image: "/slides/1.jpg",
    message: "Welcome to MySchool – Where Learning Begins",
    button: { text: "Apply Now", link: "/admissions" },
  },
  {
    image: "/slides/2.jpg",
    message: "Empowering Students for the Future",
    button: { text: "Visit Gallery", link: "/gallery" },
  },
  {
    image: "/slides/3.jpg",
    message: "Excellence in Education & Character",
    button: { text: "Contact Us", link: "/contact" },
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchEndX.current - touchStartX.current > 50) prevSlide();
  };

  return (
    <div
      className="hero-slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h1>{slide.message}</h1>
            <a href={slide.button.link} className="slide-btn">
              {slide.button.text}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
