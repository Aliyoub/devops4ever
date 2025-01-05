"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ResizableComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      onClick={() => setIsExpanded(!isExpanded)} // Toggle l'expansion
      initial={{ width: 150, height: 100 }} // Dimensions initiales
      animate={
        isExpanded ? { width: 300, height: 200 } : { width: 150, height: 100 }
      } // Dimensions cibles
      transition={{ duration: 0.8, ease: "easeInOut" }} // Durée et courbe d'animation
      style={{
        backgroundColor: "#3B8FEF",
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "10px",
      }}
    >
      {isExpanded ? "Réduit-moi" : "Agrandis-moi"}
    </motion.div>
  );
};

export default ResizableComponent;
