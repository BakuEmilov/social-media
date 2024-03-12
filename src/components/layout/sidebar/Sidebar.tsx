import Image from "next/image";
import React from "react";
import styles from "./Sidebar.module.scss";
import { Sun } from "lucide-react";
import Link from "next/link";

import { MENU } from "./sidebar.data";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" priority alt="" width={45} height={45} />

      <div>
        {MENU.map((item) => (
          <Link href={item.url} key={item.url}>
            <item.Icon size={27} />
          </Link>
        ))}
      </div>

      <Sun size={27} />
    </aside>
  );
};

export default Sidebar;
