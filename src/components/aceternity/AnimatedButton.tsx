import { Icons } from "@/icons/Icons";
import React from "react";

type Props = {
  onClick?: any;
  text: string | React.ReactNode;
  className?: string;
  buttonType?: "button" | "submit";
  disableButton?: boolean;
  isLoading?: boolean;
};

const AnimatedButton = ({
  onClick,
  text,
  className = "",
  buttonType = "button",
  disableButton = false,
  isLoading,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`font-manrope flex items-center justify-center gap-2 px-4 py-2 rounded-lg border disabled:pointer-events-none disabled:opacity-50 border-neutral-300 font-semibold hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${className}`}
      type={buttonType}
      disabled={disableButton}
    >
      {isLoading && <Icons.spinner className="animate-spin" />}
      {text}
    </button>
  );
};

export default AnimatedButton;
