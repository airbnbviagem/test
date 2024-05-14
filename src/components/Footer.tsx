import Link from "next/link";

export const Footer = () => {
    return(
        <footer className="mt-8 py-10 w-screen h-fit flex flex-col justify-center items-center px-3 bg-gray-100">
            <div className="max-w-screen-2xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-b border-gray-500 pb-5">
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Atendimento</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <Link href={'https://www.airbnb.com.br/help/home?from=footer'} className="hover:underline w-max">Central de Ajuda</Link>
                        <Link href={'https://www.airbnb.com.br/aircover'} className="hover:underline w-max">AirCover</Link>
                        <Link href={'https://www.airbnb.com.br/against-discrimination'} className="hover:underline w-max">Antidiscriminação</Link>
                        <Link href={'https://www.airbnb.com.br/accessibility'} className="hover:underline w-max">Apoio à pessoa com deficiência</Link>
                        <Link href={'https://www.airbnb.com.br/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19'} className="hover:underline w-max">Opções de cancelamento</Link>
                        <Link href={'https://www.airbnb.com.br/neighbors'} className="hover:underline w-max">Reporte um problema no bairro</Link>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Hospedagem</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <Link href={'https://www.airbnb.com.br/host/homes?from_footer=1'} className="hover:underline w-max">Anuncie seu espaço no Airbnb</Link>
                        <Link href={'https://www.airbnb.com.br/aircover-for-hosts'} className="hover:underline w-max">AirCover para anfitriões</Link>
                        <Link href={'https://www.airbnb.com.br/resources'} className="hover:underline w-max">Recursos para anfitriões</Link>
                        <Link href={'https://www.airbnb.com.br/help/community?s=footer'} className="hover:underline w-max">Fórum da comunidade</Link>
                        <Link href={'https://www.airbnb.com.br/help/responsible-hosting'} className="hover:underline w-max">Hospedagem responsável</Link>
                        <Link href={'https://www.airbnb.com.br/ambassadors/joinaclass'} className="hover:underline w-max">Participe de uma aula grátis</Link>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Airbnb</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <Link href={'https://www.airbnb.com.br/press/news'} className="hover:underline w-max">Newsroom</Link>
                        <Link href={'https://www.airbnb.com.br/release'} className="hover:underline w-max">Novos recursos</Link>
                        <Link href={'https://www.airbnb.com.br/careers'} className="hover:underline w-max">Carreiras</Link>
                        <Link href={'https://investors.airbnb.com/'} className="hover:underline w-max">Investidores</Link>
                        <Link href={'https://www.airbnb.org/?locale=pt'} className="hover:underline w-max">Locais emergenciais Airbnb.org</Link>
                    </ul>
                </div>
            </div>
            <div className="max-w-screen-2xl pt-8 flex justify-between w-full">
                <p>© 2024 Airbnb, Inc.<span className="hidden md:block">Privacidade - Termos - Mapa do site - Informações da empresa</span></p>
            </div>
        </footer>
    );
}