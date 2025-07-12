"use client";

import "./nurseryForm.css";

export default function NurseryAdmissionForm() {
  return (
    <main className="nursery-form-page">
      <section className="nursery-form-header">
        <h1>Nursery Admission Form</h1>
        <p>
          Please complete the form below to apply for admission into our nursery
          program. We look forward to welcoming your child!
        </p>
      </section>

      <section className="nursery-form-section">
        <form
          action="https://formspree.io/f/mldnqndo"
          method="POST"
          className="nursery-form"
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
              name="address"
              placeholder="Home Address"
              required
            />
          </div>

          <textarea
            name="notes"
            placeholder="Does your child have any allergies, special needs, or preferences?"
          ></textarea>

          <button type="submit">Submit Application</button>
        </form>
      </section>
    </main>
  );
}
