import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';


const testimonials = [
  { name: 'John D.', feedback: 'Professional and proactive team. Great experience working with them.' },
  { name: 'Sarah L.', feedback: 'Shield Security gave us peace of mind during a critical event. Highly recommended!' },
  { name: 'Alex M.', feedback: 'The guards were respectful and vigilant. Couldn’t have asked for more.' },
  { name: 'Emily R.', feedback: 'Highly organized and responsive. Exceptional service!' },
  { name: 'Michael S.', feedback: 'Always on time and reliable. Great team to work with.' },
  { name: 'Laura B.', feedback: 'They handled our corporate event flawlessly. Very impressed.' },
  { name: 'Daniel P.', feedback: 'Security staff was friendly and professional. Felt very safe.' },
  { name: 'Nina W.', feedback: 'Excellent communication and execution. Five stars!' },
  { name: 'Tom K.', feedback: 'You can tell they really care about their clients.' },
  { name: 'Olivia J.', feedback: 'From planning to execution, everything was top-notch.' },
];

const settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 700,
  arrows: false,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};

const TestimonialsSection = () => {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', py: 10, px: { xs: 2, sm: 4 }, width: '100vw', overflow: 'hidden' }}>
      <Box sx={{ maxWidth: '100%', mx: 'auto' }}></Box>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', color: '#fff', mb: 6, textAlign: 'center' }}
        >
          Client Testimonials
        </Typography>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} px={2}>
              <Box
                className="testimonial-slide"
                sx={{
                  backgroundColor: '#2c2c2c',
                  color: '#fff',
                  p: 4,
                  borderRadius: 3,
                  minHeight: 200,
                  textAlign: 'center',
                  transition: 'all 0.5s ease-in-out',
                  width:'100%',
                }}
              >
                <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                  “{testimonial.feedback}”
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ mt: 2, fontStyle: 'italic', color: '#bbb' }}
                >
                  – {testimonial.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
    </Box>
  );
};

export default TestimonialsSection;
