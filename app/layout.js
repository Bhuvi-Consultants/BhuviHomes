import "./globals.css";
import Script from "next/script";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import AddContact from "@/components/AddContact";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bhuvihomes.in";

const isProduction = siteUrl === "https://bhuvihomes.in";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Home Design & Construction in Ranchi | BhuviHomes",
    template: "%s | BhuviHomes",
  },

  description:
    "BhuviHomes offers expert home design and construction services in Ranchi.",

  keywords: [
    "homes",
    "bhuvi homes",
    "construction",
    "design",
    "ranchi",
  ],

  authors: [{ name: "Shubham Kumar" }],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: isProduction,
    follow: isProduction,
    nocache: !isProduction,
  },

  openGraph: {
    title: "Home Design & Construction | BhuviHomes",
    description:
      "Premium home design & construction services in Ranchi.",
    url: siteUrl,
    siteName: "BhuviHomes",
    images: [
      {
        url: "/CoverPhoto.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Design & Construction | BhuviHomes",
    description:
      "Home design & construction services in Ranchi.",
    images: ["/CoverPhoto.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/android-chrome-192x192.png",
  },



};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google Tag Manager */}

        {/* Google Analytics */}

        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "BhuviHomes",
            url: "https://bhuvihomes.in",

            address: {
              "@type": "PostalAddress",
              streetAddress:
                "3rd Floor, The Western Tower, Ratu Road",
              addressLocality: "Ranchi",
              addressRegion: "Jharkhand",
              postalCode: "834001",
              addressCountry: "IN",
            },

            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-89866-99600",
              contactType: "Customer Service",
              email: "homes.bhuvi@gmail.com",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },

            sameAs: [
              "https://www.instagram.com/bhuvi.homes/",
            ],
          })}
        </Script>

        {/* GTM Noscript */}

        <div className="flex flex-col min-h-screen overflow-hidden">
          <NavBar />

          <main className="flex-grow overflow-x-hidden overflow-y-auto bg-offwhite">
            {children}
          </main>

          {/* Floating Buttons */}
          <div className="flex justify-between items-center w-full max-w-full fixed bottom-5 px-4 z-50 pointer-events-none">
            <div className="pointer-events-auto w-fit h-fit bg-red-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition text-md">
              <AddContact />
            </div>
            <div className="pointer-events-auto">
              <Whatsapp />
            </div>
          </div>

          <Footer />
        </div>

      </body>
    </html>
  );
}
