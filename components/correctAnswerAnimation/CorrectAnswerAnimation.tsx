"use client";
import { motion } from "framer-motion";
import styles from "./AnimationStyles.module.css";

const CorrectAnswerAnimation = () => {
  const stars = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className={styles.container}>
      {stars.map((star) => (
        <motion.div
          key={star}
          className={styles.star}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: [1, 1.5, 0],
            x: [0, (Math.random() - 0.5) * 200],
            y: [0, (Math.random() - 0.5) * 200],
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      ))}
      {/* <motion.h2
        className={styles.correctText}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Bonne Réponse !
      </motion.h2> */}
    </div>
  );
};

export default CorrectAnswerAnimation;
