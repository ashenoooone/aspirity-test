import './_styles/globals.css';
import { Header } from '@/widgets/header';
import { Page } from '@/shared/ui/page';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Page>
          <Header />
          {children}
        </Page>
      </body>
    </html>
  );
}
