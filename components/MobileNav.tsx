"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { sidebarLinks } from "@/constans";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-fulll max-w-[264px]">
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 px-4"
          >
            <span>I</span>
            <h1 className="text-26 font-bold">Logo</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((i) => {
                  const isActive =
                    pathname === i.route || pathname.startsWith(`${i.route}`);
                  return (
                    <SheetClose asChild key={i.route}>
                      <Link
                        href={i.route}
                        key={i.label}
                        className={cn("mobilenav-sheet_close max-w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <span>d</span>
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {i.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
