import React from "react";
import Link from "next/link";
import Logo from "@/components/UI/Logo";
import SearchBar from "@/components/UI/SearchBar";
import RegisterButton from "@/components/UI/RegisterButton";
import LoginButton from "@/components/UI/LoginButton";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  status?: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Courses",
    link: "#",
    children: [
      {
        label: "Browse Courses",
        link: "#",
      },
      {
        label: "Preview Course",
        link: "#",
      },
      {
        label: "Preview Lesson",
        link: "#",
      },
      {
        label: "Take Course",
        link: "#",
        status: "PRO",
      },
      {
        label: "Take Lesson",
        link: "#",
      },
      {
        label: "Take Quiz",
        link: "#",
      },
      {
        label: "Quiz Result",
        link: "#",
      },
    ],
  },
  {
    label: "Paths",
    link: "#",
    children: [
      {
        label: "Browse Paths",
        link: "#",
      },
      {
        label: "Paths Details",
        link: "#",
      },
      {
        label: "Skill Assessment",
        link: "#",
      },
      {
        label: "Skill Result",
        link: "#",
      },
      {
        label: "My Paths",
        link: "#",
      },
    ],
  },
  {
    label: "Pricing",
    link: "/pricing",
  },
  {
    label: "Teachers",
    link: "#",
    children: [
      {
        label: "Instructor Dashboard",
        link: "#",
      },
      {
        label: "Manage Courses",
        link: "#",
      },
      {
        label: "Manage Quizzes",
        link: "#",
      },
      {
        label: "Earnings",
        link: "#",
      },
      {
        label: "Statement",
        link: "#",
      },
      {
        label: "Edit Course",
        link: "#",
      },
      {
        label: "Edit Quiz",
        link: "#",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <div className="w-full h-16 relative">
      <div className="fixed inset-0 p-2 justify-evenly ">
        <nav className="flex justify-center ">
          <Logo />
          <div className="flex items-center gap-4 mx-10 transition-all ">
            {navItems.map((n, i) => (
              <Link
                key={i}
                href={n.link ?? "#"}
                className="relative group px-2 py-3 transition-all"
              >
                <p className="flex cursor-pointer items-center gap-2 text-neutral-500 hover:text-black">
                  {n.label}
                </p>
                {n.children && (
                  <div className="absolute right--2 top-10 hidden w-auto flex-col gap-2 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                    {n.children.map((ch, i) => (
                      <Link
                        key={i}
                        href={ch.link ?? "#"}
                        className="flex cursor-pointer items-center text-nowrap py-1 px-6 gap-2 text-neutral-500 hover:text-black justify-between"
                      >
                        <span className="whitespace-nowrap">{ch.label}</span>
                        <span className="bg-red-600 px-3 font-bold rounded-full text-white">
                          {ch.status}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>

          <SearchBar />
          <div className="flex items-center gap-3">
            {" "}
            <LoginButton />
            <RegisterButton />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
