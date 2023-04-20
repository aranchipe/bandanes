import React from "react";
import Slider from "react-slick";

const imagens = [
  "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg",
  "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg",
  "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg",
];

const Carrossel = () => {
  const settings = {
    speed: 5000, // tempo de transição entre as imagens
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // tempo de exibição de cada imagem
  };

  return (
    <Slider {...settings}>
      {imagens.map((imagem) => (
        <div>
          <img src={imagem} alt="imagem" sx={{ width: "200px" }} />
        </div>
      ))}
    </Slider>
  );
};

export default Carrossel;
