"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Contact,
  Home,
  Info,
  MenuIcon,

} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BlackLogo from "../../../public/logoBlack.png";

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
        "absolute top-0 flex items-center  justify-between px-[5vw] md:px-[5vw] w-full h-[4rem] bg-background z-20 max-w-[1450px] mx-auto",
        className
      )}
    >
      <div className="text-white text-lg">
        <Link href="/">
          <Image
            alt="boomzo"
            src={BlackLogo}
            width={120}
            height={120}
            priority={true}

          />
        </Link>
      </div>

      <div className="gap-x-14 hidden lg:flex">  
        {/* <div className=" cursor-mypointer " onMouseLeave={() => setActive(null)}>
          <MenuItem  setActive={setActive} active={active}  item="Services" >
            <div className="grid gap-2">
              {SERVICE_ROUTES.map((service, idx) => {
                return (
                  <div key={idx} className="flex  gap-x-2 p-1  w-56 ">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={70}
                      height={70}
                      className="rounded-lg" />
                    <div key={idx} >
                     <h1 className="font-bold">{service.title}</h1>
                      <p className="text-xs">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </MenuItem>
        </div> */}
        <Link href="/about" className="text-black hover:underline font-semibold  ">
          About Us
        </Link>
        <Link href="/contact" className="text-black hover:underline  font-semibold  ">
          Contact Us
        </Link>
        <Link href="/coming" className="text-black hover:underline  font-semibold  ">
          Coming soon
        </Link>
      </div>

      {/* Get free consultation btn */}
      <div className="hidden lg:inline-block">
        <button
          onClick={openWhatsApp}
          className="flex justify-center gap-2 items-center mx-auto shadow-xl text-sm font-semibold bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
        >
          Get Free Consultation
          <svg
            className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-gray-800 group-hover:fill-gray-800"
            ></path>
          </svg>
        </button>

      </div>

      {/* sidebar */}
      <button onClick={toggleSidebar} className="lg:hidden mr-4">
        <MenuIcon color={`${logo == "dark" ? "black" : "black"}`} />
      </button>
      <div
        ref={sidebarRef}
        className={`flex flex-col justify-between fixed inset-y-0 right-0 bg-black bg-opacity-50 z-50 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden w-3/4 md:w-1/2`}
      >
        <div className="bg-[#f7faff]/90 h-full p-4">
          {[
            { title: "Home", icon: <Home />, path: "/" },
            { title: "About Us", icon: <Info />, path: "/about" },
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
