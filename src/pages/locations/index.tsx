import React from "react";
import { Container, Grid, Typography, Card, CardActionArea, CardMedia, Box } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";

const locationsData = [
  { name: "Calgary", img: "/images/canmore.jpg", link: "/locations/calgary" },
  { name: "Banff", img: "/images/calgary.jpg", link: "/locations/banff" },
  { name: "Canmore", img: "/images/canmore.jpg", link: "/locations/canmore" },
  { name: "Cochrane", img: "/images/calgary.jpg", link: "/locations/cochrane" },
  { name: "Exshaw", img: "/images/canmore.jpg", link: "/locations/exshaw" },
];

const StyledCard = styled(Card)({
  position: "relative",
  overflow: "hidden",
  borderRadius: "10px",
  transition: "0.3s ease-in-out",
  width: "100%",
  height: "500px",
  "&:hover .overlay": {
    opacity: 0, // Makes overlay fully transparent on hover
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
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark background initially
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.3s ease-in-out",
  opacity: 1,
});

const LocationText = styled(Typography)({
  position: "absolute",
  bottom: "20px", // Moves text to the bottom of the card
  left: "50%",
  transform: "translateX(-50%)",
  fontWeight: "bold",
  color: "#fff",
  textTransform: "uppercase",
  fontSize: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Background for better readability
  padding: "10px 15px",
  borderRadius: "5px",
  transition: "background-color 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Slightly lighter on hover
  },
});

const LocationsPage = () => {
  return (
    <>
      {/* Hero Section */}
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
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>Our Locations</Typography>
        </div>
      </section>

      {/* Locations Grid */}
      <Container maxWidth={false} sx={{ padding: "60px 0", width: "100vw" }}>
        <Grid 
          container 
          spacing={3} // Adds space between columns and rows
          sx={{ width: "100%", margin: 0 }}
        >
          {locationsData.map((location, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4} // Ensures exactly 3 images per row
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0",
              }}
            >
              <Link href={location.link} passHref>
                <StyledCard>
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
                        filter: "brightness(80%)",
                        transition: "0.3s ease-in-out",
                      }}
                    />
                    {/* Overlay that becomes transparent on hover */}
                    <Overlay className="overlay" />
                    {/* Location text that stays visible */}
                    <LocationText>{location.name}</LocationText>
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

export default LocationsPage;
