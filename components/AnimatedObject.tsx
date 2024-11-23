"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedObjectProps {
  color: string;
  label: string;
  position: { x: number; y: number };
  delay?: number;
}

const AnimatedObject: React.FC<AnimatedObjectProps> = ({ color, label, position, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, x: position.x, y: position.y }}
      transition={{ duration: 1, delay }}
      style={{
        backgroundColor: color,
        width: 40, // taille adaptée pour un écran mobile
        height: 40,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "0.8rem",
        position: "absolute",
      }}
    >
      {label}
    </motion.div>
  );
};

export default AnimatedObject;