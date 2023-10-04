import { Box, CardMedia } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ImageCarousel1 from '../../assets/imageCarousel1.png';
import ImageCarousel2 from '../../assets/imageCarousel2.png';

export default function Carrossel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: false,
  };

  const images = [ImageCarousel1, ImageCarousel2];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <Box key={index} sx={{ backgroundImage: `${image}`, width: '100%' }}>
          <CardMedia component="img" image={image} sx={{ width: '100%', height: '50rem' }} />
        </Box>
      ))}
    </Slider>
  );
}
