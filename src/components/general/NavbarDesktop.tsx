import React from 'react';
import Link from 'next/link';
import IFacebook from '../icons/IFacebook';
import { SOCIAL_MEDIA } from '@/const'

interface Section {
  label: string;
  href: string;
}

const NavbarDesktop = ({ sections }: { sections: Section[] }) => {
  return (
    <nav className="hidden md:flex items-center justify-center space-x-6">
      {sections.map((section, index) => (
        <React.Fragment key={section.label}>
          <Link
            href={section.href}
            className="text-gray-700 hover:text-amber-600 transition font-medium px-2"
          >
            {section.label}
          </Link>
          {index !== sections.length - 1 && (
            <div className="w-px h-5 bg-gray-300" />
          )}
        </React.Fragment>
      ))}

      <div className="w-px h-5 bg-gray-300" />

      <a
        href={SOCIAL_MEDIA.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-amber-600 px-2"
      >
        <IFacebook />
      </a>
    </nav>
  );
};

export default NavbarDesktop;
