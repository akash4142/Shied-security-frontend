import { Box, Container, Typography } from '@mui/material';

const CommunityImpact = () => {
  return (
    <Box sx={{ backgroundColor: '#0f1114', py: 10 }}>
      <Container maxWidth="lg">

        {/* SECTION TITLE */}
        <Typography
          variant="h3"
          sx={{ color: '#fff', fontWeight: 700, mb: 2, textAlign: 'center' }}
        >
          Community Commitment & Local Impact
        </Typography>

        <Typography
          sx={{
            color: '#aaa',
            textAlign: 'center',
            mb: 6,
            maxWidth: '700px',
            mx: 'auto',
          }}
        >
          Proudly supporting Canmore through events, sports, and community programs.
        </Typography>

        {/* BLOCK 1 */}
        <Box sx={{ mb: 8 }}>
          <Typography sx={{ color: '#ff4d4d', fontWeight: 600, mb: 2 }}>
            🇨🇦 Canada Day & Major Events
          </Typography>

          <Typography sx={{ color: '#ccc', mb: 2 }}>
            We proudly support Canada Day celebrations and major events in Canmore,
            working alongside RCMP, Community Peace Officers, and Town staff.
          </Typography>

          <Typography sx={{ color: '#888' }}>
            • Crowd control and public safety <br />
            • Road closures and access management <br />
            • Monitoring high-traffic areas <br />
            • Supporting emergency teams
          </Typography>

          <Typography sx={{ color: '#aaa', mt: 2, fontStyle: 'italic' }}>
            “Responsive, knowledgeable, and truly cares about clients.”
          </Typography>
        </Box>

        {/* BLOCK 2 */}
        <Box sx={{ mb: 8 }}>
          <Typography sx={{ color: '#ff4d4d', fontWeight: 600, mb: 2 }}>
            🏒 Canmore Eagles
          </Typography>

          <Typography sx={{ color: '#ccc', mb: 2 }}>
            We provide security at every home game, ensuring a safe and enjoyable
            environment for fans, players, and staff.
          </Typography>

          <Typography sx={{ color: '#888' }}>
            • Entry monitoring and access control <br />
            • Crowd management and fan safety <br />
            • Handling incidents professionally
          </Typography>

          <Typography sx={{ color: '#aaa', mt: 2, fontStyle: 'italic' }}>
            “An extremely valuable part of our game day operations.”
          </Typography>
        </Box>

        {/* BLOCK 3 */}
        <Box sx={{ mb: 8 }}>
          <Typography sx={{ color: '#ff4d4d', fontWeight: 600, mb: 2 }}>
            🅿️ Safe Park Program
          </Typography>

          <Typography sx={{ color: '#ccc', mb: 2 }}>
            Supporting Canmore’s Safe Park program by providing security services
            at minimal cost to assist local workers.
          </Typography>

          <Typography sx={{ color: '#888' }}>
            • Patrols and safety monitoring <br />
            • Ensuring compliance and site security <br />
            • Working closely with Town staff
          </Typography>

          <Typography sx={{ color: '#aaa', mt: 2, fontStyle: 'italic' }}>
            “Supportive, collaborative, and ensures everything runs smoothly.”
          </Typography>
        </Box>

        {/* 🔥 CTA SECTION */}
        <Box
          sx={{
            mt: 10,
            p: 5,
            borderRadius: 3,
            background: 'linear-gradient(145deg, #1a1d22, #111)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: '#fff', fontWeight: 700, mb: 2 }}
          >
            24/7 On-Call Security in the Bow Valley
          </Typography>

          <Typography sx={{ color: '#ccc', mb: 3 }}>
            Serving Canmore, Banff, Harvie Heights, Dead Man’s Flats, and Exshaw.
            We protect hotels, construction sites, vacant properties, and respond
            to emergencies anytime—day or night.
          </Typography>

          <Typography sx={{ color: '#ff4d4d', fontWeight: 600, mb: 3 }}>
            Call today: (403) 953-1998
          </Typography>

          {/* <Button
            variant="contained"
            sx={{
              backgroundColor: '#ff0000',
              px: 5,
              py: 1.5,
              borderRadius: '30px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#cc0000',
              },
            }}
          >
            Request Service Now
          </Button> */}
        </Box>

      </Container>
    </Box>
  );
};

export default CommunityImpact;