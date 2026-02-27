import Image from "next/image";
import NavLinks from "@/app/components/NavLinks";

export default function Page3() {
  return (
  <main className="min-h-screen bg-[#8B8B8B] flex flex-col items-center justify-center py-12 px-6 text-white">
   
    
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-center">
       My person in the race
          </h1>
    
          <div className="bg-[#575757] rounded-xl px-8 pt-6 py-6 max-w-5xl shadow-xl w-full">
    
            <div className="flex flex-col md:flex-row items-start gap-6">
    
              <Image
                src="/assets/Image4.png"
                alt="Pocoloco racing"
                width={300}
                height={300}
                className="rounded-md shrink-0 w-[180px] md:w-[220px] h-auto"
              />
    
              <div className="text-base md:text-lg font-serif">
            <p className="mb-0 text-2xl font-semibold">The race:</p>
           
           <p className="leading-relaxed text-[16px] md:text-[21px]">
             Stage 1 Pocoloco oversleeps and starts late, but his incredible
             luck helps him catch up. Even when he falls or faces danger, he 
             always lands safely. With help from his Stand, Hey Ya!, he takes 
             risks and finishes 3rd place after Gyro is penalized. Stage 2 He 
             prepares well and races steadily. He stays among the top competitors 
             and finishes 9th place. Stage 3 Pocoloco continues to perform consistently 
             and improves his ranking, finishing 5th place. Stage 4 His confidence and 
             luck keep helping him. He has a strong race and finishes 2nd place.Stage 5 
             Pocoloco performs extremely well and wins the stage, finishing 1st place. 
             Stage 6 He takes a risky path across ice. Although he doesn’t find the safest 
             route, his luck keeps him competitive. Johnny and Gyro pass him at the end, 
             and he finishes 3rd place. Final Stage Pocoloco finishes the race safely and
              places 2nd overall. However, Diego Brando is disqualified, which makes Pocoloco 
              the official winner of the Steel Ball Run, earning $50,010,000.
              </p>
              </div>
            </div>
             <div className="flex justify-center gap-10 -mt-1 font-serif text-xl">
          <NavLinks />
          </div>
          </div>
          </main>
  );
}