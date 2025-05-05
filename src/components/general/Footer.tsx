"use client"
import Link from "next/link";
import { ILogo } from "../icons";
import { APP_LINKS } from '@/const'

const Footer = () => {
  const midpoint = Math.ceil(APP_LINKS.length / 2);
  const leftLinks = APP_LINKS.slice(0, midpoint);
  const rightLinks = APP_LINKS.slice(midpoint);

  return (
    <footer className="w-full bg-[#333333] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center mt-1">
        <div className="w-full  grid grid-cols-1 md:grid-cols-[auto_1px_auto_1px_auto] items-center justify-items-center">
          <nav className="flex flex-col items-center xl:pt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            {leftLinks.map(link => (
              <Link
                key={link.id}
                href={link.href}
                className="font-graphik font-medium  text-base hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="block md:hidden w-full">
            <hr className="border-t border-white/50 my-4" />
          </div>

          <div className="hidden md:block mt-8 h-8 border-l border-white/50 mx-6" />

          <div className="flex-shrink-0 xl:relative xl:top-4">
            <ILogo isotype/>
          </div>

          <div className="hidden md:block h-8 mt-8 border-l border-white/50 mx-6" />

          <div className="block md:hidden w-full">
            <hr className="border-t border-white/50 my-4" />
          </div>

          <nav className="flex flex-col items-center xl:pt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            {rightLinks.map(link => (
              <Link
                key={link.id}
                href={link.href}
                className="font-graphik font-medium text-base hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="text-center xl:flex-shrink-0 xl:relative xl:top-6 text-sm mt-6">
          Todos los derechos reservados © Corporativo Fiscal, 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
