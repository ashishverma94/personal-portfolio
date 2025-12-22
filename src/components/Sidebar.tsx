"use client";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/data";
import { usePathname } from "next/navigation";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Sidebar = () => {
  const pathname = usePathname();

  const profileItems = [
    { href: "#", label: "GITHUB", icon: IoLogoGithub },
    { href: "#", label: "LINKEDIN", icon: IoLogoLinkedin },
  ];

  return (
    <div className="w-16.25 h-screen bg-[black] flex flex-col justify-between items-center p-4">
      <div className="size-10 p-1">
        <Image
          src={
            "https://img.icons8.com/?size=100&id=RMKSx5VsaVye&format=png&color=ffffff"
          }
          width={50}
          height={50}
          alt="a"
        />
      </div>

      <div className="flex flex-col gap-5 w-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="group relative flex items-center justify-center"
            >
              <div
                className={`p-1 rounded-sm transition-opacity duration-200 hover:opacity-0 group-hover:z-10 ${
                  isActive
                    ? "border-2 border-white"
                    : "border-2 border-transparent group-hover:opacity-0"
                }`}
              >
                <Icon className="text-white size-5 transition-opacity duration-200 group-hover:opacity-0 " />
              </div>
              <span className="absolute text-white text-[10px] tracking-wider font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-5">
        {profileItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="group border-2 border-white rounded-sm hover:bg-white size-8 relative flex items-center justify-center"
            >
              <Icon className="text-white group-hover:text-black size-5" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
