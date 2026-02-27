import Image from "next/image";
import NavbarLinks from "@/app/components/NavLinks";
import NavLinks from "@/app/components/NavLinks";

export default function Page2() {
  return (
      <main className="min-h-screen bg-[#8B8B8B] flex flex-col items-center justify-start p-6 text-white">
        
              <h1 className="text-5xl md:text-7xl font-serif mb-6 text-center">
           My person stand  
              </h1>
        
              <div className="bg-[#575757] rounded-2xl p-8 max-w-5xl shadow-2xl">
        
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-6">
        
        <div className="flex flex-col items-center text-center">

                 <p className="mb-2 font-serif text-lg">Stand: Hey Ya!</p>
                  <Image
                    src="/assets/Image3.png"
                    alt="Pocoloco with his stand"
                    width={200}
                    height={200}
                    className=" mb-1"
                  />

                  <p className="text-sm font-serif mb-4">
                    Type: Close-range, Artificial Humanoid, sentient
                    <br />
                    Ability: postive reinforcement
                  </p>
                  
                  <Image
                    src="/assets/2.png"
                    alt="Pocoloco's Stand"
                    width={200}
                    height={200}
                  />
                </div>
                  <div className="flex-1 font-serif text-base leading-relaxed"> 
            <p className="mb-0 text-lg font-semibold"> About his stand:</p>
             <p className="text-[24px]"> Hey Ya! is a Stand that cheers Pocoloco on and serves as a guide for 
              him, taking full advantage of its user's absurd amount of luck. While
               he doesn't have the raw talent or the special skills of other top competitors,
                Pocoloco has tremendous luck and an absolute confidence, in no small part thanks
                 to Hey Ya!. This gives him the possibility to boldly overcome obstacles in his
                  way and stay a serious competitor throughout the entirety of the race. For instance,
                   he was able to cross a forest by sheer luck and with his eyes closed (which incidentally
                    allowed his horse to navigate through the forest by itself) where several other 
                    competitors crashed against the branches and fell.
                  </p>
                </div>
                </div>
                <div className="mt-6 md:-mt-10 flex justify-center">
              <NavLinks />
              </div>
              </div>
              </main>
  );
}