import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const sections = [
  {
    title: "Preface",
    content:
      "At Shield Security, safeguarding personal and sensitive information is a shared responsibility among all team members. This policy outlines our privacy standards, particularly in relation to any services provided to the Government of British Columbia, in accordance with the Freedom of Information and Protection of Privacy Act (FOIPPA).",
  },
  {
    title: "Key Definitions",
    content: (
      <>
        <strong>Confidentiality Agreement:</strong> Agreement requiring Shield Security personnel to comply with privacy laws, including FOIPPA.<br /><br />
        <strong>Contact Information:</strong> Business contact details including name, title, email, and phone number.<br /><br />
        <strong>Personal Information:</strong> Identifiable data about an individual, excluding business contact details.<br /><br />
        <strong>Device:</strong> Any digital hardware used to access or store protected information.<br /><br />
        <strong>Facilities:</strong> Authorized Shield Security locations where data and systems are stored or accessed.<br /><br />
        <strong>Protected Information:</strong> Any personal or confidential information that must be protected under law or agreement.<br /><br />
        <strong>Record:</strong> Any document or electronic file containing protected information created or collected under a contract.<br />
      </>
    ),
  },
  {
    title: "Privacy & Information Sharing",
    content:
      "Shield Security ensures that all staff handling confidential information receive comprehensive privacy training before beginning their assignments. This includes understanding privacy laws, recognizing breaches, and reporting incidents swiftly and appropriately.",
  },
  {
    title: "Information Sharing Principles",
    content: (
      <>
        <strong>Right Information:</strong> Collect only what is needed — accurate, complete, and relevant.<br />
        <strong>Right Person:</strong> Grant access only to those whose roles require it.<br />
        <strong>Right Purpose:</strong> Use personal information solely for business-related purposes.<br />
        <strong>Right Time:</strong> Provide access in a timely manner while meeting compliance standards.<br />
        <strong>Right Way:</strong> Protect data with confidentiality and integrity.<br />
        <strong>Right Storage:</strong> Keep client data securely segregated from Shield’s own records.
      </>
    ),
  },
  {
    title: "Preventing Information Incidents",
    content:
      "Shield Security follows best practices to prevent breaches, including password security, workstation locking, document shredding, secure transmission methods, and encrypted devices. We ensure that all staff understand data classification and handling procedures, especially when working remotely.",
  },
  {
    title: "Information Incident Response (3RP)",
    content: (
      <>
        <strong>Report:</strong> Immediately notify the contract manager and call the designated incident line.<br />
        <strong>Recover:</strong> Act swiftly to retrieve exposed data, prioritizing employee safety.<br />
        <strong>Remediate:</strong> Notify individuals if there&apos;s a risk of harm, fraud, or reputational damage.<br />
        <strong>Prevent:</strong> Implement stronger controls and raise awareness to mitigate future risks.
      </>
    ),
  },
  {
    title: "Access & Authentication",
    content:
      "Shield implements strict user verification procedures before granting access to protected systems or information. We use complex password requirements, limit login attempts, and enforce session timeouts to ensure systems remain secure. Passwords must be at least 8 characters long with mixed cases, numbers, and symbols, and are changed semi-annually.",
  },
  {
    title: "Records Management & Storage",
    content:
      "All records containing personal or confidential information are securely stored within Canada. Shield ensures proper classification, access logging, and eventual disposal in accordance with the NIST 800-88 standard. Records are not destroyed until written instruction is received and are always made accessible to individuals affected by decisions for a minimum of one year.",
  },
  {
    title: "Cybersecurity & Threat Prevention",
    content:
      "Employees are trained to identify phishing emails, social engineering tactics, and cybersecurity threats. Shield enforces encrypted connections, secure Wi-Fi usage, and VPNs to safeguard data integrity, especially in public or offsite environments.",
  },
  {
    title: "Additional Resources",
    content: (
      <>
        - Privacy and Information Sharing Awareness Training Manual<br />
        - Working Outside the Workplace Policy<br />
        - Freedom of Information & Protection of Privacy (FOIPPA) Guide<br />
        - Cybersecurity & Risk Assessment Best Practices
      </>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        For questions or concerns related to this Privacy Policy:<br />
        📧 <strong>shieldsecure82@gmail.com</strong><br />
        📞 <strong>+1 403-953-1998</strong>
      </>
    ),
  },
];

const PrivacyPolicyPage = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          backgroundImage: "url(/images/ourmission.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
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
          initial={{ opacity: 0, y: 20 }}
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
              textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
            }}
          >
            Privacy Policy
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Main Content Section */}
      <Box sx={{ backgroundColor: "#fff", py: 10 }}>
        <Container maxWidth="md" sx={{ color: "#111" }}>
          {sections.map((section, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box mb={6}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#111",
                    fontWeight: "bold",
                    mb: 1,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#333",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {section.content}
                </Typography>
              </Box>
            </motion.div>
          ))}

          <Typography
            variant="body2"
            sx={{ color: "#555", mt: 6, fontStyle: "italic", textAlign: "center" }}
          >
            Last updated: March 23, 2025
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default PrivacyPolicyPage;
