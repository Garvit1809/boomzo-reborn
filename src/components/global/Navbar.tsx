"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Contact, Home, Info, MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import WhiteLogo from "../../../public/logoWhiteCom.png";
import BlackLogo from "../../../public/logoBlack.png";
import { HoveredLink, MenuItem } from "../aceternity/navbar-menu";
import { SERVICE_ROUTES } from "@/constants/service-routes";

const Navbar = ({
  className,
  logo = "light",
}: {
  className?: string;
  logo?: "dark" | "light";
}) => {
  const navigate = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [active, setActive] = useState<string | null>(null);

  const openWhatsApp = () => {
    const phoneNumber = "+918439911779"; // Replace with the phone number you want to send the message to
    const message = "Hello Boomzo, I need a free consultation."; // Custom message

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank"); // Open WhatsApp in a new tab or window
  };

  return (
    <div
      className={cn(
        "absolute top-0 flex border-0 border-red-600 items-center justify-between px-[5vw] md:px-[5vw] w-full h-[4rem] bg-transparent z-20 max-w-[1450px] mx-auto",
        className
      )}
    >
      <div className="text-white text-lg">
        <Link href="/">
          <Image
            alt="boomzo"
            src={logo == "light" ? WhiteLogo : BlackLogo}
            width={120}
            height={120}
            priority={true}
          />
        </Link>
      </div>

      {/* navbar */}
      <div className="gap-x-14 hidden lg:flex">
        <Link href="/" className="text-white">
          Home
        </Link>
        <div className="" onMouseLeave={() => setActive(null)}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              {SERVICE_ROUTES.map((service, idx) => {
                return (
                  <HoveredLink key={idx} href={service.route}>
                    {service.title}
                  </HoveredLink>
                );
              })}
            </div>
          </MenuItem>
        </div>
        <Link href="/contact" className="text-white">
          Contact Us
        </Link>
      </div>

      {/* Get free consultation btn */}
      <div className="hidden lg:inline-block">
        <button
          className="font-wix cursor-pointer flex items-center justify-center rounded-lg px-6 py-4 font-extrabold text-xl transition duration-200 hover:-translate-y-2"
          style={{
            background: "linear-gradient(135deg, #542daf, #ff9100)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          onClick={openWhatsApp}
        >
          Get free consultation
        </button>
      </div>

      {/* sidebar */}
      <button onClick={toggleSidebar} className="lg:hidden mr-4">
        <MenuIcon color={`${logo == "dark" ? "black" : "#f7faff"}`} />
      </button>
      <div
        ref={sidebarRef}
        className={`flex flex-col justify-between fixed inset-y-0 right-0 bg-black bg-opacity-50 z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden w-3/4 md:w-1/2`}
      >
        <div className="bg-[#f7faff]/90 h-full p-4">
          {[
            { title: "Home", icon: <Home />, path: "/" },
            { title: "Services", icon: <Info />, path: "/about" },
            { title: "Contact Us", icon: <Contact />, path: "/contact" },
          ].map((option, idx) => (
            <a
              key={idx}
              className="flex gap-2 p-4 text-black hover:bg-black hover:text-white rounded-md transition duration-100 hover:cursor-pointer"
              onClick={() => {
                navigate.push(option.path);
                // event("NavOptionClick", {
                //   content_name: "My Button",
                //   content_category: "User Interaction",
                // });
                toggleSidebar();
              }}
            >
              {option.icon}
              <span>{option.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
