"use client";
import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

interface SlideUpListProps {
  items: string[];
}

const SlideUpList = ({ items }: SlideUpListProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      // 0.8 secondes de délai entre chaque élément
      transition={{ staggerChildren: 0.8, duration: 2 }} // Animation lente avec un délai entre les éléments
      // style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          transition={{ duration: 1 }} // Animation lente pour chaque élément
          // style={{
          //   backgroundColor: "#3B8FEF",
          //   color: "#FFFFFF",
          //   padding: "15px",
          //   borderRadius: "8px",
          //   margin: "10px",
          //   maxWidth: "300px",
          //   textAlign: "center",
          // }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SlideUpList;
