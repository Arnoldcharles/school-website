'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/admissions">Admissions</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
