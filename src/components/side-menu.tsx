"use client";

import Image from "next/image";
import { Button } from "./common/button";
import { ArrowLeft } from "./common/icons";
import LanguageDropdown from "./language-dropdown";
import { useSidebarStore } from "@/store";
import { Variants, motion } from "framer-motion";

const variants: Variants = {
  open: {
    width: "340px",
    height: "100vh",
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: 0,
    height: "100vh",
    transition: {
      duration: 0.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function SideMenu() {
  const { isOpen, sidebarToggle } = useSidebarStore();

  return (
    <>
      <motion.div
        variants={{
          show: { inset: "0px", opacity: 0.5 },
          hide: { inset: "unset", opacity: 0 },
        }}
        initial="hide"
        animate={isOpen ? "show" : "hide"}
        className="fixed z-10 bg-neutral-1"
        onClick={sidebarToggle}
      ></motion.div>
      <motion.div
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        className="fixed right-0 top-0 z-50 bg-neutral-4"
      >
        {isOpen && (
          <div className="flex h-full flex-col p-4">
            <div className="mb-10 flex items-center justify-between">
              <Image
                priority
                src="/images/logo.png"
                alt="logo"
                width={171}
                height={54}
              />
              <Button onClick={sidebarToggle} variant="ghost/primary">
                <ArrowLeft />
              </Button>
            </div>
            <LanguageDropdown />
            <div className="flex flex-1 flex-col justify-end gap-4">
              <Button>Daftar</Button>
              <Button variant="ghost/primary">Masuk</Button>
            </div>
          </div>
        )}{" "}
      </motion.div>
    </>
  );
}
