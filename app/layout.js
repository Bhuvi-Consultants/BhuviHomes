import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import AddContact from "@/components/AddContact";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata = {
  title: "Bhuvi Homes | Best Architects & Construction in Ranchi",
  description:
    "Bhuvi Homes offers architecture, construction, and interior design services in Ranchi. Build your dream home with experts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <NavBar />

          <main className="flex-grow overflow-x-hidden overflow-y-auto">
            {children}
          </main>

          {/* Floating Buttons */}
          <div className="flex justify-between items-center w-full fixed bottom-5 px-4 z-50 pointer-events-none">
            <div className="pointer-events-auto">
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
