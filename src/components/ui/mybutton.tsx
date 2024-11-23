import React, { FC } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const MyButton: FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex p-3 cursor-mypointer justify-center gap-2 items-center mx-auto shadow-xl text-md font-bold bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-white border-4 before:absolute before:w-full before:transition-all before:bg-mygradient before:duration-700 before:hover:w-full px-5 before:-left-full before:hover:left-0 before:rounded-full  hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden rounded-full group ${className}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
