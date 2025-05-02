import { motion } from "framer-motion";
import type { FC } from "react";
import { Link } from "react-router";

interface LogoProps {
  to?: string;
  title?: string;
  rotate?: boolean;
  variant?: "sm" | "md" | "lg" | "xl";
}

const iconSizeMap: Record<NonNullable<LogoProps["variant"]>, string> = {
  sm: "size-5",
  md: "size-6",
  lg: "size-7",
  xl: "size-8",
};

const textSizeMap: Record<NonNullable<LogoProps["variant"]>, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const Logo: FC<LogoProps> = ({
  to = "/",
  title = "Weather Express",
  rotate = false,
  variant = "md",
}) => {
  const iconSize = iconSizeMap[variant];
  const textSize = textSizeMap[variant];

  return (
    <Link to={to} className="flex items-center space-x-2">
      <motion.div
        initial={{ rotate: 0 }}
        animate={rotate ? { rotate: 360 } : {}}
        transition={
          rotate
            ? { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
            : undefined
        }
        className={`text-blue-500 dark:text-blue-400`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      </motion.div>
      <span className={`font-bold text-gray-900 dark:text-white ${textSize}`}>
        {title}
      </span>
    </Link>
  );
};

export default Logo;
