import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard"; 
import './Achievement.css'; 

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="achievement-container"
    >
      <div className="achievement-column">
        <div className="achievement-header">
          <p className="achievement-subtitle">Year</p>
          <h2 className="achievement-title">Title</h2>
        </div>
        <div className="achievement-list">
          <ResumeCard
            title=""
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title=""
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title=""
            subTitle=""
            result=""
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
