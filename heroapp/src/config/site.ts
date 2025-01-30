export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  categories: [
    {
      label: "#심리학",
      href: "/"
    },
    {
      label: "#철학",
      href: "/"
    },
    {
      label: "#글귀",
      href: "/"
    },
    {
      label: "영화",
      href: "/"
    },
    {
      label: "#소설",
      href: "/"
    },
    {
      label: "정치",
      href: "/"
    }
  ],
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  api: {
    google: "https://script.google.com/macros/s/AKfycbxQfg-SAlfSy3P7WZ3ogriLDzup87rq0jLiN8tZ1jPc-YI5_Sr1ivcADOV2HOjDbmipLg/exec"
  }
};
