import Student from "../assets/dosen.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="mt-20 md:px-32">
        <div className="container mx-auto p-5">
          <div className="flex md:flex-row flex-col gap-8  items-center space-y-14">
            <div className="lg:w-1/2 w-full flex justify-center md:justify-start">
              <img
                src={Student}
                alt="Perpustakaan"
                className="md:max-w-[32rem]  max-w-[40rem]  rounded-s-3xl mx-auto md:mx-0 md:rounded-r-lg"
              />
            </div>
            <div className="lg:w-1/2 w-full space-y-7 order-first md:order-none items-center">
              <h1 className="text-4xl md:text-5xl font-bold md:text-left ">
                Master JavaScript with Comprehensive Online Resources
              </h1>
              <p className="text-xl">
                Institut Teknologi Quantum menawarkan berbagai materi dan sumber
                daya untuk memperdalam keterampilan JavaScript Anda. Temukan
                cara baru untuk menjadi ahli dalam coding.
              </p>
              <div className="flex gap-4 mt-4  justify-start">
                <a className="text-black hover:text-white border border-black hover:bg-black font-semibold py-2 px-4 rounded-md">
                  Lihat Major
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
