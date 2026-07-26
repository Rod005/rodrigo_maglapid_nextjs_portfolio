import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Rodrigo Maglapid | ABOTRIX Software Developer',
  description: 'Official portfolio of Rodrigo C. Maglapid Jr. — business websites, POS systems, SaaS platforms and cloud-ready applications.',
  openGraph: { title:'Rodrigo Maglapid | ABOTRIX', description:'Business software and digital solutions built for real operations.', type:'website' }
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body>{children}</body></html>}
