import img from "../assets/student2.png";

export default function Hero() {
  return (
    <>
      <section className="mt-20 md:px-32">
        <div className="container mx-auto p-5">
          <div className="flex md:flex-row flex-col gap-4 items-center">
            <div className="lg:w-1/2 w-full space-y-7">
              <h1 className="text-4xl md:text-5xl font-bold md:text-left ">
                Master JavaScript with Comprehensive Online Resources
              </h1>
              <p className="text-xl">
                Institut Teknologi Quantum menawarkan berbagai materi dan sumber
                daya untuk memperdalam keterampilan JavaScript Anda. Temukan
                cara baru untuk menjadi ahli dalam coding.
              </p>
              <div className="flex gap-4 mt-4  justify-start">
                <a className="text-white bg-black hover:bg-white hover:text-black border  hover:border-black  font-semibold py-2 px-4 rounded-md">
                  Daftar
                </a>
                <a className="text-black hover:text-white border border-black hover:bg-black font-semibold py-2 px-4 rounded-md">
                  Lihat Major
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center md:justify-end order-first md:order-none">
              <img
                src={img}
                alt="Perpustakaan"
                className="md:max-w-[32rem] max-w-[23rem]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
