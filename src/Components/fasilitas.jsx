// Fasilitas.js
import Cards from "./Cards";
import img from "../assets/perpus.jpg";

export default function Fasilitas() {
  const cardsData = [
    {
      imageSrc: img,
      title: "Perpus",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      imageSrc: img,
      title: "Tech",
      description: "Voluptatibus quia, nulla! Maiores et perferendis eaque.",
    },
    {
      imageSrc: img,
      title: "Kelas",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  return (
    <section className="md:px-32 mt-20 bg-[#F7F7F7]">
      <div className="container mx-auto p-5 space-y-6">
        <h1 className="text-4xl font-bold text-center">Fasilitas</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {cardsData.map((card, index) => (
            <Cards
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
