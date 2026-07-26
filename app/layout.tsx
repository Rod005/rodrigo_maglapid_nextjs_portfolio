import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rodrigo Maglapid | Software Developer & ABOTRIX',
  description: 'Official portfolio of Rodrigo C. Maglapid Jr. — websites, POS systems, SaaS platforms and business software.',
  openGraph: {
    title: 'Rodrigo Maglapid | Software Developer',
    description: 'Modern websites, POS systems, SaaS platforms and cloud-ready business applications.',
    type: 'website'
  }
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
