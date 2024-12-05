import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Instagram } from "lucide-react";
import { Icons } from "@/icons/Icons";

type Props = {
  showMail: boolean;
};

const spring = {
  type: "spring",
  stiffness: 400,
  damping: 10,
};

const SocialIcons = ({ showMail }: Props) => {
  return (
    <div className="flex gap-4">
      <Link
        href="https://www.linkedin.com/company/boomzo/mycompany/"
        target="_blank"
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          transition={spring}
          className="hover:cursor-pointer hover:scale-105 transition duration-100"
        >
          <Linkedin width={24} height={24} />
        </motion.div>
      </Link>
      <Link href="https://www.instagram.com/boomzo.in/" target="_blank">
        <motion.div
          whileTap={{ scale: 0.9 }}
          transition={spring}
          className="hover:cursor-pointer   hover:scale-105 transition duration-100"
        >
          <Instagram  />
        </motion.div>
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=61552515727627"
        target="_blank"
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          transition={spring}
          className="hover:cursor-pointer hover:scale-105 transition duration-100"
        >
          <Icons.facebook />
        </motion.div>
      </Link>
      {showMail && (
        <motion.a
          href="mailto:grow@boomzo.in"
          whileTap={{ scale: 0.9 }}
          transition={spring}
          className="hover:cursor-pointer hover:scale-105 transition duration-100"
        >
          <Mail width={24} height={24} />
        </motion.a>
      )}
    </div>
  );
};

export default SocialIcons;
