
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

const testimonials = [
  {
    name: 'Pamela Horne',
    feedback: 'Sourav and his team have taken care of our security needs for our onsite events since 2024.  They are professional and courteous to our guests and our staff feel safe and supported during the evening.  We have increased our bookings with Shield Security for 2025 and look forward to working with them more this year.',
    rating: 5,
    designation: 'Manager',
    company: 'CornerStone Theatre',
  },
  {
    name: 'PEKA ',
    feedback: 'We have been lucky enough to work with Shield Secure Security for overnight services at 2 condominium properties that PEKA  manages in Canmore.  We highly recommend Shield Secure Security to any condominium or business that may be seeking overnight security services, fire watch, or general security services.',
    rating: 5,
    designation: 'Canmore',
    company: 'PEKA Property',
  },
  {
    name: 'Cecelia Leddy',
    feedback: 'We have used Shield Secure Security for a number of events in Canmore, from National Day for Truth and Reconciliation to our New Year\'s Eve event. The team at Shield is dedicated, reliable and terrific to work with. From great communication to helpful site visits, Shield Secure Security takes pride in their work and has helped my team run large scale public events with peace of mind.',
    rating: 5,
    designation: 'Cultural development Coordinator',
    company: 'Town of Canmore',
  },
  {
    name: 'Aditya Jasrotia',
    feedback: 'Shield Secure is a reliable and professional company. Their team is knowledgeable, responsive, and really cares about providing great service. I highly recommend them for anyone looking for quality security solutions.',
    rating: 5,
    designation: 'Coordinator',
    company: 'City Events',
  },
  {
    name: 'Rachael Carter',
    feedback: 'Working with Shield Secure has been a great experience. Highly recommend them for your next event or long term security needs.',
    rating: 5,
    designation: 'Manager',
    company: 'Canmore downtown hospital',
  },
];

const settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 900,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};

const renderStars = (count: number) =>
  Array.from({ length: 5 }).map((_, i) => (
    <span
      key={i}
      style={{
        color: i < count ? '#ffcc00' : '#555',
        fontSize: '1.2rem',
        marginRight: 2,
      }}
    >
      ★
    </span>
  ));

const TestimonialsSection = () => {
  return (
    <Box
      sx={{
        background: 'radial-gradient(circle at top left, #121416, #0f1114)',
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4 },
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ maxWidth: '1440px', mx: 'auto' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: '#fff',
            mb: 8,
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: 1,
          }}
        >
          Testimonials
        </Typography>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} px={2}>
              <Box
                sx={{
                  background: 'linear-gradient(145deg, #1c1f25, #2a2d33)',
                  color: '#fff',
                  p: { xs: 4, sm: 5 },
                  borderRadius: '18px',
                  minHeight: 280,
                  textAlign: 'left',
                  transition: 'all 0.4s ease-in-out',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  '&:hover': {
                    boxShadow: '0 10px 40px rgba(255, 0, 0, 0.25)',
                    transform: 'translateY(-6px)',
                    border: '1px solid rgba(255, 0, 0, 0.3)',
                  },
                }}
              >
                {/* Quote */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.15rem',
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: '#f2f2f2',
                    fontStyle: 'italic',
                    mb: 3,
                    position: 'relative',
                    '&::before': {
                      //content: '"“"',
                      position: 'absolute',
                      left: -15,
                      top: -10,
                      fontSize: '3rem',
                      color: '#ff0000',
                      opacity: 0.3,
                    },
                    '&::after': {
                      //content: '"”"',
                      position: 'absolute',
                      right: -10,
                      bottom: -15,
                      fontSize: '3rem',
                      color: '#ff0000',
                      opacity: 0.3,
                    },
                  }}
                >
                  {testimonial.feedback}
                </Typography>

                {/* Star rating */}
                <Box sx={{ mb: 2 }}>{renderStars(testimonial.rating)}</Box>

                {/* Name */}
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    color: '#ff4c4c',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    fontSize: '0.95rem',
                  }}
                >
                  – {testimonial.name}
                </Typography>

                {/* Designation and Company */}
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: 'normal',
                    color: '#aaa',
                    fontSize: '0.9rem',
                    mt: 0.5,
                  }}
                >
                  {testimonial.designation}, {testimonial.company}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
