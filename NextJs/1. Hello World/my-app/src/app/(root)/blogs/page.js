import Link from "next/link";

export default function Blogs() {


    return (
       <>
        <h2>All Blogs</h2>
        <ul>
          <li>
            <Link href="/blogs/1">Blog 1</Link>
          </li>
          <li>
            <Link href="/blogs/2">Blog 2</Link>
          </li>
          <li>
            <Link href="/blogs/3">Blog 3</Link>
          </li>
        </ul>
       </>
    )
}

