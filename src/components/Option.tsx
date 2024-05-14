import Image from "next/image";
import Link from "next/link";

type Props = {
    image: string;
    label: string;
}

export const Option = ({image, label}: Props) => {
    return(
        <Link href={'https://www.airbnb.com.br/'}>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src={image} alt="Icone" width={30} height={0}/>
                <span className="text-[13px]">{label}</span>
            </div>
        </Link>
    );
}