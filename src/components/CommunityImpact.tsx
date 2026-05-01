import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

const sections = [
  {
    title: 'Canada Day & Major Events',
    emoji: '🇨🇦',
    image: '/images/canadaday.jpeg',
    description:
      'We proudly support major events in Canmore, working alongside RCMP and local authorities to ensure safety.',
    points: [
      'Crowd control and public safety',
      'Road closures and access management',
      'Monitoring high-traffic areas',
      'Supporting emergency teams',
    ],
  },
  {
    title: 'Canmore Eagles',
    emoji: '🏒',
    image: '/images/canmoreeagle.jpeg',
    description:
      'Providing game-day security to ensure a safe and enjoyable experience for fans and players.',
    points: [
      'Entry monitoring and access control',
      'Crowd management and fan safety',
      'Professional incident handling',
    ],
  },
  {
    title: 'Safe Park Program',
    emoji: '🅿️',
    image: '/images/parkingday.jpeg',
    description:
      'Supporting Canmore’s Safe Park initiative by offering affordable security services to local workers.',
    points: [
      'Patrols and safety monitoring',
      'Ensuring compliance and site security',
      'Working with Town staff',
    ],
  },
];

const CommunityImpact = () => {
  return (
    <Box sx={{ backgroundColor: '#0b0d10', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* HEADER */}
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            fontWeight: 700,
            textAlign: 'center',
            mb: 2,
          }}
        >
          Community Commitment & Impact
        </Typography>

        <Typography
          sx={{
            color: '#aaa',
            textAlign: 'center',
            mb: 8,
            maxWidth: '650px',
            mx: 'auto',
            fontSize: '1.05rem',
          }}
        >
          Supporting Canmore through events, sports, and community programs with
          reliable, professional security services.
        </Typography>

        {/* CARDS */}
        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: '#12151a',
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.05)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
                  },
                }}
              >
                {/* IMAGE WITH OVERLAY */}
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src={section.image}
                    alt={section.title}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                    }}
                  />

                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      color: '#ff4d4d',
                      fontWeight: 600,
                      mb: 1,
                      fontSize: '1.1rem',
                    }}
                  >
                    {section.emoji} {section.title}
                  </Typography>

                  <Typography
                    sx={{ color: '#bbb', mb: 2, fontSize: '0.95rem' }}
                  >
                    {section.description}
                  </Typography>

                  {/* FIXED LIST */}
                  <Box component="ul" sx={{ pl: 2, m: 0, color: '#888' }}>
                    {section.points.map((p, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{ mb: 0.5, fontSize: '0.9rem' }}
                      >
                        {p}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA SECTION */}
        <Box
          sx={{
            mt: 12,
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
            textAlign: 'center',
          }}
        >
          {/* BACKGROUND IMAGE */}
          <Box
            component="img"
            src="/images/canadaday.jpeg"
            alt="security"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.3)',
            }}
          />

          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              py: { xs: 6, md: 8 },
              px: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: '#fff', fontWeight: 700, mb: 3 }}
            >
              24/7 On-Call Security Response
            </Typography>

            <Typography
              sx={{
                color: '#ccc',
                mb: 5,
                maxWidth: '750px',
                mx: 'auto',
              }}
            >
              Immediate response across Canmore and the Bow Valley. From routine
              checks to urgent incidents, our team is always ready to act.
            </Typography>

            <Grid container spacing={2} justifyContent="center">
              {[
                'False Alarm Response',
                'Property Patrols',
                'Noise Complaints',
                'Emergency Response',
                'Construction Security',
                'Camera Monitoring',
              ].map((item, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Box
                    sx={{
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 2,
                      py: 1.5,
                      px: 2,
                      color: '#eee',
                      fontSize: '0.9rem',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                    }}
                  >
                    {item}
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Typography
              sx={{
                mt: 5,
                color: '#ff4d4d',
                fontWeight: 600,
                fontSize: '1.1rem',
              }}
            >
              📞 (403) 953-1998
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CommunityImpact;