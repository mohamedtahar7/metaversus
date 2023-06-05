"use client";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import Image from "next/image";
import { motion } from "framer-motion";
import search from "../public/search.svg";
import menu from "../public/menu.svg";
const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01 " />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 `}>
      <Image
        src={search}
        className="w-[24px] h-[24px] object-contain "
        alt="search"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white ">
        METAVERSUS
      </h2>
      <Image
        src={menu}
        alt="menu"
        className="w-[24px] h-[24px] object-contain "
      />
    </div>
  </motion.nav>
);

export default Navbar;
