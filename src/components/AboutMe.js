import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import profileImage from "../assets/toyFullstack.png"; // 🔁 replace with your image path

const skills = {
  frontend: [
    { name: "React.js", percentage: 90, color: "linear-gradient(90deg, #ff6a00, #f7971e)" },
    { name: "JavaScript", percentage: 88, color: "linear-gradient(90deg, #f7971e, #ffd200)" },
    { name: "HTML5", percentage: 92, color: "linear-gradient(90deg, #ff4000, #ff8008)" },
    { name: "CSS3", percentage: 90, color: "linear-gradient(90deg, #00c6ff, #0072ff)" },
  ],
  backend: [
    { name: "Node.js", percentage: 85, color: "linear-gradient(90deg, #3fcea5, #11998e)" },
    { name: "Express.js", percentage: 83, color: "linear-gradient(90deg, #11998e, #38ef7d)" },
    { name: "Laravel", percentage: 85, color: "linear-gradient(90deg, #ff6a00, #ee0979)" },
    { name: "CodeIgniter", percentage: 80, color: "linear-gradient(90deg, #ee0979, #ff0080)" },
    { name: "PHP", percentage: 88, color: "linear-gradient(90deg, #ff0080, #ff4000)" },
    { name: "Postman", percentage: 92, color: "linear-gradient(90deg, #ff6a00, #ff4000)" },
    { name: "GitHub", percentage: 88, color: "linear-gradient(90deg, #6e48aa, #9d50bb)" },
  ],
  database: [
    { name: "MySQL", percentage: 90, color: "linear-gradient(90deg, #0072ff, #00c6ff)" },
    { name: "MongoDB", percentage: 88, color: "linear-gradient(90deg, #00b09b, #96c93d)" },
  ],

};


const AboutMe = () => {
  return (
    <Container id="about" className="d-flex flex-column align-items-center justify-content-center text-center" style={{ marginTop: "160px", marginBottom: "180px" }}>
      
      {/* 🔥 Profile Image */}
      <motion.div
        whileInView={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={profileImage}
          roundedCircle
          alt="My Photo"
          style={{
            maxWidth: "390px",
            maxHeight: "260px",
           
            height: "auto",
            border: "4px solid #ff6a00",
            borderRadius: "50%",
          }}
          
        />
      </motion.div>

      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="fw-bold display-4 mt-4"
        style={{
          background: "linear-gradient(90deg, #ff4000, #ff6a00, #ee0979)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        About Me
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-3 text-muted fs-5 w-75"
      >
        I'm a <strong>Full-Stack Developer</strong> skilled in both <strong>Frontend & Backend</strong> with strong database knowledge.
        I build scalable and clean apps with focus on performance, usability, and design.
      </motion.p>

      {/* Skill Sections */}
      {Object.entries(skills).map(([category, skillList], idx) => (
        <div key={category} className="w-100 mt-5">
          {/* Section Heading */}
          <motion.h4
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: idx * 0.2 }}
            className="fw-bold text-start text-uppercase"
            style={{
              background: "linear-gradient(90deg, #ee0979, #ff6a00)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: "20px",
            }}
          >
            {category === "frontend" ? "Frontend" : category === "backend" ? "Backend & Tools" : "Database"}
          </motion.h4>

          {/* Skills Row */}
          <Row className="w-100 px-md-3">
            {skillList.map((skill, index) => (
              <Col md={6} key={index} className="mb-3">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
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
        </div>
      ))}
    </Container>
  );
};

export default AboutMe;
