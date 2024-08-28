import Cards from "./Cards";
import img from "../assets/perpus.jpg";

export default function Jurusan() {
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
    <>
      <section className="mt-20 md:px-32 h-screen">
        <div className="container mx-auto p-5 space-y-11">
          <h1 className="text-4xl font-bold text-center">Jurusan</h1>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-12 ">
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
    </>
  );
}
