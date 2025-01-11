'use client';

import Link from 'next/link';
import '@/styles/globals.css';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white fixed top-4 w-full z-10 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">My Portfolio</div>
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="md:hidden">
          <button className="p-2">Menu</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
