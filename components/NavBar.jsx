"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname(); // replaces useLocation
  const isMobile = useIsMobile();

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Approval", path: "/service/map-approval" },
    { name: "Design", path: "/service/design" },
    { name: "Construction", path: "/service/construction" },
    { name: "Interior", path: "/service/interior" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    // { name: "City", path: "/city" },

    // { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="BhuviHomes Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
          <p className="text-2xl font-bold text-leaf">
            <span className="text-chlorophyll">Bhuvi</span> Homes
          </p>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "nav-link",
                    isActive(link.path) && "active font-medium"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button
                asChild
                variant="default"
                className="bg-red-500 hover:bg-red-600 text-primary-foreground"
                aria-label="Call BhuviHomes for expert home design and construction in Ranchi"
              >
                <Link href="tel:+918986699600" aria-label="Call BhuviHomes for expert home design and construction in Ranchi">
                  Call Now
                </Link>
              </Button>
            </div>
          </>
        )}

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobile && mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md py-4 animate-fade-in">
            <nav className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "nav-link text-lg",
                    isActive(link.path) && "active font-medium"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                variant="default"
                className="bg-red-500 text-primary-foreground"
                aria-label="Call BhuviHomes for expert home design and construction in Ranchi"
              >
                <Link href="tel:+918986699600" aria-label="Call BhuviHomes for expert home design and construction in Ranchi">
                  Call Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;