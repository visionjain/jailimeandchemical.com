'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Refs for active indicator positioning
  const navRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: '0px',
    width: '0px'
  });

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle active indicator position
  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(`a[href="${pathname}"]`);
      
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink as HTMLElement;
        setIndicatorStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [pathname, navRef]);

  return (
    <header className="fixed top-0 w-full flex justify-center z-50 px-4 pt-6">
      <nav 
        className={`rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 shadow-lg px-8 py-3' 
            : 'bg-black/20 shadow-md px-10 py-4 backdrop-blur-sm'
        } max-w-7xl mx-auto w-full`}
      >
        <div className="flex items-center justify-between">
          {/* Logo - Updated company name */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-xl font-bold ${scrolled ? 'text-orange-700' : 'text-white'}`}>
              <span className="font-serif">Manisha Lime Finish</span>
            </Link>
          </div>

          {/* Desktop menu - Now aligned to the right */}
          <div className="hidden md:block relative ml-auto mr-6">
            <div 
              ref={navRef}
              className="flex items-center space-x-6 justify-end relative"
            >
              {/* Active background indicator - cylindrical capsule */}
              <div
                className={`absolute h-10 rounded-full transition-all duration-300 ease-in-out ${
                  scrolled ? 'bg-orange-100' : 'bg-white/20'
                }`}
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  transform: 'translateY(-50%)',
                  top: '50%',
                  zIndex: 0
                }}
              ></div>
              
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`px-5 py-2 text-sm font-medium rounded-full transition relative z-10 ${
                    scrolled 
                      ? pathname === link.href
                        ? 'text-orange-700 font-semibold'
                        : 'text-orange-800 hover:text-orange-600' 
                      : pathname === link.href
                        ? 'text-white font-semibold'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Phone number */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+918529622695" 
              className={`flex items-center space-x-2 ${
                scrolled ? 'text-orange-700 hover:text-orange-800' : 'text-white hover:text-orange-100'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-medium">+91-8529622695</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-full focus:outline-none
                ${scrolled 
                  ? 'text-orange-800 hover:text-orange-600 hover:bg-orange-50' 
                  : 'text-white hover:text-white hover:bg-white/20'
                }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full mt-2 px-4">
          <div className="bg-white rounded-2xl shadow-lg py-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`block px-3 py-2 text-base font-medium rounded-lg ${
                    pathname === link.href
                      ? 'bg-orange-100 text-orange-700'
                      : 'text-orange-800 hover:bg-orange-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Add phone number to mobile menu */}
              <a 
                href="tel:+918529622695" 
                className="flex items-center px-3 py-2 text-base font-medium text-orange-800 hover:bg-orange-50 rounded-lg"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91-8529622695
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
