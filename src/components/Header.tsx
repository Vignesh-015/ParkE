import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from './NavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
              ParkE Pro
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#architecture">Architecture</NavLink>
            <NavLink href="#benefits">Benefits</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#home" mobile>Home</NavLink>
            <NavLink href="#features" mobile>Features</NavLink>
            <NavLink href="#architecture" mobile>Architecture</NavLink>
            <NavLink href="#benefits" mobile>Benefits</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}