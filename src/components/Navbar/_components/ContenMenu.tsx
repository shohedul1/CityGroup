import Image from "next/image";
import Link from "next/link";

interface ContenMenuProps {
   title: string;
   options: {
      label?: string;
      emoji?: React.ReactElement;
      href: string;
      url?: string | undefined
   }[];
}

const ContenMenu: React.FC<ContenMenuProps> = ({ options, title }) => {
   return (
      <>
         {
            title === "KNOW US" && (

               <div data-aos="zoom-in" className="w-[1000px] border absolute overflow-hidden bg-white border-red-300 rounded-4xl -left-70 ">
                  <div className="flex items-center justify-center">
                     <ul className="grid grid-cols-7 w-full">
                        {options.map((option, index) => (
                           <Link href={option.href} key={index}>
                              <div className="cursor-pointer flex flex-col hover:bg-red-200 p-2  rounded">
                                 <div className="flex flex-col items-center justify-center gap-4">
                                    <div>{option.label}</div>
                                    <div>{option.emoji}</div>
                                 </div>
                              </div>

                           </Link>
                        ))}

                     </ul>
                  </div>
               </div>
            )
         }
         {
            title === "Brands" && (

               <div data-aos="fade-down" className="w-[1000px] border absolute px-20 py-5 overflow-hidden bg-white border-red-300 rounded-4xl -left-95 ">
                  <div className="flex items-center justify-center">
                     <ul className="grid grid-cols-6 gap-10 w-full">

                        {options.map((option, index) => (
                           <div key={index}  >
                              <Image
                                 key={index}
                                 src={option.url || "/"}
                                 alt='image'
                                 width={500}
                                 height={500}
                                 // style={{ width: "auto", height: "auto" }} // Adjusted style
                                 className='object-cover  w-full h-full'
                                 property="true"
                                 priority

                              />


                           </div>
                        ))}
                     </ul>

                  </div>
               </div>
            )
         }

         {
            title === "Foreign Trade" && (

               <div data-aos="fade-right" className="w-[1000px] border absolute overflow-hidden bg-white border-red-300 rounded-4xl -left-117 ">
                  <div className="flex items-center justify-center gap-5">
                     {options.map((option, index) => (
                        <Link href={option.href} key={index}>
                           <div className="cursor-pointer flex flex-col hover:bg-red-200 p-2  rounded">
                              <div className="flex flex-col items-center justify-center gap-4">
                                 <div>{option.label}</div>
                                 <div>{option.emoji}</div>
                              </div>
                           </div>

                        </Link>
                     ))}

                  </div>
               </div>
            )
         }

         {
            title === "Media" && (

               <div data-aos="fade-left" className="w-[1000px] border absolute overflow-hidden bg-white border-red-300 rounded-4xl -left-153.5 ">
                  <div className="flex items-center justify-center">
                     <ul className="grid grid-cols-7 w-full">
                        {options.map((option, index) => (
                           <Link href={option.href} key={index}>
                              <div className="cursor-pointer flex flex-col hover:bg-red-200 p-2  rounded">
                                 <div className="flex flex-col items-center justify-center gap-4">
                                    <div>{option.label}</div>
                                    <div>{option.emoji}</div>
                                 </div>
                              </div>

                           </Link>
                        ))}

                     </ul>
                  </div>
               </div>
            )
         }
         {
            title === "Career" && (

               <div  data-aos="flip-down" className="w-[1000px] border absolute overflow-hidden bg-white border-red-300 rounded-4xl -left-172.5 ">
                  <div className="flex items-center justify-center">
                     <ul className="grid grid-cols-7 w-full">
                        {options.map((option, index) => (
                           <Link href={option.href} key={index}>
                              <div className="cursor-pointer flex flex-col hover:bg-red-200 p-2  rounded">
                                 <div className="flex flex-col items-center justify-center gap-4">
                                    <div>{option.label}</div>
                                    <div>{option.emoji}</div>
                                 </div>
                              </div>

                           </Link>
                        ))}

                     </ul>
                  </div>
               </div>
            )
         }
         {
            title === "Contact Us" && (

               <div data-aos="zoom-in-up" className="w-[1000px] border absolute overflow-hidden bg-white border-red-300 rounded-4xl -left-193.5 ">
                  <div className="flex items-center justify-center">
                     <ul className="grid grid-cols-7 w-full">
                        {options.map((option, index) => (
                           <Link href={option.href} key={index}>
                              <div className="cursor-pointer flex flex-col hover:bg-red-200 p-2  rounded">
                                 <div className="flex flex-col items-center justify-center gap-4">
                                    <div>{option.label}</div>
                                    <div>{option.emoji}</div>
                                 </div>
                              </div>

                           </Link>
                        ))}

                     </ul>
                  </div>
               </div>
            )
         }











      </>
   )
}

export default ContenMenu;