"use client";

import "./secondaryAdmission.css";

export default function SecondaryAdmission() {
  return (
    <main className="secondary-admission-page">
      {/* Header */}
      <section className="form-header">
        <h1>Secondary School Admission</h1>
        <p>
          Begin your child’s journey into academic excellence. Kindly fill the
          form below to apply for our Secondary School.
        </p>
      </section>

      {/* Admission Form */}
      <section className="form-section">
        <form
          className="secondary-form"
          action="https://formspree.io/f/YOUR_FORMSPREE_ID"
          method="POST"
        >
          <div className="form-grid">
            <input
              type="text"
              name="student_name"
              placeholder="Student's Full Name"
              required
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              required
            />
            <input
              type="text"
              name="parent_name"
              placeholder="Parent/Guardian Full Name"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              name="previous_school"
              placeholder="Previous School Attended"
            />
          </div>
          <textarea
            name="notes"
            placeholder="Tell us anything important about the student (optional)"
          ></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>🎉 Student Success Stories</h2>
        <div className="success-grid">
          <div className="story-card">
            <h3>Jane O.</h3>
            <p>
              Scored 7 A1s in WAEC and now studying Engineering at Unilag. A
              proud alumna of our Secondary School.
            </p>
          </div>
          <div className="story-card">
            <h3>Michael A.</h3>
            <p>
              Represented Nigeria in Science Olympiad after topping NECO and
              excelling in leadership programs.
            </p>
          </div>
        </div>
      </section>

      {/* Exam Prep */}
      <section className="exam-prep">
        <h2>📘 WAEC / NECO Prep Program</h2>
        <ul>
          <li>📗 Dedicated prep classes and weekend tutorials</li>
          <li>📊 Mock tests and one-on-one mentoring</li>
          <li>🎯 Academic coaching and success tracker</li>
        </ul>
      </section>
    </main>
  );
}
