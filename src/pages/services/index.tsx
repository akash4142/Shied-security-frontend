import React from "react";
import { Container, Grid, Typography, Card, CardActionArea, CardMedia, Box } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";

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
const StyledCard = styled(Card)({
  position: "relative",
  overflow: "hidden",
  borderRadius: "10px",
  transition: "0.3s ease-in-out",
  width: "100%",
  height: "500px",
  "&:hover .overlay": {
    opacity: 0,
  },
  "&:hover .image": {
    filter: "brightness(100%) scale(1.05)",
  },
});

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.3s ease-in-out",
  opacity: 1,
});

const ServiceText = styled(Typography)({
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  fontWeight: "bold",
  color: "#fff",
  textTransform: "uppercase",
  fontSize: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  padding: "10px 15px",
  borderRadius: "5px",
  transition: "background-color 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});

const ServicePage = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <section
        style={{
          position: "relative",
          height: "50vh",
          backgroundImage: "url(/images/1.jpg)",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.6)", padding: "30px", borderRadius: "10px" }}>
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
            Our Services
          </Typography>
        </div>
      </section>

      {/* ✅ Services Grid */}
      <Container maxWidth={false} sx={{ padding: "60px 0", width: "100vw" }}>
        <Grid container spacing={3} sx={{ width: "100%", margin: 0 }}>
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
                alignItems: "center",
                padding: "0",
              }}
            >
              <Link href={service.link} passHref>
                <StyledCard>
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
                        transition: "0.3s ease-in-out",
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
