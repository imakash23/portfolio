import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fleet Management – Kofleetz",
    description: "A fleet management system with GPS tracking, trip management, and geofencing. Built with MERN Stack for scalability and performance.",
    tech: ["MERN Stack", "GPS Tracking", "Geofencing"],
  },
  {
    title: "Mekdam - Warehouse Management",
    description: "Middleware between SAP and Power BI for seamless data transfer. Supports Excel upload, scheduled cron jobs, and API monitoring.",
    tech: ["PHP (Laravel)", "SAP", "Power BI"],
  },
  {
    title: "Smart Coupon Application",
    description: "A coupon management system for promotions and reward tracking. Allows coupon creation, bill uploads, and prize distribution.",
    tech: ["CodeIgniter", "PHP", "MySQL"],
  },
  {
    title: "RDD – Mall Interior Submission",
    description: "A document approval system for mall tenants. Ensures secure uploads and multi-level approvals from managers.",
    tech: ["Laravel", "Workflow Automation", "Secure File Handling"],
  },
];

const Projects = () => {
  return (
    <Container id="projects" className="py-5">
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
         Projects
      </motion.h2>

      <Row className="mt-4">
        {projects.map((project, index) => (
          <Col md={6} key={index} className="mb-4">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="shadow-lg border-0 rounded-4 p-3" style={{ backgroundColor: "#fff" }}>
                <Card.Body>
                  <Card.Title className="fw-bold text-black">{project.title}</Card.Title>
                  <Card.Text className="text-muted">{project.description}</Card.Text>
                  <div className="d-flex flex-wrap mt-3">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} className="me-2 mb-2" style={{ backgroundColor: "#ff4000" }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
