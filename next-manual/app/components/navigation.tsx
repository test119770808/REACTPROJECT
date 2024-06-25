import Link from "next/link";

export default function Navigation() {
  return(
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="/info">Info</a>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}