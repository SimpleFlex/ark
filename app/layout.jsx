import { Cinzel, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const crown = Cinzel({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-crown',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: '$ARK — More Than a Coin. It’s a Movement.',
  description:
    '$ARK is a community-driven token built by the believers, the dreamers, and the ones who move first. Community first, transparent tokenomics, no hidden fees.',
  keywords: ['ARK token', 'crypto', 'community token', 'Solana', 'Web3'],
  openGraph: {
    title: '$ARK — More Than a Coin. It’s a Movement.',
    description: 'A community-driven token built for sustainability and growth.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${crown.variable} ${body.variable}`}>
      <body className="bg-ark font-body antialiased">
        <div className="pointer-events-none fixed inset-0 bg-ark-grid bg-[size:64px_64px] opacity-[0.35]" />
        <div className="relative">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
