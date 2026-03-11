import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = "", gradient, hover = true, onClick }: CardProps) {
  return (
    <motion.div
      className={`card ${className}`}
      whileHover={hover ? { y: -6, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : undefined }}
    >
      {gradient && (
        <div
          className="cardGradientBar"
          style={{ background: `linear-gradient(135deg, var(--${gradient}))` }}
        />
      )}
      {children}
    </motion.div>
  );
}
