// import Slider from 'react-slick';
// import { Box, Typography } from '@mui/material';

// const testimonials = [
//   { name: 'John D.', feedback: 'Professional and proactive team. Great experience working with them.' },
//   { name: 'Sarah L.', feedback: 'Shield Security gave us peace of mind during a critical event. Highly recommended!' },
//   { name: 'Alex M.', feedback: 'The guards were respectful and vigilant. Couldn’t have asked for more.' },
//   { name: 'Emily R.', feedback: 'Highly organized and responsive. Exceptional service!' },
//   { name: 'Michael S.', feedback: 'Always on time and reliable. Great team to work with.' },
//   { name: 'Laura B.', feedback: 'They handled our corporate event flawlessly. Very impressed.' },
//   { name: 'Daniel P.', feedback: 'Security staff was friendly and professional. Felt very safe.' },
//   { name: 'Nina W.', feedback: 'Excellent communication and execution. Five stars!' },
//   { name: 'Tom K.', feedback: 'You can tell they really care about their clients.' },
//   { name: 'Olivia J.', feedback: 'From planning to execution, everything was top-notch.' },
// ];

// const settings = {
//   dots: true,
//   infinite: true,
//   centerMode: true,
//   centerPadding: '0px',
//   autoplay: true,
//   autoplaySpeed: 5000,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   speed: 900,
//   arrows: false,
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 2,
//         centerMode: false,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         centerMode: false,
//       },
//     },
//   ],
// };

// const TestimonialsSection = () => {
//   return (
//     <Box
//       sx={{
//         background: 'radial-gradient(circle at top left, #121416, #0f1114)',
//         py: { xs: 8, md: 12 },
//         px: { xs: 2, sm: 4 },
//         width: '100%',
//         overflow: 'hidden',
//       }}
//     >
//       <Box sx={{ maxWidth: '1440px', mx: 'auto' }}>
//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: 'bold',
//             color: '#fff',
//             mb: 8,
//             textAlign: 'center',
//             fontSize: { xs: '2rem', md: '2.8rem' },
//             fontFamily: "'Poppins', sans-serif",
//             letterSpacing: 1,
//           }}
//         >
//           What Our Clients Say
//         </Typography>

//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <Box key={index} px={2}>
//               <Box
//                 sx={{
//                   background: 'linear-gradient(145deg, #1c1f25, #2a2d33)',
//                   color: '#fff',
//                   p: { xs: 4, sm: 5 },
//                   borderRadius: '18px',
//                   minHeight: 260,
//                   textAlign: 'left',
//                   transition: 'all 0.4s ease-in-out',
//                   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
//                   border: '1px solid rgba(255, 255, 255, 0.05)',
//                   '&:hover': {
//                     boxShadow: '0 10px 40px rgba(255, 0, 0, 0.25)',
//                     transform: 'translateY(-6px)',
//                     border: '1px solid rgba(255, 0, 0, 0.3)',
//                   },
//                 }}
//               >
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     fontSize: '1.15rem',
//                     fontWeight: 400,
//                     lineHeight: 1.8,
//                     color: '#f2f2f2',
//                     fontStyle: 'italic',
//                     mb: 3,
//                     position: 'relative',
//                     '&::before': {
//                       content: '"“"',
//                       position: 'absolute',
//                       left: -15,
//                       top: -10,
//                       fontSize: '3rem',
//                       color: '#ff0000',
//                       opacity: 0.3,
//                     },
//                     '&::after': {
//                       content: '"”"',
//                       position: 'absolute',
//                       right: -10,
//                       bottom: -15,
//                       fontSize: '3rem',
//                       color: '#ff0000',
//                       opacity: 0.3,
//                     },
//                   }}
//                 >
//                   {testimonial.feedback}
//                 </Typography>

//                 <Typography
//                   variant="subtitle2"
//                   sx={{
//                     mt: 2,
//                     fontStyle: 'normal',
//                     fontWeight: 'bold',
//                     color: '#ff4c4c',
//                     textTransform: 'uppercase',
//                     letterSpacing: 1,
//                     fontSize: '0.95rem',
//                   }}
//                 >
//                   – {testimonial.name}
//                 </Typography>
//               </Box>
//             </Box>
//           ))}
//         </Slider>
//       </Box>
//     </Box>
//   );
// };

// export default TestimonialsSection;
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

const testimonials = [
  {
    name: 'John D.',
    feedback: 'Professional and proactive team. Great experience working with them.',
    rating: 5,
    designation: 'Operations Manager',
    company: 'Prime Logistics',
  },
  {
    name: 'Sarah L.',
    feedback: 'Shield Security gave us peace of mind during a critical event. Highly recommended!',
    rating: 5,
    designation: 'Event Director',
    company: 'Summit Productions',
  },
  {
    name: 'Alex M.',
    feedback: 'The guards were respectful and vigilant. Couldn’t have asked for more.',
    rating: 4,
    designation: 'Property Manager',
    company: 'Urban Living Rentals',
  },
  {
    name: 'Emily R.',
    feedback: 'Highly organized and responsive. Exceptional service!',
    rating: 5,
    designation: 'Coordinator',
    company: 'City Events',
  },
  {
    name: 'Michael S.',
    feedback: 'Always on time and reliable. Great team to work with.',
    rating: 5,
    designation: 'Branch Head',
    company: 'MetroWare',
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
                      content: '"“"',
                      position: 'absolute',
                      left: -15,
                      top: -10,
                      fontSize: '3rem',
                      color: '#ff0000',
                      opacity: 0.3,
                    },
                    '&::after': {
                      content: '"”"',
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
