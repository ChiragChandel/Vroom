import '../styles/tailwind.css';
import Layout from '@/components/Layout';

export const metadata = {
  title: 'Vroom - Car Blog',
  description: 'Explore car blogs, reviews, and specs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
