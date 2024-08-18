"use client";
import React, { useEffect } from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import gsap from "gsap";
import HamBtn from "./HamBtn/Btn";
import RegBtn from "./RegBtn/RegBtn";

export default function Navbar() {
  useEffect(() => {
    const bulbs = document.querySelectorAll(".bulb");

    for (let i = 0; i < bulbs.length; i += 2) {
      const tl = gsap.timeline({ repeat: -1.5, yoyo: true });
      tl.to(bulbs[i], { duration: 0.75, opacity: 0.5 });
      tl.to(bulbs[i], { duration: 0.75, opacity: 1 });
    }
    for (let i = 1; i < bulbs.length; i += 2) {
      const tl = gsap.timeline({ repeat: -1.5, yoyo: true });
      tl.to(bulbs[i], { duration: 0.75, opacity: 1 });
      tl.to(bulbs[i], { duration: 0.75, opacity: 0.5 });
    }
  }, []);

  return (
    <>
      <div className={styles.header}>
        <HamBtn />
        <RegBtn />
      </div>
      <div className={styles.logo}>
        <Image
          src="/oasislogo.png"
          alt="oasis logo landing"
          width={560}
          height={205}
        />
      </div>
    </>
  );
}
