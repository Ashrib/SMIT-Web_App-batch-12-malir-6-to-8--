'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation' 

export default function AuthNavbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <Link href="/register" className={`hover:underline ${pathname === '/register' ? 'font-bold underline' : ''}`}>
          <li>Register</li>
        </Link>
        <Link href="/login" className={`hover:underline ${pathname === '/login' ? 'font-bold underline' : ''}`}>
        <li>Login</li>
        </Link>
        <Link href="/forget-pass" className={`hover:underline ${pathname === '/forgot-password' ? 'font-bold underline' : ''}`}>
          <li>Forgot Password</li>
        </Link>
      </ul>
    </nav>
  );
}
