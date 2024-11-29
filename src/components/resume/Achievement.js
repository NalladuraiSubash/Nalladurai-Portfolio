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
          <h2 className="achievement-title">Achievements</h2>
        </div>
        <div className="achievement-list">
          <ResumeCard
            title="Improved Maintenance Efficiency"
            subTitle="Narayana Wind Power Pvt. Ltd"
            result="2022"
            des="Successfully reduced turbine downtime by 20% by implementing predictive maintenance strategies and optimizing repair workflows."
          />
          <ResumeCard
            title="Team Leadership and Coordination"
            subTitle="Narayana Wind Power Pvt. Ltd"
            result="2023"
            des="Led a team of technicians to complete 15+ tower inspections ahead of schedule, ensuring compliance with safety regulations."
          />
          <ResumeCard
            title="Enhanced Application Performance"
            subTitle="Gove Technology Pvt. Ltd"
            result="2024"
            des="Optimized application performance, reducing server response time by 25% through advanced debugging and refactoring techniques."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
