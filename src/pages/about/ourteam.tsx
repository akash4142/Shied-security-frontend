import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";


const tabStyles = {
  fontWeight: "bold",
  Width:"100%",
  background:"white",
  color: "#111",
  fontSize: "16px",
  textTransform: "none",
};

const OurTeamPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          height: "80vh",
          backgroundImage: "url(/images/2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(42x)",
            zIndex: 1,
          }}
        />
        <Box sx={{ zIndex: 2 }}>
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "4rem" },
              letterSpacing: 1,
              fontFamily: "'Bebas Neue', sans-serif",
              textShadow: "3px 3px 10px rgba(0,0,0,0.6)",
            }}
          >
            Meet Our Team
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              mt: 2,
              fontWeight: 300,
              maxWidth: 700,
              mx: "auto",
              textShadow: "1px 1px 6px rgba(0,0,0,0.4)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Explore the people that make Shield Secure strong, safe, and reliable.
          </Typography>
        </Box>
      </Box>

      <Container sx={{ py: 8 }}>
        {/* ✅ Tabs Navigation */}
        <Tabs
          value={tabIndex}
          onChange={(e, newValue) => setTabIndex(newValue)}
          centered
          sx={{ mb: 6 }} 
        >
          <Tab label="General Manager" sx={tabStyles} />
          <Tab label="HR & Accountant" sx={tabStyles} />
          <Tab label="Frontline Guards" sx={tabStyles} />
        </Tabs>

        {/* ✅ General Manager */}
        {tabIndex === 0 && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={4}>
                <Avatar
                  src="/team/sourav.jpg"
                  alt="Sourav Gupta"
                  sx={{ width: 200, height: 200, mx: "auto", border: "5px solid #ff0000" }}
                />
                <Typography textAlign="center" variant="h6" fontWeight="bold" mt={2}>
                  Sourav Gupta
                </Typography>
                <Typography textAlign="center" variant="body2" sx={{ color: "#888" }}>
                  Founder & General Manager
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="body1" sx={{ color: "#", lineHeight: 1.9 }}>
                  Sourav is the founder and General Manager of Shield Secure Ltd. Sourav has always had an interest in security
                  and enforcement and focused his early career on understanding the principals of maintaining peace and order.
                  <br /><br />
                  Immigrating to Canada in 2017, Sourav brings a well-rounded set of skills to Shield Secure. Educated at one of
                  the best English private schools in northern India, he honed his skills in accounting and administration,
                  allowing him to successfully oversee the financial and human resources aspect of Shield Secure. Sourav has
                  worked extensively in the security industry including with Alberta Health Services as a Protective Services
                  Officer and with the Town of Canmore as a Municipal Enforcement Officer.
                  <br /><br />
                  Sourav has a very intuitive understanding of human nature, foreseeing and defusing potential problems and in
                  the de-escalation of altercations. Sourav ensures that all of his team members are well trained, professional,
                  and customer service oriented.
                  <br /><br />
                  Sourav is committed to ethical practices, honest, lawful processes along with open communication. His desire
                  to offer his clients trustworthy and reliable service is paramount and his comprehensive approach ensures his
                  clients, and their assets remain safe and secure.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        )}

        {/* ✅ HR & Accountant */}
        {tabIndex === 1 && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Grid container spacing={4} justifyContent="center">
              {[
                {
                  name: "Swati Sharma",
                  role: "HR & Recruitment Lead",
                  img: "/team/swati.jpg",
                },
              ].map((staff, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ p: 4, borderRadius: 4, textAlign: "center", boxShadow: 3 }}>
                    <Avatar
                      alt={staff.name}
                      src={staff.img}
                      sx={{ width: 110, height: 110, mx: "auto", mb: 2, border: "4px solid #ff0000" }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {staff.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {staff.role}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        )}

        {/* ✅ Guards */}
        {tabIndex === 2 && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Grid container spacing={4} justifyContent="center">
              {[
                { name: "Rajiv Singh", img: "/guards/guard1.jpg" },
                { name: "Jessica Moore", img: "/guards/guard2.jpg" },
                { name: "Anthony Lee", img: "/guards/guard3.jpg" },
              ].map((guard, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ p: 3, borderRadius: 3, textAlign: "center", boxShadow: 3 }}>
                    <Avatar
                      src={guard.img}
                      alt={guard.name}
                      sx={{ width: 100, height: 100, mx: "auto", mb: 2, border: "3px solid #ccc" }}
                    />
                    <Typography variant="subtitle1" fontWeight={600}>
                      {guard.name}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default OurTeamPage;