import React from "react";
import { Container, Grid, Typography, Card, CardContent, Avatar, Button } from "@mui/material";

const teamMembers = [
  {
    name: "Sarah Thompson",
    role: "Chief Operations Officer",
    img: "/team/sarah.jpg",
    bio: "Sarah leads Shield Security’s operations with over 15 years of experience in the industry.",
  },
  {
    name: "David Mitchell",
    role: "Director of Field Operations",
    img: "/team/david.jpg",
    bio: "David oversees daily security operations and ensures client satisfaction on the ground.",
  },
  {
    name: "Emily Chan",
    role: "HR & Recruitment Lead",
    img: "/team/emily.jpg",
    bio: "Emily brings top talent into the team and fosters a strong internal culture.",
  },
];

const OurTeamPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "50vh",
          backgroundImage: "url(/team-banner.jpg)",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.6)", padding: "30px", borderRadius: "10px" }}>
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
            Meet Our Team
          </Typography>
          <Typography variant="h6" sx={{ color: "#ddd" }}>
            The people who lead Shield Security with integrity and experience.
          </Typography>
        </div>
      </section>

      {/* Intro */}
      <Container sx={{ padding: "50px 0", textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold", marginBottom: "20px" }}>
          Experienced. Professional. Committed.
        </Typography>
        <Typography variant="body1" sx={{ color: "#ccc", maxWidth: "800px", margin: "auto" }}>
          Our leadership team brings decades of combined experience in the security industry. We are proud to offer expert-led, client-focused solutions across Canada.
        </Typography>
      </Container>

      {/* Team Members */}
      <Container sx={{ paddingBottom: "50px" }}>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ backgroundColor: "#222", color: "#fff", textAlign: "center", padding: "20px" }}>
                <Avatar
                  alt={member.name}
                  src={member.img}
                  sx={{ width: 120, height: 120, margin: "auto", marginBottom: "20px" }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#ff0000", fontWeight: "medium", mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2">{member.bio}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <section style={{ backgroundColor: "#ff0000", padding: "50px 0", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff", marginBottom: "20px" }}>
          Want to Join Our Team?
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#fff", color: "#ff0000", fontWeight: "bold", fontSize: "16px" }}
          href="/about/careers"
        >
          View Careers
        </Button>
      </section>
    </>
  );
};

export default OurTeamPage;
