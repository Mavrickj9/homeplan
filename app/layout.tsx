import './globals.css'
import Navbar from './../components/Navbar';

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
        {children}</body>
    </html>
  )
}
