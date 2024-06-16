"use client";

import Image from "next/image";
import { Button } from "./common/button";
import { ArrowLeft } from "./common/icons";
import LanguageDropdown from "./language-dropdown";
import { useSidebarStore } from "@/store";
import { cn } from "@/lib/utils";

export default function SideMenu() {
  const { isOpen, sidebarToggle } = useSidebarStore();
  return (
    <div
      className={cn(
        "fixed inset-0 flex flex-col bg-neutral-4 p-4",
        !isOpen && "hidden"
      )}
    >
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
  );
}
