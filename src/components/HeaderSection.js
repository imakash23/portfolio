import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import ProfileImage from "../assets/updatedHeader.png";

const startDate = new Date("2023-12-01");
const getExperience = () => {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return `${years} years ${months} months`;
};

const HeaderSection = () => {
  const [experience, setExperience] = useState(getExperience());
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "a Passionate Full-Stack Developer, ",
    `with ${experience} of experience! `,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
      setExperience(getExperience());
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  // Handle Button Clicks
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919360351608", "_blank"); // Replace with your number
  };

  const handleHireMeClick = () => {
    window.location.href = "mailto:akashmoorthy2002@gmail.com"; // Replace with your email
  };

  return (
    <Container id="header"  style={{ marginTop:"130px",minHeight:"57vh"}}>
      <Row className="align-items-center">
        {/* Left Section - Text Content */}
        <Col md={6} className="text-left">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="display-4 fw-bold text-black"
          >
            Hello! <span style={{ color: "#ff4000" }}>I'm Akash</span>
          </motion.h2>

          <motion.p
            key={textIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mt-3 h4 fw-semibold text-black"
          >
            {texts[textIndex]}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="mt-4 d-flex gap-3"
          >
            <Button
              variant="danger"
              className="px-4 py-2 fw-bold"
              style={{ backgroundColor: "#ff4000", border: "none" }} 
              onClick={handleHireMeClick}
            >
              Hire Me
            </Button>
            <Button variant="outline-dark" className="px-4 py-2 fw-bold"  onClick={handleWhatsAppClick}>
              WhatsApp
            </Button>
          </motion.div>
        </Col>

        {/* Right Section - Profile Image */}
        <Col md={6} className="text-center mt-4 mt-md-0">
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="position-relative"
          >
            <motion.img
              src={ProfileImage}
              alt="Profile"
              className="img-fluid rounded-circle shadow-lg border border-danger"
              style={{ width: "350px", height: "360px", borderColor: "#ff4000" }}
            />

            {/* Floating Labels */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="position-absolute top-0 end-0 bg-danger text-white px-3 py-1 rounded fw-bold shadow"
              style={{ backgroundColor: "#ff4000" }}
            >
              Full Stack Developer
            </motion.div>

            <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
  className="position-absolute bottom-0 start-0 bg-dark text-white px-3 py-1 rounded fw-bold shadow"
>
  MongoDB | Express.js | React | Node.js
</motion.div>

          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderSection;