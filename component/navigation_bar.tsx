"use client";

import Link from "next/link";
import styles from "../css/navigation.module.css";
import { useParams, usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Movie List 🎞️</Link>
        </li>
      </ul>
    </nav>
  );
}

//{path === "/" ? "🔥" : ""}
