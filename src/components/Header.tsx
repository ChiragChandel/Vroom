import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Vroom</Link>
        <div className="space-x-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
