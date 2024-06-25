"use client";  // 이 컴포넌트는 Client에서 동작하는 녀석입니다.... 마킹~

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();  // 리액트 훅으로 Client Side로 동작합니다... 
  const [count, setCount] = useState(0);
  return(
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/"? "<--":""}
        </li>
        <li>
          <Link href="/info">Info</Link> {path === "/info"? "<--":""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link> {path === "/about-us"? "<--":""}
        </li>
        <li>
        <button onClick={() => setCount((c) => c+1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}