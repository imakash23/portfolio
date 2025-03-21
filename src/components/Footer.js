import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="bg-dark text-white py-4"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Row className="text-center text-md-start">
          {/* Contact Section */}
          <Col md={6} className="mb-3">
            <h4 className="fw-bold">Contact Me</h4>
            <p>
              <FaWhatsapp className="me-2 text-success" />
              <a href="https://wa.me/919360351608" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                WhatsApp
              </a>
            </p>
            <p>
              <FaEnvelope className="me-2 text-warning" />
              <a href="mailto:akashmoorthy2002@gmail.com" className="text-white text-decoration-none">
                akashmoorthy2002@gmail.com
              </a>
            </p>
            <p>
              <FaLinkedin className="me-2 text-primary" />
              <a href="https://www.linkedin.com/in/akash-fullstack-dev" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                LinkedIn Profile
              </a>
            </p>
          </Col>

          {/* Address Section */}
          <Col md={6}>
            <h4 className="fw-bold">Address</h4>
            <p>
              <FaMapMarkerAlt className="me-2 text-danger" />
              Trichy , Tamil Nadu  , India
            </p>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-3 text-center">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Akash. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
