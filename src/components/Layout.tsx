import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-6">{children}</main>
      <Footer />
    </>
  );
}
