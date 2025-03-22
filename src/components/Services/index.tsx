import { ImagesName } from "@/types/ImageName"
import ServiceBox from "./ServiceBox"

const Services = () => {

    const services: { image: ImagesName, text: string }[] = [
        {
            image: "loan",
            text: "Emprestimo",
        },
        {
            image: "cards",
            text: "Meus cartões"
        },
        {
            image: "donation",
            text: "Doações"
        },
        {
            image: "pix",
            text: "Pix"
        },
        {
            image: "insurance",
            text: "Seguro"
        },
        {
            image: "phone",
            text: "Credito celular"
        }
    ]

    return (
        <div className="bg-background bg-cover rounded-lg p-8">
            <h2 className="text-xl font-bold text-center mb-8">Confira os serviços disponíveis</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {services.map((service, index) => (
                    <ServiceBox
                        key={index}
                        text={service.text}
                        image={service.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services