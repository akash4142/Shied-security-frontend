import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FAQPage = () => {
  const faqData = [
    {
      question: "What services do security companies offer?",
      answer: "Security companies like Shield Security offer a wide range of services including uniformed guards, mobile patrols, event security, CCTV monitoring, loss prevention, access control, and more."
    },
    {
      question: "How do I choose the right security provider?",
      answer: "Look for licensed, experienced providers who offer customization, transparency, and strong client support. Check reviews and ensure they provide real-time reporting and scalable solutions."
    },
    {
      question: "Can security services be customized?",
      answer: "Yes, Shield Security offers fully customizable plans to suit your business needs, risk level, hours of operation, and location."
    },
    {
      question: "What qualifications do security guards need?",
      answer: "Guards must hold a valid provincial security license and undergo training in areas like conflict de-escalation, emergency response, and customer service."
    },
    {
      question: "Are security providers in Canada regulated?",
      answer: "Yes, security providers must be licensed and regulated by provincial agencies. All Shield Security guards comply with local requirements."
    },
    {
      question: "How do I measure the effectiveness of security measures?",
      answer: "We provide reports, KPIs, incident logs, and real-time tracking tools through platforms like TrackTik to help you assess impact."
    },
    {
      question: "What level of support can I expect from Shield Security?",
      answer: "24/7 client support with access to a dedicated account manager, real-time updates, and immediate escalation procedures."
    },
    {
      question: "What type of reports can I expect from Shield Security?",
      answer: "Detailed incident reports, shift summaries, patrol verification, entry logs, and daily activity logs depending on service."
    },
    {
      question: "What do Security Guards do on patrols?",
      answer: "They inspect entry points, monitor surveillance feeds, report hazards, enforce policies, and ensure the safety of the premises."
    },
    {
      question: "What’s the difference between Uniform guards and Tactical guards?",
      answer: "Uniform guards are suited for general presence and customer interaction, while tactical guards are trained for high-risk, high-alert scenarios requiring enhanced gear and preparation."
    },
    {
      question: "What type of businesses do you provide security for?",
      answer: "We serve retail, hospitality, healthcare, industrial, construction, residential, education, and government sectors."
    },
    {
      question: "What's the minimum notice needed for urgent guard requests?",
      answer: "We can often deploy within hours, but recommend 24-hour notice when possible. Contact us for urgent support."
    },
    {
      question: "How well trained are Shield Security guards?",
      answer: "All guards complete Shield Academy training, covering topics such as mental health response, conflict resolution, and customer care."
    },
    {
      question: "What is Risk Assessment?",
      answer: "Risk assessment involves evaluating your site’s vulnerabilities and needs to create an effective security strategy."
    },
    {
      question: "What is your policy around Diversity and Inclusion?",
      answer: "We are proud of our inclusive hiring practices and diverse team, and we provide cultural sensitivity training to all staff."
    },
    {
      question: "I am a job seeker, why should I work at Shield Security?",
      answer: "We offer continuous training, flexible schedules, advancement opportunities, and a positive team culture."
    },
    {
      question: "Do I need a license to work in the security industry?",
      answer: "Yes, a provincial security license is required. We guide all recruits through the application process."
    },
    {
      question: "I’m a Canadian Forces veteran, is security work a good fit?",
      answer: "Absolutely. Many veterans excel in this field thanks to their discipline and situational awareness."
    },
    {
      question: "How do I apply for a job at Shield Security?",
      answer: "Visit our Careers page or search Shield Security on Indeed. We only accept applications submitted through those channels."
    },
    {
      question: "When can I get in contact with Shield Security?",
      answer: "Our team is available 24/7 for service inquiries or emergencies. Contact us via our website or emergency line."
    }
  ];

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          backgroundImage: "url(/images/3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ backgroundColor: "rgba(0,0,0,0.6)", p: 4, borderRadius: 2 }}>
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" sx={{ color: "#ddd", mt: 2 }}>
            Common Security Questions Answered
          </Typography>
        </Box>
      </Box>

      {/* FAQ Content */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {faqData.map((item, idx) => (
            <Grid item xs={12} key={idx}>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" fontWeight="bold">
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQPage;
