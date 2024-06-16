"use client";

import Image from "next/image";
import { Button } from "./common/button";
import LanguageDropdown from "./language-dropdown";
import { Cart, List } from "./common/icons";
import SearchBar from "./search-bar";
import { useSidebarStore } from "@/store";

export default function Header() {
  const { sidebarToggle } = useSidebarStore();

  return (
    <header className="border-b border-neutral-2 bg-neutral-4 p-4">
      <div className="mb-4 hidden justify-end gap-4 md:flex">
        <LanguageDropdown />
        <Button variant="ghost/primary">Masuk</Button>
        <Button>Daftar</Button>
      </div>
      <div className="flex items-center">
        <Image
          priority
          src="/images/logo.png"
          alt="logo"
          width={171}
          height={54}
          className="hidden md:block"
        />
        <div className="flex flex-1 items-center justify-center gap-2 md:gap-8">
          <SearchBar />
          <div className="flex">
            <Button variant="ghost/primary">
              <Cart />
            </Button>
            <Button
              onClick={sidebarToggle}
              className="md:hidden"
              variant="ghost/primary"
            >
              <List />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
