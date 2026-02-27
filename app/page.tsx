import Image from "next/image";
import NavLinks from "./components/NavLinks"

export default function Home() {
  return (
     <main className="min-h-screen bg-[#8B8B8B] flex flex-col items-center justify-center p-6 text-white">

      <h1 className="text-4xl md:text-7xl font-serif mb-2 text-center">
        My Influential Person
      </h1>

      <div className="bg-[#575757] rounded-2xl p-8 max-w-3xl shadow-2xl">

        <div className="flex flex-col md:flex-row items-center">

          <Image
            src="/assets/Image1.png"
            alt="Pocoloco"
            width={900}
            height={900}
            className="full mb-6 md:mb-0 md:mr-8"
          />

          <p className="text-[44px] md:text-[40px] font-serif md:left ">
            My influential person right know is name 
            Polo-loco and he’s is from jojo bizarre 
            adventure steel ball run.
          </p>
        </div>
      <NavLinks />
      </div>
      </main>
   
  );
}
