import { Swiper, SwiperSlide } from "swiper/react";

interface Image {
  id: string;
  path: string;
  alt: string;
}

const Photos = () => {
  const images: Array<Image> = [
    {id: '1', path: 'src/assets/images/motivacional1.png', alt: 'Chega de dar desculpas. Bora treinar?'},
    {id: '2', path: 'src/assets/images/motivacional2.png', alt: 'Foco, dedicação, motivação'},
    {id: '3', path: 'src/assets/images/motivacional3.png', alt: 'Trace novos objetivos para sua vida'},
    {id: '4', path: 'src/assets/images/motivacional4.png', alt: 'Conquiste o corpo dos seus sonhos.'},
    {id: '5', path: 'src/assets/images/aulaKaratê.png', alt: 'Foto do treino de Karatê'},
    {id: '6', path: 'src/assets/images/informativo.png', alt: 'Agende seu horário de treino.'},
  ];

  return (
    <div id="photos" className="">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="w-2/4"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img 
              src={item.path} 
              alt={item.alt}
              className="w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Photos