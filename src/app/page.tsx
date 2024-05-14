'use client'

import { Option } from "@/components/Option";
import { MdArrowForwardIos } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { MdToggleOff } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Oferta } from "@/components/Oferta";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";

const Page = () => {
  
  const[open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) { 
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return(
    <div className="flex justify-center items-center flex-col">
      <Header />
      <div className="max-w-screen-2xl w-full justify-center items-center px-3">
        <div className="hidden lg:flex justify-between items-center gap-16 py-7">
            <Option image="/1.jpg" label="Chalés" />
            <Option image="/2.jpg" label="Chalés" />
            <Option image="/3.jpg" label="Chalés" />
            <Option image="/4.jpg" label="Chalés" />
            <Option image="/5.jpg" label="Chalés" />
            <Option image="/6.jpg" label="Chalés" />
            <Option image="/7.jpg" label="Chalés" />
            <Option image="/8.jpg" label="Chalés" />
            <Option image="/9.jpg" label="Chalés" />
            <Option image="/10.jpg" label="Chalés" />
        <div className="hidden 2xl:flex items-center gap-4">
            <div className="p-2 text-sm text-black border border-gray-400 rounded-full cursor-pointer">
              <MdArrowForwardIos />
            </div>
            <div className="flex items-center gap-2 p-2 border h-10 border-gray-400 rounded-lg cursor-pointer">
              <LuSettings2 />
              <span>Filtros</span>
            </div>
            <div className="flex items-center gap-2 p-2 border h-10 border-gray-400 rounded-lg cursor-pointer">
              <span>Exibir o total sem impostos</span>
              <MdToggleOff className="text-3xl"/>
            </div>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-5 gap-5 py-5">
        <Link href={'https://www.airbnb.com.br/rooms/43333686?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1190139063&search_mode=flex_destinations_search&check_in=2024-08-07&check_out=2024-08-12&source_impression_id=p3_1714334302_bMs7LK3qiMtoPm1%2F&previous_page_section_name=1000'} className="flex flex-col gap-3">
          <div className="h-72 bg-[url('/casa1.jpeg')] bg-cover bg-center bg-no-repeat rounded-2xl p-3 flex flex-col justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <div className="bg-white px-3 py-1 rounded-full w-fit text-sm font-semibold">Preferido dos hospédes</div>
                <div className="text-white text-lg bg-gray-600/20 rounded-full p-2">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between items-center">
              <p className="font-semibold">São Bento do Sul, Brasil</p>
              <p className="flex items-center gap-1"><IoStar /> <span>4,96</span></p>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex flex-col">
                <p>416 km de distância</p>
                <p>7 - 12 de ago.</p>
              </div>
              <p><span className="text-black font-semibold">R$772</span> noite</p>
            </div>
          </div>
        </Link>
        <Link href={'https://www.airbnb.com.br/rooms/858706085482905941?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1617561164&search_mode=flex_destinations_search&check_in=2024-05-01&check_out=2024-05-06&source_impression_id=p3_1714334302_vsxMU%2F0HZldo%2FYsw&previous_page_section_name=1000'} className="flex flex-col gap-3">
          <div className="h-72 bg-[url('/casa2.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl p-3 flex flex-col justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <div className="bg-white px-3 py-1 rounded-full w-fit text-sm font-semibold">Preferido dos hospédes</div>
                <div className="text-white text-lg bg-gray-600/20 rounded-full p-2">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Petrópolis, Brasil</p>
              <p className="flex items-center gap-1"><IoStar /> <span>5,0</span></p>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex flex-col">
                <p>386 km de distância</p>
                <p>1 - 6 de mai.</p>
              </div>
              <p><span className="text-black font-semibold">R$725</span> noite</p>
            </div>
          </div>
        </Link>
        <Link href={'https://www.airbnb.com.br/rooms/49840035?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1388375081&search_mode=flex_destinations_search&check_in=2024-05-27&check_out=2024-06-01&source_impression_id=p3_1714334302_MB64avCRT63oSevl&previous_page_section_name=1000'} className="flex flex-col gap-3">
          <div className="h-72 bg-[url('/casa3.jpeg')] bg-cover bg-center bg-no-repeat rounded-2xl p-3 flex flex-col justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <div className="bg-white px-3 py-1 rounded-full w-fit text-sm font-semibold">Preferido dos hospédes</div>
                <div className="text-white text-lg bg-gray-600/20 rounded-full p-2">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Bairro Mellos, Brasil</p>
              <p className="flex items-center gap-1"><IoStar /> <span>4,98</span></p>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex flex-col">
                <p>163 km de distância</p>
                <p>27 de mai.- 1 de jun.</p>
              </div>
              <p><span className="text-black font-semibold">R$1.305</span> noite</p>
            </div>
          </div>
        </Link>
        <Link href={'https://www.airbnb.com.br/rooms/543265717755588925?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1610109620&search_mode=flex_destinations_search&check_in=2024-06-25&check_out=2024-06-30&source_impression_id=p3_1714334302_lHCPin4mrXA1Xdhy&previous_page_section_name=1000'} className="flex flex-col gap-3">
          <div className="h-72 bg-[url('/casa4.jpeg')] bg-cover bg-center bg-no-repeat rounded-2xl p-3 flex flex-col justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <div className="bg-white px-3 py-1 rounded-full w-fit text-sm font-semibold">Preferido dos hospédes</div>
                <div className="text-white text-lg bg-gray-600/20 rounded-full p-2">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Itajubá, Brasil</p>
              <p className="flex items-center gap-1"><IoStar /> <span>5,0</span></p>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex flex-col">
                <p>181 km de distância</p>
                <p>25 - 30 de jun.</p>
              </div>
              <p><span className="text-black font-semibold">R$1.104</span> noite</p>
            </div>
          </div>
        </Link>
        <Link href={'https://www.airbnb.com.br/rooms/845959517006491026?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1615457686&search_mode=flex_destinations_search&check_in=2024-05-19&check_out=2024-05-24&source_impression_id=p3_1714434873_ikwk9bgdLqi8pMmI&previous_page_section_name=1000&federated_search_id=47341b17-e5fe-4f11-8b71-5e14f1c1c627'} className="flex flex-col gap-3">
          <div className="h-72 bg-[url('/casa5.jpeg')] bg-cover bg-center bg-no-repeat rounded-2xl p-3 flex flex-col justify-between items-center">
              <div className="w-full flex justify-between items-center">
              <div className="bg-white px-3 py-1 rounded-full w-fit text-sm font-semibold">Preferido dos hospédes</div>
                <div className="text-white text-lg bg-gray-600/20 rounded-full p-2">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Córrego do Bom Jesus, Brasil</p>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex flex-col">
                <p>124 km de distância</p>
                <p>12 - 17 de mai.</p>
              </div>
              <p><span className="text-black font-semibold">R$746</span> noite</p>
            </div>
          </div>
        </Link>
      
        </div>
        <div className="hidden md:grid grid-cols-5 gap-5 py-5">
        <Link href={'https://www.airbnb.com.br/rooms/47056325?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1245822064&search_mode=flex_destinations_search&check_in=2024-05-01&check_out=2024-05-06&source_impression_id=p3_1714334302_qZYT%2F07HGexZ1UjE&previous_page_section_name=1000'} className="flex flex-col gap-3">
          <div className="h-72 bg-[url('/casa6.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl p-3 flex flex-col justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <div className="bg-white px-3 py-1 rounded-full w-fit text-sm font-semibold">Preferido dos hospédes</div>
                <div className="text-white text-lg bg-gray-600/20 rounded-full p-2">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Itamonte, Brasil</p>
              <p className="flex items-center gap-1"><IoStar /> <span>5,0</span></p>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex flex-col">
                <p>226 km de distância</p>
                <p>1 - 6 de mai.</p>
              </div>
              <p><span className="text-black font-semibold">R$345</span> noite</p>
            </div>
          </div>
        </Link>
        <Link href={'https://www.airbnb.com.br/rooms/713587829203171943?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1549402056&search_mode=flex_destinations_search&check_in=2024-05-08&check_out=2024-05-13&source_impression_id=p3_1714334302_7zJLLeOAJ%2BwLs4%2Fu&previous_page_section_name=1000'} className="flex flex-col gap-3">
          <div className="h-72 bg-[url('/casa7.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl p-3 flex flex-col justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <div className="bg-white px-3 py-1 rounded-full w-fit text-sm font-semibold">Preferido dos hospédes</div>
                <div className="text-white text-lg bg-gray-600/20 rounded-full p-2">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Rio dos Cedros, Brasil</p>
              <p className="flex items-center gap-1"><IoStar /> <span>4,86</span></p>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex flex-col">
                <p>443 km de distância</p>
                <p>8 - 13 de mai.</p>
              </div>
              <p><span className="text-black font-semibold">R$695</span> noite</p>
            </div>
          </div>
        </Link>
        <Link href={'https://www.airbnb.com.br/rooms/22319550?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1391992956&search_mode=flex_destinations_search&check_in=2024-05-01&check_out=2024-05-06&source_impression_id=p3_1714334302_xJGHnswXNCdieNMs&previous_page_section_name=1000'} className="flex flex-col gap-3">
          <div className="h-72 bg-[url('/casa8.jpeg')] bg-cover bg-center bg-no-repeat rounded-2xl p-3 flex flex-col justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <div className="bg-white px-3 py-1 rounded-full w-fit text-sm font-semibold">Preferido dos hospédes</div>
                <div className="text-white text-lg bg-gray-600/20 rounded-full p-2">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Paraty, Brasil</p>
              <p className="flex items-center gap-1"><IoStar /> <span>4,92</span></p>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex flex-col">
                <p>189 km de distância</p>
                <p>1 - 6 de mai.</p>
              </div>
              <p><span className="text-black font-semibold">R$1.198</span> noite</p>
            </div>
          </div>
        </Link>
        <Link href={'https://www.airbnb.com.br/rooms/639859140466159074?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1508490411&search_mode=flex_destinations_search&check_in=2024-05-01&check_out=2024-05-06&source_impression_id=p3_1714334302_VVMDD7HiBa303BAS&previous_page_section_name=1000'} className="flex flex-col gap-3">
          <div className="h-72 bg-[url('/casa9.jpeg')] bg-cover bg-center bg-no-repeat rounded-2xl p-3 flex flex-col justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <div className="bg-white px-3 py-1 rounded-full w-fit text-sm font-semibold">Preferido dos hospédes</div>
                <div className="text-white text-lg bg-gray-600/20 rounded-full p-2">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Benedito Novo, Brasil</p>
              <p className="flex items-center gap-1"><IoStar /> <span>5,0</span></p>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex flex-col">
                <p>455 km de distância</p>
                <p>1 - 6 de mai.</p>
              </div>
              <p><span className="text-black font-semibold">R$653</span> noite</p>
            </div>
          </div>
        </Link>
        <Link href={'https://www.airbnb.com.br/rooms/44252079?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1041785524&search_mode=flex_destinations_search&check_in=2024-05-12&check_out=2024-05-17&source_impression_id=p3_1714334302_lpPCmOJCk236DJJ5&previous_page_section_name=1000'} className="flex flex-col gap-3">
          <div className="h-72 bg-[url('/casa10.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl p-3 flex flex-col justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <div className="bg-white px-3 py-1 rounded-full w-fit text-sm font-semibold">Preferido dos hospédes</div>
                <div className="text-white text-lg bg-gray-600/20 rounded-full p-2">
                  <FaRegHeart />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                <div className="w-2 h-2 rounded-full bg-white/60"></div>
              </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Loteamento D´agua, Brasil</p>
              <p className="flex items-center gap-1"><IoStar /> <span>4,84</span></p>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex flex-col">
                <p>184 km de distância</p>
                <p>12 - 17 de mai.</p>
              </div>
              <p><span className="text-black font-semibold">R$231</span> noite</p>
            </div>
          </div>
        </Link>
      
        </div>
        {open &&
          <Oferta />
        }
      </div>
      <Footer />
    </div>
  );
}

export default Page;