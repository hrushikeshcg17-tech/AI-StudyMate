import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
          AI StudyMate
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-sm text-gray-300 lg:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="#how" className="transition hover:text-white">
            How it Works
          </a>

          <a href="#tech" className="transition hover:text-white">
            Tech Stack
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white transition hover:scale-105 lg:block">
          Get Started
        </button>

        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 lg:hidden">

          <div className="flex flex-col gap-5">

            <a href="#features">Features</a>

            <a href="#how">How it Works</a>

            <a href="#tech">Tech Stack</a>

            <a href="#contact">Contact</a>

            <button className="mt-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-white">
              Get Started
            </button>

          </div>

        </div>
      )}
    </header>
  );
}