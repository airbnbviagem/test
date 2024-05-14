"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { FaTicketAlt } from "react-icons/fa";
import Link from "next/link";
import { IoStar } from "react-icons/io5";
import { HiTrophy } from "react-icons/hi2";
import VideoEmbed from "./VideoEmbed";

export const Oferta = () => {

    const [openModal, setOpenModal] = useState<boolean>(true);
    const [openOffer, setOpenOffer] = useState<boolean>(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setOpenOffer(true);
        }, 120000); 
    
        return () => clearTimeout(timer); 
      }, []);

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).id === "backdrop") setOpenModal(false);
    }

    return(
     <>
        {openModal &&
        <div className="fixed z-10 flex md:hidden justify-center items-center w-screen h-screen top-0 right-0 bg-black/40" id="backdrop" onClick={handleClose}>
            <div className="relative bg-white p-5 rounded-lg flex flex-col gap-3 w-[90%]">
                <p className="font-bold text-primary text-2xl">Olá, bem vindo!</p>
                <p className="text-gray-700">Nós do Airbnb, estamos comemorando a marca de <span className="font-bold">5 milhões de anfritriões!</span> E como forma de agradecimento <span className="font-bold">liberamos 50 cupons de crédito</span> em nossa plataforma para serem usados em sua(s) próxima(s) estadias <span className="font-bold">com preços nunca vistos antes!</span></p>
                <button className="bg-primary text-white p-3 rounded-lg uppercase font-semibold" onClick={()=>setOpenModal(false)}>saiba mais</button>
                <HiXMark className="absolute top-5 right-5 text-2xl cursor-pointer" onClick={()=>setOpenModal(false)}/>
            </div>
        </div>
        }
        <div className="flex flex-col gap-8 py-5 px-3 md:hidden">
        <div className="flex flex-col md:flex-wrap gap-5">
          <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-2xl">R$5.000,00 para usar em qualquer estadia Airbnb! ✈🌏</h1>
              <p className="text-gray-600">Para desbloquear o restante da página e ter acesso aos cupons de descontos especiais , ouça o áudio e entenda como resgatar seu cupom para usar na sua próxima estadia! 😁</p>
          </div>
          <div className="w-full flex justify-center">
            <Image src={'/lp-inicio.jpg'} alt="Oferta Voucher" width={400} height={200}/>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-2xl">Bem-vindo(a)!</p>
          <p className="font-semibold">🔈Ouça o áudio abaixo:</p>
        </div>
        <VideoEmbed />
      </div>
      {openOffer &&
        <div className="flex flex-col gap-5 md:hidden">
            <p className="text-gray-600">Como forma de agradecimento, <span className="font-semibold">liberamos 50 cupons de crédito</span> para serem usados em sua(s) próxima(s) estadias com valores nunca vistos antes!</p>
            <p className="uppercase font-semibold flex items-center gap-2">
                <FaTicketAlt className="text-2xl text-primary"/>
                cupons disponíveis airbnb</p>
            <div className="flex flex-col gap-5 justify-center">

            <div className="bg-white p-5 border border-black/5 shadow-md flex flex-col gap-8 rounded-xl w-fit">
            <Image src={'/card1k.webp'} alt="Card Voucher" width={500} height={500}/>
            <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-[12px] uppercase">cupom com 1 ano de validade</span>
                <p className="font-bold text-lg">Cupom Crédito de R$1.000,00</p>
                <div className="border border-gray-400 mt-3 rounded-lg">
                    <div className="grid grid-cols-2 border-b border-gray-400">
                        <div className="flex flex-col p-2 border-r border-gray-500">
                            <span className="font-semibold uppercase">Você Recebe</span>
                            <span className="text-gray-500">R$1.000,00</span>
                        </div>
                        <div className="flex flex-col p-2">
                            <span className="font-semibold uppercase">e paga apenas</span>
                            <span className="text-gray-500">R$97</span>
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="text-gray-500 text-sm">Disponível para qualquer estadia <span className="font-semibold">no MUNDO todo,</span> em <span className="font-semibold">qualquer IMOVEL</span> do app</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="mt-3 text-primary font-semibold line-through text-xl">R$1.000</p>
                    <p className="flex items-center gap-1"><IoStar className="text-primary"/> 4.99</p>
                </div>
                <Link href={'/voucher97'}>
                    <button className="uppercase font-semibold text-white bg-primary w-full py-3 mt-3 rounded-lg border-none">Resgatar por R$97</button>
                </Link>
            </div>
            </div>

            <div className="bg-white p-5 border border-black/5 shadow-md flex flex-col gap-8 rounded-xl w-fit">
            <Image src={'/card2k.webp'} alt="Card Voucher" width={500} height={500}/>
            <div className="flex flex-col gap-1">
                <p className="uppercase font-semibold flex items-center gap-3"><HiTrophy className="text-yellow-500 text-2xl"/> mais comprado</p>
                <span className="text-gray-500 text-[12px] uppercase">cupom com 1 ano de validade</span>
                <p className="font-bold text-lg">Cupom Crédito de <span className="text-yellow-500">R$2.000,00</span></p>
                <div className="border border-gray-400 mt-3 rounded-lg">
                    <div className="grid grid-cols-2 border-b border-gray-400">
                        <div className="flex flex-col p-2 border-r border-gray-500">
                            <span className="font-semibold uppercase">Você Recebe</span>
                            <span className="text-gray-500">R$2.000,00</span>
                        </div>
                        <div className="flex flex-col p-2">
                            <span className="font-semibold uppercase">e paga apenas</span>
                            <span className="text-gray-500">R$147</span>
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="text-gray-500 text-sm">Disponível para qualquer estadia <span className="font-semibold">no MUNDO todo,</span> em <span className="font-semibold">qualquer IMOVEL</span> do app</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="mt-3 text-primary font-semibold line-through text-xl">R$2.000</p>
                    <p className="flex items-center gap-1"><IoStar className="text-primary"/> 4.99</p>
                </div>
                <Link href={'/voucher147'}>
                    <button className="uppercase font-semibold text-white bg-primary w-full py-3 mt-3 rounded-lg border-none">Resgatar por R$147</button>
                </Link>
            </div>
            </div>

            <div className="bg-white p-5 border border-black/5 shadow-md flex flex-col gap-8 rounded-xl w-fit">
            <Image src={'/card5k.png'} alt="Card Voucher" width={500} height={500}/>
            <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-[12px] uppercase">cupom com 1 ano de validade</span>
                <p className="font-bold text-lg">Cupom Crédito de R$5.000,00</p>
                <div className="border border-gray-400 mt-3 rounded-lg">
                    <div className="grid grid-cols-2 border-b border-gray-400">
                        <div className="flex flex-col p-2 border-r border-gray-500">
                            <span className="font-semibold uppercase">Você Recebe</span>
                            <span className="text-gray-500">R$5.000,00</span>
                        </div>
                        <div className="flex flex-col p-2">
                            <span className="font-semibold uppercase">e paga apenas</span>
                            <span className="text-gray-500">R$397</span>
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="text-gray-500 text-sm">Disponível para qualquer estadia <span className="font-semibold">no MUNDO todo,</span> em <span className="font-semibold">qualquer IMOVEL</span> do app</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="mt-3 text-primary font-semibold line-through text-xl">R$5.000</p>
                    <p className="flex items-center gap-1"><IoStar className="text-primary"/> 4.99</p>
                </div>
                <Link href={'/voucher397'}>
                    <button className="uppercase font-semibold text-white bg-primary w-full py-3 mt-3 rounded-lg border-none">Resgatar por R$397</button>
                </Link>
            </div>
            </div>

            </div>
        </div>
      }
    </>
    );
}