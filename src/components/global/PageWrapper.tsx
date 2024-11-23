import React, { ReactNode } from "react";

import Footer from "./Footer";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  logo?: "dark" | "light";
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className,
  logo,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-[100vh] w-full ",
        className
      )}
    >
      <Navbar className="" logo={logo} />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
