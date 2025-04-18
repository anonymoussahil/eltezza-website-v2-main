/* eslint-disable */
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";

interface HeaderProps {
  page: "design";
  color: "--ez-orange";
}

export function Header({ page, color }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/Logos/Keyon_Media_Logo.png"
          alt="Keyon Media Private Limited"
          width={230}
          height={80}
          className={styles.headerLogo}
        />
      </Link>
    </header>
  );
}
