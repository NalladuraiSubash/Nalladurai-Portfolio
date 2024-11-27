import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import './Experience.css'; // Import the CSS file

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="experience-container"
    >
      <div className="experience-section">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2> 
        </div>
        <div className="experience-cards-container">
          <ResumeCard
            title="Maintenance Engineer"
            subTitle="Narayana Wind Power Pvt. Ltd, Aralvaimozhi"
            result="Feb 25, 2022 - Mar 30, 2023"
            des={
              <ul>
                <li>Performed routine maintenance on wind turbines to ensure optimal operation.</li>
                <li>Visually checked ongoing operations and reported issues to senior management.</li>
                <li>Ensured worker safety during maintenance and operational procedures.</li>
                <li>Collected machine data, identified faulty parts, and reported findings to customers.</li>
                <li>Prepared scheduled maintenance plans and identified parts required for tower inspections.</li>
                <li>Led a team to complete tasks quickly and accurately using the appropriate tools and instruments.</li>
                <li>Scheduled repairs and maintenance for production machines, tools, and equipment, ensuring continuous support operations.</li>
              </ul>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
