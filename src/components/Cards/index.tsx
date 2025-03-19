import Image, { StaticImageData } from "next/image";
import physicalCard from "../../../public/images/illustrations/physical.svg";
import digitalCard from "../../../public/images/illustrations/digital.svg";
import Button from "../Button";

interface CardProps {
    type: string;
    image: StaticImageData;
    function: string;
}

const Cards = () => {
    const cards: CardProps[] = [
        {
            type: "Cartão físico",
            image: physicalCard,
            function: "Débito/Crédito",
        },
        {
            type: "Cartão digital",
            image: digitalCard,
            function: "Débito",
        },
    ];

    return (
        <section className="flex flex-col items-center gap-6 bg-background bg-cover rounded-lg p-8">
            <h2 className="text-2xl font-bold">Meus cartões</h2>
            {cards.map((card, index) => (
                <div key={index}>
                    <p className="mb-6 max-md:text-center">{card.type}</p>
                    <div className="flex gap-6 items-center max-md:flex-col">
                        <Image src={card.image} alt={card.type} width={250}/>
                        <div className="flex flex-col items-center gap-6">
                            <Button
                                text="Configurar"
                                onClick={() => { }}
                                className="bg-orange text-white border-none w-[200px]"
                            />
                            <Button
                                text="Bloquear"
                                onClick={() => { }}
                                className="bg-transparent text-red-500 border border-orange w-full"
                            />
                            <span>Função: {card.function}</span>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Cards;
