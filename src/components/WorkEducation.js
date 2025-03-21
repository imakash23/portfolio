import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Ko Innovation Software Solution ",
    duration: "Dec 2023 - Present",
    description: "Developing and optimizing enterprise-level applications using MERN stack, Laravel, and CodeIgniter.",
  },

];

const education = [
  {
    degree: "Bachelor of Engineering - ECE",
    institution: "K Ramakrishnan College of Technology",
    duration: "2019 - 2023",
  },
];

const WorkEducation = () => {
  return (
    <Container id="work-education" className="py-5">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="fw-bold display-4 text-center"
        style={{
          background: "linear-gradient(90deg, #ff4000, #ff6a00, #ee0979)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Work Experience
      </motion.h2>

      <Row className="mt-4">
        {experiences.map((exp, index) => (
          <Col md={6} key={index} className="mb-4">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="shadow-lg border-0 rounded-4 p-3">
                <Card.Body>
                  <Card.Title className="fw-bold text-black">{exp.role}</Card.Title>
                  <Card.Subtitle className="text-muted">{exp.company} | {exp.duration}</Card.Subtitle>
                  <Card.Text className="mt-2">{exp.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="fw-bold display-4 text-center mt-5"
        style={{
          background: "linear-gradient(90deg, #ff4000, #ff6a00, #ee0979)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Education
      </motion.h2>

      <Row className="mt-4 justify-content-center">
        {education.map((edu, index) => (
          <Col md={6} key={index} className="mb-4">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="shadow-lg border-0 rounded-4 p-3">
                <Card.Body>
                  <Card.Title className="fw-bold text-black">{edu.degree}</Card.Title>
                  <Card.Subtitle className="text-muted">{edu.institution} | {edu.duration}</Card.Subtitle>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WorkEducation;
