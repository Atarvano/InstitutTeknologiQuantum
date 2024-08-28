import Msib from "../assets/msib.png";
import kampus from "../assets/kampusmerdeka.png";
import lpdp from "../assets/lpdp.png";

export default function Sponsor() {
  return (
    <>
      <section className=" mt-16 bg-[#F7F7F7] md:px-32  p-12">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col  justify-between items-center space-y-7">
            <div className="text-xl font-bold">
              <h1>Trusted by 2000+ companies</h1>
              <h1>worldwide.</h1>
            </div>
            <div className="flex  gap-10 md:gap-28 flex-col md:flex-row">
              <img src={Msib} alt="sponsors" className=" w-24" />

              <img src={kampus} alt="sponsors" className="w-24" />
              <img src={lpdp} alt="sponsors" className=" w-24" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
