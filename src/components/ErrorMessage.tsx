"use client"

import { motion } from "framer-motion"
import { useAppSelector } from "../hooks/useAppSelector";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  const { darkMode } = useAppSelector((state) => state.theme);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-800 dark:text-red-400 ${
        darkMode ? "bg-red-900" : "bg-white"
      } shadow-md`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 mr-3 mt-0.5 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
      <div>
        <h3 className={`font-medium text-white`}>Error</h3>
        <p className={`mt-1 text-white`}>{message}</p>
      </div>
    </motion.div>
  );
};

export default ErrorMessage
