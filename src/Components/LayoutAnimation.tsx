import React from "react";
import { motion } from "framer-motion"; // Import 'motion' from 'framer-motion' library

interface LayoutAnimationProps {
  children: React.ReactNode;
}
import { Variants } from "framer-motion";

interface PageVariants extends Variants {
  initial: {
    opacity: number;
  };
  animate: {
    opacity: number;
  };
  exit: {
    opacity: number;
  };
}
function LayoutAnimation({ children }: LayoutAnimationProps) {
  const pageVariants: PageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={pageVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default LayoutAnimation;
