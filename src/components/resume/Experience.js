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
                <li>  * Performed routine maintenance on wind turbines to ensure optimal operation.</li>
                <li>  * Visually checked ongoing operations and reported issues to senior management.</li>
                <li>  * Ensured worker safety during maintenance and operational procedures.</li>
                <li>  * Collected machine data, identified faulty parts, and reported findings to customers.</li>
                <li>  * Prepared scheduled maintenance plans and identified parts required for tower inspections.</li>
                <li>  * Led a team to complete tasks quickly and accurately using the appropriate tools and instruments.</li>
                <li>  * Scheduled repairs and maintenance for production machines, tools, and equipment, ensuring continuous support operations.</li>
              </ul>
            }
          />

<ResumeCard
            title="Software Engineer"
            subTitle="Gove Enterprises"
            result="Present"
            des={
              <ul>
                <li>  * Developed, tested, and deployed high-quality software solutions for client projects, ensuring alignment with business requirements.</li>
                <li>  * Collaborated with cross-functional teams, including designers, project managers, and QA engineers, to deliver robust and scalable applications.</li>
                <li>  * Utilized modern frameworks and technologies, including React.js and Node.js, to build efficient front-end and back-end systems.</li>
                <li>  * Identified, debugged, and resolved complex software issues, ensuring optimal system performance and reliability.</li>
                <li>  * Integrated third-party APIs and services to enhance application functionality and streamline user workflows.</li>
                <li>  * Followed agile methodologies, participated in daily stand-ups, and contributed to sprint planning and retrospectives.</li>
                <li>  * Maintained detailed technical documentation to support ongoing maintenance and knowledge transfer.</li>
                <li>  * Improved code quality through continuous refactoring, adherence to coding standards, and code reviews.</li>
                <li>  * Monitored and optimized application performance, implementing enhancements to meet scalability requirements.</li>
              </ul>
            }
            
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
