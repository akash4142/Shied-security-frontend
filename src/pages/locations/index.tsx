import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { motion } from "framer-motion";

// ✅ Location Data
const locationsData = [
  { name: "Calgary", img: "/images/canmore.jpg", link: "/locations/calgary" },
  { name: "Banff", img: "/images/calgary.jpg", link: "/locations/banff" },
  { name: "Canmore", img: "/images/canmore.jpg", link: "/locations/canmore" },
  { name: "Cochrane", img: "/images/calgary.jpg", link: "/locations/cochrane" },
  { name: "Exshaw", img: "/images/canmore.jpg", link: "/locations/exshaw" },
];

// ✅ Styled Components (same as services)
const StyledCard = styled(motion(Card))({
  position: "relative",
  overflow: "hidden",
  borderRadius: "0px",
  height: "500px",
  width: "100%",
  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
  cursor: "pointer",
  transition: "transform 0.4s ease",
  "&:hover": {
    transform: "scale(1.02)",
  },
  "&:hover .overlay": {
    backdropFilter: "blur(2px)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});

const CardOverlay = styled("div")({
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  //backdropFilter: "blur(1.5px)",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  paddingBottom: "30px",
  transition: "all 0.3s ease-in-out",
  zIndex: 2,
});

const LocationText = styled(Typography)({
  color: "#fff",
  fontSize: "1.4rem",
  fontWeight: 700,
  fontFamily: "'Poppins', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "1px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "10px 20px",
  borderRadius: "30px",
});

const SectionTitle = styled(Typography)({
  fontSize: "2.8rem",
  fontWeight: 700,
  letterSpacing: "1px",
  textAlign: "center",
  color: "#111",
  fontFamily: "'Poppins', sans-serif",
  marginBottom: "30px",
});

const SubHeading = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: 400,
  maxWidth: "900px",
  margin: "40px auto",
  textAlign: "center",
  color: "#333",
  lineHeight: 1.7,
  fontFamily: "'Poppins', sans-serif",
});

// ✅ Page Component
const LocationsPage = () => {
  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "85vh",
          backgroundImage: "url(/images/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          zIndex: 1,
        }}
      >
        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
            zIndex: 2,
          }}
        />
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 3 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "4rem" },
              letterSpacing: "2px",
              textTransform: "uppercase",
              textShadow: "4px 4px 12px rgba(0,0,0,0.8)",
              mb: 2,
              fontFamily: "'Bebas Neue', 'Poppins', sans-serif",
            }}
          >
            Our Locations
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#eee",
              maxWidth: "700px",
              mx: "auto",
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.2rem" },
              textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Serving Western Canada’s communities with excellence and presence.
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Section Title */}
      <Box sx={{ py: 10, px: { xs: 2, sm: 4, md: 8 }, textAlign: "center" }}>
        <SectionTitle>Locations We Serve</SectionTitle>
        <SubHeading>
          Explore our security presence in key areas across Alberta and British Columbia. Click a location to learn more about our local services.
        </SubHeading>
      </Box>

      {/* ✅ Location Cards */}
      <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, pb: 12 }}>
        <Grid container spacing={4}>
          {locationsData.map((location, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link href={location.link} passHref>
                <StyledCard
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CardActionArea sx={{ height: "100%", position: "relative" }}>
                    <CardMedia
                      component="img"
                      image={location.img}
                      alt={location.name}
                      className="image"
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        transition: "all 0.4s ease-in-out",
                      }}
                    />
                    <CardOverlay className="overlay">
                      <LocationText>{location.name}</LocationText>
                    </CardOverlay>
                  </CardActionArea>
                </StyledCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LocationsPage;
