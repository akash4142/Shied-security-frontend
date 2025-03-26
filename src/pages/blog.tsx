import React from "react";
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import Link from "next/link";

const blogPosts = [
  {
    title: "Top 5 Tips for Hiring Security Guards",
    date: "March 5, 2025",
    image: "/blog/hiring-tips.jpg",
    link: "/blog/hiring-security-guards",
    snippet: "Choosing the right security personnel is essential for your business. Here are 5 tips to help you hire the best.",
  },
  {
    title: "Understanding Mobile Patrol Services",
    date: "February 20, 2025",
    image: "/blog/mobile-patrol.jpg",
    link: "/blog/mobile-patrol-benefits",
    snippet: "Mobile patrols are an effective and flexible way to maintain safety across large areas. Here's what you should know.",
  },
  {
    title: "Why Event Security Is Crucial in 2025",
    date: "January 30, 2025",
    image: "/blog/event-security.jpg",
    link: "/blog/event-security-importance",
    snippet: "Learn why professional event security is now more important than ever for both private and public gatherings.",
  },
];

const BlogPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "45vh",
          backgroundImage: "url(/blog-banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.6)", padding: "30px", borderRadius: "10px" }}>
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
            Our Blog
          </Typography>
          <Typography variant="h6" sx={{ color: "#ddd" }}>
            Insights, tips, and industry news from Shield Security
          </Typography>
        </div>
      </section>

      {/* Blog Cards */}
      <Container sx={{ padding: "50px 0" }}>
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ backgroundColor: "#222", color: "#fff" }}>
                <CardMedia component="img" image={post.image} alt={post.title} height="200" />
                <CardContent>
                  <Typography variant="subtitle2" sx={{ color: "#999", mb: 1 }}>
                    {post.date}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {post.snippet}
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
    </>
  );
};

export default BlogPage;
