import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FloatingButton from '@/components/FloatingButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Propstical Demo Web',
  description: 'Made with love by REESE',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}