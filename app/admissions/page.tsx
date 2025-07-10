"use client";

import "./admission.css";

export default function AdmissionPage() {
  return (
    <main className="admission-page">
      <section className="admission-header">
        <h1>Admissions</h1>
        <p>
          Join MySchool and become part of a learning community that nurtures
          excellence, creativity, and character. Kindly fill the admission form
          below and our team will get back to you shortly.
        </p>
      </section>

      <section className="admission-form-section">
        <h2>Admission Form</h2>
        <form
          className="admission-form"
          action="https://formspree.io/f/mldnqndo"
          method="POST"
        >
          <div className="form-grid">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Home Address"
              required
            />
            <input
              type="text"
              name="class"
              placeholder="Class Applying For"
              required
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Additional Information (optional)"
          ></textarea>

          <button type="submit">Submit Application</button>
        </form>
      </section>
    </main>
  );
}
