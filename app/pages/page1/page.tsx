import Image from "next/image";
import NavLinks from "@/app/components/NavLinks";

export default function Page1() {
  return (
     <main className="min-h-screen bg-[#8B8B8B] flex flex-col items-center justify-center py-12 px-6 text-white">
   
         <h1 className="text-4xl md:text-6xl font-serif mb-3 text-center">
        Background about my person
         </h1>
   
         <div className="bg-[#575757] rounded-xl px-8 pt-6 py-4 max-w-4xl shadow-xl w-full">
   
           <div className="flex flex-col md:flex-row items-start gap-3">
   
             <Image
               src="/assets/Image2.png"
               alt="Pocoloco reading"
               width={350}
               height={350}
              className="rounded-md shrink-0"
             />
   
             <div className="font-serif  max-w-3xl -mt-1">
              <p className="mb-1 text-2xl font-semibold">
              About him:
              </p>

              <p className="text-[19px] leading-relaxed -mt-2">
              Pocoloco was born in Georgia in 1869. On September
               20, 1890, Pocoloco headed down to the city to gamble. After 
               losing, he met a fortune teller on the side of the road who 
               told him that he is at the opposite of his life's most
                inauspicious moment. He would reach the greatest peak of
                 his life over the next two months and would have a 1 in 
                 five billion chance of good luck. Pocoloco learns about
                 the Steel Ball Run race and decides to try his luck at 
                 the $50 Million dollars win by racing in the horse race, 
                 get the money for it by working on his grand father working 
                 in the fields to get the $1,200 fee for the race.
                 </p>
            </div>
           </div>
            <div className="flex justify-center gap-10 -mt-4 font-serif text-xl">
         <NavLinks />
         </div>
         </div>
         </main>
  );
}