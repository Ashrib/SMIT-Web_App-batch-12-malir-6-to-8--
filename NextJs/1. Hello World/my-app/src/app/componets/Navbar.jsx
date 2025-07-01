import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <Link href="/aboutus" className="hover:underline">
        <li>About us</li>
        </Link>
        <Link href="/settings" className="hover:underline">
        <li>Settings</li>
        </Link>
        <Link href="/dashboard" className="hover:underline">
        <li>Dashboard</li>
        </Link>
        <Link href="/blogs" className="hover:underline">
        <li>Blogs</li>
        </Link>
      </ul>
    </nav>
  );
}
