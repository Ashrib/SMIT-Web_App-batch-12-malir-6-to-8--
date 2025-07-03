'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation' 

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <Link href="/aboutus" className={`hover:underline ${pathname === '/aboutus' ? 'font-bold underline' : ''}`}>
        <li>About us</li>
        </Link>
        <Link href="/settings" className={`hover:underline ${pathname === '/settings' ? 'font-bold underline' : ''}`}>
        <li>Settings</li>
        </Link>
        <Link href="/dashboard" className={`hover:underline ${pathname === '/dashboard' ? 'font-bold underline' : ''}`}>
        <li>Dashboard</li>
        </Link>
        <Link href="/blogs" className={`hover:underline ${pathname === '/blogs' ? 'font-bold underline' : ''}`}>
        <li>Blogs</li>
        </Link>
        <Link href="/quotes" className={`hover:underline ${pathname === '/quotes' ? 'font-bold underline' : ''}`}>
        <li>Quotes</li>
        </Link>
      </ul>
    </nav>
  );
}
