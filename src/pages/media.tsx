import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import RequestQuote from "@/components/RequestQuote";

const mediaPosts = [
  {
    title: "Shield Security Expands Patrol Coverage to Banff and Canmore",
    date: "April 5, 2025",
    image: "/images/1.jpg", // Suggested: https://unsplash.com/photos/a-group-of-police-officers-standing-on-a-street-yoR6pKxQzN8
    link: "/media/banff-canmore-expansion",
  },
  {
    title: "Shield Security Awarded Best Security Provider of 2024",
    date: "March 20, 2025",
    image: "/images/2.jpg", // Suggested: https://unsplash.com/photos/a-trophy-on-a-pedestal-in-front-of-a-wall-PxM8aeJbzvk
    link: "/media/best-provider-award",
  },
  {
    title: "How Technology Like TrackTik is Transforming Mobile Patrols",
    date: "March 2, 2025",
    image: "/images/2.jpg", // Suggested: https://unsplash.com/photos/person-holding-black-smartphone-XJXWbfSo2f0
    link: "/media/tech-in-patrols",
  },
  {
    title: "Client Testimonial: Shield’s Presence Reduced Theft by 85%",
    date: "February 14, 2025",
    image: "/images/2.jpg", // Suggested: https://unsplash.com/photos/businessman-smiling-in-office-IKAo7xO1pF8
    link: "/media/client-success-story",
  },
  {
    title: "Community Engagement: Security Guard Hosts Safety Workshop at Calgary School",
    date: "January 30, 2025",
    image: "/images/4.jpg", // Suggested: https://unsplash.com/photos/kids-listening-to-a-woman-teach-_dVxl4eE1rk
    link: "/media/community-school-workshop",
  },
  {
    title: "Holiday Patrols Increased Across Alberta Retail Outlets",
    date: "December 18, 2024",
    image: "/images/3.jpg", // Suggested: https://unsplash.com/photos/security-guard-at-shopping-mall-DXyUap8K5N8
    link: "/media/holiday-patrol-increase",
  },
];


const MediaPage = () => {
  
      
  return (
    <>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          backgroundImage: "url(/images/3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
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
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
              mb: 2,
              fontSize: { xs: "2rem", md: "3.5rem" },
            }}
          >
            Media & News
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#ddd", maxWidth: 800, mx: "auto", fontWeight: 300 }}
          >
            Explore stories, press releases, and behind-the-scenes insights from the Shield Security team.
          </Typography>
        </motion.div>
      </Box>
  
      {/* ✅ Intro */}
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Stay Informed & Inspired
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.8,
            fontSize: "1.1rem",
          }}
        >
          Welcome to the Shield Secure Security Media Center — your hub for the latest updates, security insights, and impactful stories from the field.
          Whether you&apos;re a journalist, a client, or just curious, stay tuned for regular updates from our team.
        </Typography>
      </Container>
  
      {/* ✅ Media Posts Grid */}
      <Container sx={{ pb: 10 }}>
        <Grid container spacing={4}>
          {mediaPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    backgroundColor: "#f9f9f9",
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <CardMedia component="img" image={post.image} alt={post.title} height="200" />
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "black", mb: 1 }}
                    >
                      {post.date}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: "black", mb: 2, minHeight: "64px" }}
                    >
                      {post.title}
                    </Typography>
                    <Link href={post.link} passHref>
                      <Button
                        variant="outlined"
                        sx={{
                          borderColor: "#ff0000",
                          color: "black",
                          fontWeight: "bold",
                          textTransform: "none",
                        }}
                      >
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
  
      {/* ✅ CTA Sections */}
      <FinalCTA />
      <RequestQuote />
    </>
  );
  
  
};

export default MediaPage;
