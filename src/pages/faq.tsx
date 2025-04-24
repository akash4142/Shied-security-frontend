import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const faqData = [
  {
    question: "What services do security companies offer?",
    answer:
      "Shield Security provides mobile patrols, uniformed guards, tactical response, event security, access control, CCTV monitoring, and loss prevention.",
  },
  {
    question: "Can services be customized to fit our needs?",
    answer:
      "Absolutely. We tailor every service package based on your risk level, location, hours, and budget. Reach out for a free consultation.",
  },
  {
    question: "What qualifications do your guards have?",
    answer:
      "All our guards are provincially licensed, background-checked, and Shield Academy trained in de-escalation, safety, mental health, and professionalism.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve retail, hospitality, healthcare, construction, corporate, industrial, and government sectors throughout Canada.",
  },
  {
    question: "How quickly can you deploy guards?",
    answer:
      "We’re known for rapid response and can often deploy within hours. For planned coverage, we recommend 24–48 hours notice.",
  },
  {
    question: "Do you offer real-time reporting?",
    answer:
      "Yes. We use TrackTik for real-time patrol monitoring, incident reports, shift logs, and visitor access tracking.",
  },
  {
    question: "Is Shield Security licensed and insured?",
    answer:
      "Yes. We are fully insured and licensed across multiple provinces in Canada, meeting or exceeding all legal requirements.",
  },
  {
    question: "How can I get a quote?",
    answer:
      "Visit our Request a Quote page or contact us directly to speak with a security advisor about a tailored solution.",
  },
  {
    question: "What makes Shield Security different from other providers?",
    answer:
      "Our combination of advanced technology, rapid response times, Shield Academy-trained guards, and transparent reporting sets us apart from traditional providers.",
  },
  {
    question: "Can I request a specific type of guard for my site?",
    answer:
      "Yes, depending on your requirements, we can provide uniformed, tactical, bilingual, or concierge-style guards tailored to your environment.",
  },
  {
    question: "Do your guards receive ongoing training?",
    answer:
      "Yes. In addition to initial certification, our team participates in ongoing professional development through the Shield Academy.",
  },
  {
    question: "What areas do you currently serve?",
    answer:
      "We provide services across Alberta, British Columbia, and Ontario, with a growing presence in other provinces. Contact us to check local availability.",
  },
  {
    question: "Can you integrate with existing alarm or camera systems?",
    answer:
      "Absolutely. Our team can work alongside your current security infrastructure or recommend upgrades to enhance protection.",
  },
  {
    question: "Do you provide security for one-time events?",
    answer:
      "Yes. We specialize in both short-term and long-term coverage, including concerts, festivals, private parties, and corporate gatherings.",
  },
  {
    question: "Is there a minimum contract duration?",
    answer:
      "We offer flexible contracts ranging from a few hours to multi-year agreements. No long-term commitment is required for short-term needs.",
  },
  {
    question: "What happens in case of an emergency on-site?",
    answer:
      "Our guards are trained in emergency protocols and will respond immediately. We also provide 24/7 escalation support and incident reporting.",
  },
  {
    question: "Can your team support construction site security?",
    answer:
      "Yes. We offer mobile patrols, gate monitoring, equipment protection, and overnight surveillance for construction and industrial sites.",
  },
  {
    question: "How do I start working with Shield Security?",
    answer:
      "It starts with a free risk assessment and consultation. Visit our Contact page or call us to get started.",
  },
  
];

const FAQPage = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          backgroundImage: "url(/images/3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 2 }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#ddd",
              mt: 2,
              fontWeight: 300,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Everything you need to know about our security solutions, deployment, and support.
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ FAQ Section */}
      <Box sx={{ backgroundColor: "#fff", py: 10 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              color:"black",
              fontWeight: "bold",
              textAlign: "center",
              mb: 6,
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Your Questions Answered
          </Typography>

          {faqData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Accordion
                disableGutters
                elevation={0}
                sx={{
                  borderBottom: "1px solid #ddd",
                  "&:before": { display: "none" },
                  backgroundColor: "#fff",
                  px: 0,
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon sx={{ color: "#ff0000", fontSize: "2rem" }} />
                  }
                  sx={{
                    py: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: "#222",
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}

          {/* CTA */}
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Button
              variant="contained"
              href="/contact"
              sx={{
                backgroundColor: "#ff0000",
                color: "#fff",
                fontWeight: "bold",
                px: 5,
                py: 1.5,
                fontSize: "1rem",
                borderRadius: "30px",
                textTransform: "none",
                boxShadow: "0 5px 15px rgba(255, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: "#e60000",
                  boxShadow: "0 8px 25px rgba(255, 0, 0, 0.3)",
                },
              }}
            >
              Still Have Questions?
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FAQPage;
