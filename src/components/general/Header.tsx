import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import Image from "next/image";

const sections: { label: string; href: string }[] = [
  { label: "INICIO", href: "/" },
  { label: "NOSOTROS", href: "/about-us" },
  { label: "SERVICIOS", href: "/services" },
  { label: "NOTICIAS", href: "/" },
  { label: "CONTACTO", href: "/contact" },
];

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center space-x-2">
          <Image
            src="assets/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="w-auto h-10"
            priority
          />
        </a>
        <NavbarDesktop sections={sections} />
        <NavbarMobile sections={sections} />
      </div>
    </header>
  );
};

export default Header;
