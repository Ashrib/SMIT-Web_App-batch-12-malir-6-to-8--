import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h2>Dasboard</h2>
      <ul>
        <Link href="/dashboard/profile">
        <button className="border-2 p-2 rounded hover:bg-gray-700">profile</button>
        </Link>
      </ul>
    </div>
  );
}
