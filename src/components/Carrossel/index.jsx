import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import halloween from "../../assets/halloween.png";
import halloween_pc from "../../assets/halloween_pc.png";
import novidade from "../../assets/novidade.png";

const Carrossel = () => {
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

  const images = [halloween_pc, novidade];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{ backgroundImage: `${image}`, width: "100vw" }}
        >
          <img src={image} alt={`Imagem ${index}`} style={{ width: "100%" }} />
        </div>
      ))}
    </Slider>
  );
};

export default Carrossel;
