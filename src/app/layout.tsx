import './globals.css';
import { Providers } from './providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aiva Challenge',
  description: 'Mini-blog usando DEV.to API',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
