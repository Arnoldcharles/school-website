import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/globals.css";
import PageWrapper from "./components/PageWrapper";

export const metadata = {
  title: "Charter School Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <PageWrapper>{children}</PageWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
