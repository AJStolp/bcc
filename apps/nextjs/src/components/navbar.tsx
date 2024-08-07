"use client";

import Link from "next/link";

import { Button } from "@saasfly/ui/button";

import { LocaleChange } from "~/components/locale-change";
import useScroll from "~/hooks/use-scroll";
import { useSigninModal } from "~/hooks/use-signin-modal";
import type { MainNavItem } from "~/types";
import { MainNav } from "./main-nav";

type Dictionary = Record<string, string>;

interface NavBarProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  params: {
    lang: string;
  };
  marketing: Dictionary;
  dropdown: Record<string, string>;
}

export function NavBar({
  items,
  children,
  rightElements,
  scroll = false,
  params: { lang },
  marketing,
  dropdown,
}: Readonly<NavBarProps>) {
  const scrolled = useScroll(50);
  const signInModal = useSigninModal();
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center border-border bg-background/60 py-4 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={items} params={{ lang: `${lang}` }}>
          {children}
        </MainNav>

        <div className="flex items-center space-x-3">
          {rightElements}
          <LocaleChange url={"/"} />
          <Link href={`/${lang}/contact`}>
            <Button className="mr-2 px-3" variant="outline" size="sm">
              {marketing.contact || "Contact"}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
