"use client";

import "./primaryForm.css";

export default function PrimaryAdmissionPage() {
  return (
    <main className="primary-form-page">
      {/* Header */}
      <section className="primary-form-header">
        <h1>Primary Admission Form</h1>
        <p>
          Kindly complete this form to apply for admission into our Primary
          School. We look forward to welcoming your child.
        </p>
      </section>

      {/* Form */}
      <section className="primary-form-section">
        <form
          action="https://formspree.io/f/mldnqndo"
          method="POST"
          className="primary-form"
        >
          <div className="form-grid">
            <input
              type="text"
              name="child_name"
              placeholder="Child's Full Name"
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
              placeholder="Parent/Guardian Name"
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
              name="address"
              placeholder="Home Address"
              required
            />
          </div>
          <textarea
            name="extra"
            placeholder="Any known allergies, learning needs, or notes (optional)"
          ></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </section>
    </main>
  );
}
