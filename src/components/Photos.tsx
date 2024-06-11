import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
interface Image {
  id: string;
  path: string;
  alt: string;
}

const Photos = () => {
  const images: Array<Image> = [
    {
      id: "1",
      path: "/images/motivacional1.png",
      alt: "Chega de dar desculpas. Bora treinar?",
    },
    { id: "2", path: "/images/legpress.png", alt: "Colocação do Pé Leg Press" },
    {
      id: "2",
      path: "/images/motivacional2.png",
      alt: "Foco, dedicação, motivação",
    },
    {
      id: "3",
      path: "/images/motivacional3.png",
      alt: "Trace novos objetivos para sua vida",
    },
    {
      id: "4",
      path: "/images/motivacional4.png",
      alt: "Conquiste o corpo dos seus sonhos.",
    },
    {
      id: "5",
      path: "/images/aulaKaratê.png",
      alt: "Foto do treino de Karatê",
    },
    {
      id: "6",
      path: "/images/informativo.png",
      alt: "Agende seu horário de treino.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      id="photos"
      className="p-5 flex flex-col gap-8"
    >
      <h1 className="text-4xl text-center font-bold mb-4 uppercase">
        Fotos da academia
      </h1>

      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="w-full lg:w-3/6"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.path} alt={item.alt} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Photos;
