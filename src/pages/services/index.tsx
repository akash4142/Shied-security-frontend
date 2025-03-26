import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { motion } from "framer-motion";

// ✅ Service Data
const servicesData = [
  { name: "Uniformed Security", img: "/images/canmore.jpg", link: "/services/Uniformed" },
  { name: "Event Security", img: "/images/calgary.jpg", link: "/services/Event" },
  { name: "Mobile Security", img: "/images/calgary.jpg", link: "/services/Mobile" },
  { name: "Loss Prevention", img: "/images/calgary.jpg", link: "/services/Loss" },
  { name: "Patrol Security", img: "/images/calgary.jpg", link: "/services/Patrol" },
  { name: "Tactical Security", img: "/images/canmore.jpg", link: "/services/Tactical" },
];

// ✅ Styled Components
const StyledCard = styled(motion(Card))({
  position: "relative",
  overflow: "hidden",
  borderRadius: "20px",
  height: "500px",
  width: "100%",
  background: "rgba(28,31,37,0.7)",
  backdropFilter: "blur(6px)",
  transition: "all 0.4s ease-in-out",
  boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
  "&:hover .overlay": {
    opacity: 0,
  },
  "&:hover .image": {
    filter: "brightness(100%) scale(1.05)",
    transform: "scale(1.05)",
  },
});

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.4s ease-in-out",
  opacity: 1,
  zIndex: 2,
});

const ServiceText = styled(Typography)(({  }) => ({
  position: "absolute",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  fontWeight: 700,
  color: "#fff",
  textTransform: "uppercase",
  fontSize: "1.25rem",
  letterSpacing: "1px",
  padding: "12px 24px",
  borderRadius: "12px",
  backdropFilter: "blur(4px)",
  zIndex: 3,
  fontFamily: "'Poppins', sans-serif",
}));

const ServicePage = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <section
        style={{
          position: "relative",
          height: "70vh",
          backgroundImage: "url(/images/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "40px",
          paddingTop: "100px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px 40px",
            borderRadius: "10px",
            textAlign: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: 1,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "#ddd",
              fontSize: "1.1rem",
              fontWeight: 300,
              maxWidth: "700px",
              mx: "auto",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Explore our tailored security solutions crafted to protect what matters most — your people, your assets, and your peace of mind.
          </Typography>
        </div>
      </section>

      {/* ✅ Services Grid */}
      <Container maxWidth="xl" sx={{ py: 12 }}>
        <Grid container spacing={5} justifyContent="center">
          {servicesData.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link href={service.link} passHref>
                <StyledCard
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <CardActionArea sx={{ height: "100%", position: "relative" }}>
                    <CardMedia
                      component="img"
                      image={service.img}
                      alt={service.name}
                      className="image"
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        filter: "brightness(80%)",
                        transition: "all 0.4s ease-in-out",
                      }}
                    />
                    <Overlay className="overlay" />
                    <ServiceText>{service.name}</ServiceText>
                  </CardActionArea>
                </StyledCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ServicePage;
