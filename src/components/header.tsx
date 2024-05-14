import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { HiBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";

export const Header = () => {
    return(
        <header className="w-screen h-fit flex justify-center items-center px-3 border-b border-gray-200">
            <div className="max-w-screen-2xl w-full py-3 sm:py-6 flex justify-between items-center">
                <Link href={'https://www.airbnb.com.br/'}>
                    <Image src={'/logo-bnb.png'} alt={'Logo Airbnb'} width={150} height={0}/>
                </Link>
                <ul className="flex items-center gap-2 text-gray-500">
                    <Link href={'https://www.airbnb.com.br/'} className="hidden sm:block p-3 font-semibold text-black">Acomodações</Link>
                    <Link href={'https://www.airbnb.com.br/s/experiences/online'} className="hidden sm:block hover:text-black hover:bg-gray-100 p-3 rounded-full">Experiências</Link>
                    <Link href={'https://www.airbnb.com.br/s/experiences/online'} className="hidden  md:block hover:text-black hover:bg-gray-100 p-3 rounded-full">Experiências online</Link>
                </ul>
                <div className="flex items-center gap-1">
                    <Link href={'https://www.airbnb.com.br/host/homes'} className="hidden lg:block font-semibold text-sm hover:bg-gray-100 p-3 rounded-full">Anuncie seu espaço no Airbnb</Link>
                    <Link href={'https://www.airbnb.com.br/'} className="hover:bg-gray-100 p-3 rounded-full">
                        <TbWorld className="text-xl"/>
                    </Link>
                    <div className="flex items-center text-gray-700 gap-3 sm:gap-5 p-3 border border-gray-300 rounded-full text-xl">
                        <Link href={'https://www.airbnb.com.br/'}>
                            <HiBars3 />
                        </Link>
                        <Link href={'https://www.airbnb.com.br/'}>
                            <FaUserCircle />
                        </Link>
                    </div> 
                </div>
            </div>
        </header>
    );
}