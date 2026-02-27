import Image from "next/image";
import NavLinks from "@/app/components/NavLinks";

export default function Page4() {
  return (
     <main className="min-h-screen bg-[#8B8B8B] flex flex-col items-center justify-center px-6 py-10 text-white">
   
         <h1 className="text-5xl md:text-7xl font-serif mb-5 text-center">
      Why I choose my Person
         </h1>
   
         <div className="bg-[#575757] rounded-2xl shadow-2xl px-8 py-8 max-w-4xl w-full">
   
           <div className="flex flex-col md:flex-row items-start  gap-3">
   
          <div className="flex-shrink-0">
             <Image
               src="/assets/Image5.png"
               alt="Pocoloco reading"
               width={360}
               height={360}
               className="w-[260px] h-[360px] object-cover"
             />
             </div>
             <div className="font-serif text-[16px] leading-relaxed max-w-xl">
             <p className="mb-0 font-semibold text-[18px]">My Reason:</p>
            <p className="text-[20px]"> The reason why I choose him is lately I’ve been excited for 
             the next jojo anime and just he felt like a character I 
             connected with except the forution teller part. But just 
             the story of his stand kind of being that person to give
              positivity to him, say hey your doing good or giving some 
              positive feed back and that with his stand it help him believe 
              in himself and his luck. And i connect with that as a character
               because sometime bad thing happen-eds but end up getting a better 
               result and I always have a voice that in my head to keep me positive
                and to give feed back, I always felt lucky Hey Ya!  
                </p>
             </div>
           </div>
           <div className="-mt-4 flex justify-center">
         <NavLinks />
         </div>
         </div>
         </main>
  );
}