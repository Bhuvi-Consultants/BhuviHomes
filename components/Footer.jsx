import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-offwhite text-foreground">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">
              <span className="text-chlorophyll">Bhuvi</span> Homes
            </h3>
            <p className="mb-4 text-muted-foreground">
              We design and build homes you'll love to live in. Your home is in
              safe hands with our team of experts.
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/bhuvi.homes"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow BhuviHomes on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/people/Bhuvi-Homes/61572994662720/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow BhuviHomes on Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook-icon lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="https://x.com/BhuviHomes"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow BhuviHomes on X (formerly Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter-icon lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/bhuvi-homes-02215a358/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow BhuviHomes on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin-icon lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link
                href="https://youtube.com/@bhuviconsultants"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow BhuviHomes on YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube-icon lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Quick Links</h3>

            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Go to BhuviHomes homepage"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Learn more about BhuviHomes"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Read BhuviHomes blogs about home design and construction in Jharkhand"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View BhuviHomes projects in Jharkhand"
                  >
                    Projects
                  </Link>
                </li>
              </ul>

              <ul className="space-y-2">
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Learn how BhuviHomes works"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View BhuviHomes FAQs"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Get a quote from BhuviHomes"
                  >
                    Get a Quote
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Get a quote from BhuviHomes"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Contact Us</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pinned-icon lucide-map-pinned"
                >
                  <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                  <circle cx="12" cy="8" r="2" />
                  <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                </svg>
                <span className="text-muted-foreground">
                  3rd floor, The Westend Tower
                  <br />
                  Ratu Road, Ranchi, Jharkhand 834001
                </span>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone-icon lucide-phone"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                <span className="text-muted-foreground">
                  +91-8986699600, +91-7019943376
                </span>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail-icon lucide-mail"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <span className="text-muted-foreground">
                  homes.bhuvi@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warm-200 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} BhuviHomes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
