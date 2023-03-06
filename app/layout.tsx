import './globals.css'
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Gallery from "@/components/Gallery";
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Benchmark Solutions',
  description: 'Supplying all you home designs and plans at an affordable price',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>        
        {children}
        <Navbar />
        <Home />
        <WhyUs />
        <Services />
        <Gallery />
        <Footer />
      </body>
    </html>
  );
}
