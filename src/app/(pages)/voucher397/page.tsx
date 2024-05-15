"use client"

import { Footer } from "@/components/Footer";
import { Gerando } from "@/components/gerando";
import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTicketAlt } from "react-icons/fa";

const Page = () => {

    const [gerando, setGerando] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setGerando(false);
        }, 8200); 
    
        return () => clearTimeout(timer); 
      }, []);

    return(
        <div>
            {gerando &&  <Gerando /> }
            {!gerando &&  
            <div className="flex flex-col justify-center items-center">
                <Header />
                <div className="flex flex-col my-5 gap-3 px-3">
                    <p className="text-primary font-semibold text-2xl">Seu cupom foi gerado com sucesso!✅</p>
                    <p className="text-gray-500">Resgate agora e aproveite os R$5000 de desconto em qualquer estadia.</p>
                    <div className="flex justify-center w-100% mt-4">
                        <Link href={'https://pay.novaviagem.online/JqoR32z28qe3Vj5'} className="bg-white shadow-md border gap-5 border-gray-60 w-[90%] h-fit p-5 flex flex-col rounded-lg">
                            <Image src={'/check5k.webp'} alt="Voucher 97" width={500} height={500}/>
                            <p className="font-bold text-gray-600 text-lg">Resgate agora e aproveite os <span className="text-primary">R$5000</span> de desconto em qualquer estadia.</p>
                            <p className="text-[13px] text-gray-500">Descrição do cupom: Cupom Especial no valor de R$5000 por R$397,00!</p>
                            <span className="text-[12px] text-primary">Última unidade disponível!</span>
                            <div className="flex flex-col">
                                <Link href={'https://pay.novaviagem.online/JqoR32z28qe3Vj5'}>
                                    <Image src={'/btncod.png'} alt="button checkout" width={220} height={0}/>
                                </Link>
                                <p className="flex gap-1 items-center text-primary">
                                <FaTicketAlt className="text-xl text-primary"/>
                                     Código
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div> 
            }
        </div>
    );
}

export default Page;