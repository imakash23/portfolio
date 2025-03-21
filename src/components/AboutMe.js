import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const skills = [
  { name: "MERN Stack", percentage: 90, color: "linear-gradient(90deg, #ff4000, #ff6a00)" },
  { name: "Laravel", percentage: 85, color: "linear-gradient(90deg, #ff6a00, #ee0979)" },
  { name: "CodeIgniter", percentage: 80, color: "linear-gradient(90deg, #ee0979, #ff0080)" },
  { name: "PHP", percentage: 88, color: "linear-gradient(90deg, #ff0080, #ff4000)" },
  { name: "MySql", percentage: 90, color: "linear-gradient(90deg, #ff0080, #ff4000)" },
  { name: "MongoDB", percentage: 88, color: "linear-gradient(90deg, #ff0080, #ff4000)" },
  { name: "Post man", percentage: 92, color: "linear-gradient(90deg, #ff0080, #ff4000)" },
  { name: "Git Hub", percentage: 88, color: "linear-gradient(90deg, #ff0080, #ff4000)" },
];

const AboutMe = () => {
  return (
    <Container id="about" className="d-flex flex-column align-items-center justify-content-center text-center" style={{ marginTop: "160px" , marginBottom:"180px" }}>
      
      {/* Animated Heading - Appears when in view */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="fw-bold display-4"
        style={{
          background: "linear-gradient(90deg, #ff4000, #ff6a00, #ee0979)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        About Me
      </motion.h2>

      {/* About Text - Appears when in view */}
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-3 text-muted fs-5 w-75"
      >
        I'm a <strong>Full-Stack Developer</strong> specializing in <strong>MERN Stack, Laravel, CodeIgniter, and PHP</strong>.
        I create scalable and high-performance applications with clean architecture. 
        Whether it's <strong>backend APIs</strong> or <strong>frontend UI/UX</strong>, I focus on delivering smooth user experiences.
      </motion.p>

      {/* Skills Section */}
      <Row className="mt-4 w-100 px-md-5">
        {skills.map((skill, index) => (
          <Col md={6} key={index} className="mb-3">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <span className="fw-bold text-black">{skill.name}</span>
              <div className="progress" style={{ height: "12px", backgroundColor: "#f0f0f0", borderRadius: "10px", overflow: "hidden" }}>
                <motion.div
                  whileInView={{ width: `${skill.percentage}%` }}
                  initial={{ width: "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="progress-bar"
                  style={{
                    background: skill.color,
                    transition: "width 1s ease-in-out",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutMe;
