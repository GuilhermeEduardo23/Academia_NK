interface IImages {
  id: string;
  url: string;
  alt: string;
}

const Services = () => {
  const photos: Array<IImages> = [
    { id: "1", url: "/images/dance.png", alt: "Dança" },
    { id: "2", url: "/images/gym.png", alt: "Musculação" },
    { id: "3", url: "/images/karate.png", alt: "Karatê" },
  ];

  return (
    <section id="services" className="flex flex-col items-center justify-center text-center text-2xl p-5 bg-[#121813]">
      <h1 className="text-4xl text-center font-bold mb-4 uppercase">
        O Que Oferecemos
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row">
        {photos.map(photo => (
          <div key={photo.id} className="flex flex-col items-center justify-center md:gap-8">
            <img src={photo.url} alt={photo.alt} className="md:w-3/5 lg:w-4/5"/>
            <h2 className="mb-8">{photo.alt}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
