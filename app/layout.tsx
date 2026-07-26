import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rodrigo Maglapid | Software Developer',
  description: 'Official portfolio of Rodrigo C. Maglapid Jr., software developer for websites, POS systems, SaaS platforms and business automation.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className="font-sans antialiased">{children}</body></html>;
}
