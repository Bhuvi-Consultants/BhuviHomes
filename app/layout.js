import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import AddContact from "@/components/AddContact";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata = {
  metadataBase: new URL("https://bhuvihomes.in"),

  title: {
    default: "Bhuvi Homes - Construction & Design in Ranchi",
    template: "%s | Bhuvi Homes",
  },

  description:
    "Bhuvi Homes provides house construction, interior design, and map approval services in Ranchi and Jharkhand.",

  keywords: [
    "construction company in ranchi",
    "home construction jharkhand",
    "architect in ranchi",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Bhuvi Homes",
    description: "Construction and design company in Ranchi.",
    url: "https://bhuvihomes.in",
    siteName: "Bhuvi Homes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Bhuvi Homes",
              url: "https://bhuvihomes.in",
              telephone: "+91-8986699600",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ranchi",
                addressRegion: "Jharkhand",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "Place",
                name: "Jharkhand",
              },
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Bhuvi Homes",
              url: "https://bhuvihomes.in",
              telephone: "+91-8986699600",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ranchi",
                addressRegion: "Jharkhand",
                addressCountry: "IN",
              },
            }),
          }}
        />
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
