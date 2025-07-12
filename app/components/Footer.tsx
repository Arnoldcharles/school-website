import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer>
      <NewsletterForm />
      <p style={{ marginTop: "1rem" }}>
        &copy; {new Date().getFullYear()} MySchool. All rights reserved.
      </p>
    </footer>
  );
}
// This footer component includes a newsletter subscription form and copyright notice.
