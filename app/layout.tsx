import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });



export const metadata: Metadata = {
  title: 'Goodwinsun - Next-Generation AI Research & Development',
  description: 'Pioneering AI & Quantum Technologies. A technology company engaged in research, solutions, and product development predominantly in artificial intelligence with quantum computing expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className={`${inter.className} antialiased`}>{children}</body>

    </html>
  );
}