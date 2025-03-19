import Image from "next/image"

interface ServiceBoxProps{
    text:string;
    image:string
}

const ServiceBox = ({text, image}:ServiceBoxProps) => {
    return(
        <div className="flex flex-col items-center gap-7 bg-lightgray p-4 rounded-lg w-[192px] h-[167px] cursor-pointer hover:scale-105">
            <Image
            src={`/images/icons/${image}.svg`}
            alt={text}
            width={60}
            height={60}
            />
            <h2 className="font-bold">{text}</h2>
        </div>
    )
}

export default ServiceBox