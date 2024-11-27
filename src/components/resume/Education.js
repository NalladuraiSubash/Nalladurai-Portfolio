import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import './Education.css'; 

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="education-container"
    >
      <div className="education-section">
        <div className="section-header">
          <h2 className="section-title">Education Quality</h2>
        </div>
        <div className="education-cards-container">
          <ResumeCard
            title="BE in Mechanical Engineering"
            subTitle="Francis Xavier Engineering College(2017 - 2021)"
            result="CPGA 8.17"
            des= "A program focused on providing in-depth knowledge and practical skills in mechanical engineering."
          />
          <ResumeCard
            title="Higher Secondary Certificate (HSC)"
            subTitle="Cathedral Higher Secondary School (2015 - 2017)"
            result="Percentage: 69%"
            des= "Completed secondary education with a focus on foundational academic subjects, preparing for higher education and future career paths."
          />
          <ResumeCard
            title="Secondary School Leaving Certificate (SSLC)"
            subTitle="Cathedral Higher Secondary School (2014 - 2015)"
            result="Percentage: 79%"
            des="Successfully completed secondary school, laying the groundwork for further academic pursuits and career opportunities."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
