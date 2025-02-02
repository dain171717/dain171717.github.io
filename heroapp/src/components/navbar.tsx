import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/navbar";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";
import Category from "../components/category";

export const Navbar = () => {
  const categories = siteConfig.categories;
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">Quote</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {categories.map((category)=> (
            <Category key={category.label} name={category.label} />
            ))
          }
        </div>
      </NavbarContent>
    </HeroUINavbar>
  );
};
