import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 80; // height of the header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
    setIsOpen(false);
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-navy shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" title="Manlyne Projects" onClick={handleLinkClick} className="flex items-center space-x-3">
              <img className="h-12 w-auto" src={LOGO_URL} alt="Manlyne Projects logo — cleaning & plumbing services" />
              <span className="hidden sm:inline font-serif font-bold text-xl text-white">
                Manlyne Projects
              </span>
            </a>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={handleLinkClick} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isScrolled ? 'text-white hover:bg-white/10' : 'text-white hover:text-brand-gold'}`}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
          
          <div className="hidden md:block">
             <a href="#contact" onClick={handleLinkClick} className="inline-block bg-brand-gold text-brand-navy font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                Request a Quote
             </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${isScrolled ? 'text-white' : 'text-white'}`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'max-h-96' : 'max-h-0'} md:hidden overflow-hidden transition-max-height duration-500 ease-in-out bg-brand-navy`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={handleLinkClick} className="mt-4 block w-full text-center bg-brand-gold text-brand-navy font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
             Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;