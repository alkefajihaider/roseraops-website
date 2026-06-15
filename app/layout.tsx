import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://roseraops.com'),
  title: 'RoseraOps | Enterprise AI Cost Optimization and Human-First AI Training',
  description:
    'RoseraOps helps enterprise teams reduce AI waste, optimize AI spending, and train employees to use AI without sacrificing human judgment, creativity, or productivity.',
  keywords: [
    'AI cost optimization',
    'enterprise AI consulting',
    'AI governance',
    'AI training',
    'AI workflow design',
    'prompt efficiency',
    'AI productivity',
    'AI waste audit',
    'human-first AI',
    'AI operations',
    'token efficiency',
    'AI governance consulting',
  ],
  authors: [{ name: 'RoseraOps' }],
  alternates: { canonical: 'https://roseraops.com' },
  openGraph: {
    type: 'website',
    url: 'https://roseraops.com',
    siteName: 'RoseraOps',
    title: 'RoseraOps | Prune AI Waste. Let Human Intelligence Bloom.',
    description:
      'Enterprise AI consulting and training for cost discipline, workflow quality, and human-first productivity.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoseraOps | Prune AI Waste. Let Human Intelligence Bloom.',
    description:
      'Enterprise AI consulting and training for cost discipline, workflow quality, and human-first productivity.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#FAF7F0',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {/* Marks the document as JS-capable before first paint. The reveal
            animations are scoped to html.js, so without JS all content stays
            visible. Runs synchronously, ahead of hydration. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
