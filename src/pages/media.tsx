import React from "react";
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import Link from "next/link";

const mediaPosts = [
  {
    title: "Shield Security Launches New Operations in Calgary",
    date: "March 1, 2025",
    image: "/media/calgary-launch.jpg",
    link: "/media/calgary-launch",
  },
  {
    title: "Behind the Scenes: How Our Patrol Team Operates",
    date: "February 15, 2025",
    image: "/media/patrol-team.jpg",
    link: "/media/patrol-behind-scenes",
  },
  {
    title: "Client Spotlight: Retail Security Success Story",
    date: "January 10, 2025",
    image: "/media/retail-success.jpg",
    link: "/media/retail-security-success",
  },
];

const MediaPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "45vh",
          backgroundImage: "url(/media-banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
            Media & News
          </Typography>
          <Typography variant="h6" sx={{ color: "#ddd" }}>
            Stories, announcements, and updates from Shield Security
          </Typography>
        </div>
      </section>

      {/* Intro */}
      <Container sx={{ padding: "50px 0", textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold", marginBottom: "20px" }}>
          Stay Up to Date
        </Typography>
        <Typography variant="body1" sx={{ color: "#ccc", maxWidth: "800px", margin: "auto" }}>
          Explore our latest stories, client highlights, press releases, and insights into how we protect our communities and businesses.
        </Typography>
      </Container>

      {/* Media Grid */}
      <Container sx={{ paddingBottom: "60px" }}>
        <Grid container spacing={4}>
          {mediaPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ backgroundColor: "#222", color: "#fff" }}>
                <CardMedia component="img" image={post.image} alt={post.title} height="200" />
                <CardContent>
                  <Typography variant="subtitle2" sx={{ color: "#999", mb: 1 }}>
                    {post.date}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    {post.title}
                  </Typography>
                  <Link href={post.link} passHref>
                    <Button variant="outlined" sx={{ color: "#ff0000", borderColor: "#ff0000" }}>
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#ff0000", padding: "50px 0", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff", marginBottom: "20px" }}>
          Follow Us for the Latest Updates
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#fff", color: "#ff0000", fontWeight: "bold" }}
          href="/contact"
        >
          Contact Our Media Team
        </Button>
      </section>
    </>
  );
};

export default MediaPage;
