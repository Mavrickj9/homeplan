import './globals.css'
import Navbar from './../components/Navbar';
import Home from './../components/Home';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';

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
        <Navbar />
        {children}
        <Home />
        <WhyUs />
        <Services />
        </body>
    </html>
  )
}
