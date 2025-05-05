'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import IFacebook from '../icons/IFacebook';

interface Section {
  label: string;
  href: string;
}

const NavbarMobile = ({ sections }: { sections: Section[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-700 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md mt-2 px-4 pt-4 pb-6 space-y-4 z-50">
          <div className="flex flex-col items-center space-y-4">
            {sections.map((section) => (
              <Link
                key={section.label}
                href={section.href}
                className="block text-gray-700 hover:text-amber-600 text-lg font-medium"
              >
                {section.label}
              </Link>
            ))}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center text-gray-700 hover:text-amber-600"
            >
              <IFacebook />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
