import { ImagesName } from "@/types/ImageName";
import CardsIcon from "../../../../public/images/icons/cards";
import DonationIcon from "../../../../public/images/icons/donation";
import InsuranceIcon from "../../../../public/images/icons/insurance";
import LoanIcon from "../../../../public/images/icons/loan";
import PhoneIcon from "../../../../public/images/icons/phone";
import PixIcon from "../../../../public/images/icons/pix";

interface ServiceBoxProps{
    text:string;
    image: ImagesName
}


const ServiceBox = ({ text, image }:ServiceBoxProps ) => {
  function selectImage(image: ImagesName) {
    switch(image) {
      case "loan":
        return <LoanIcon />
      case "cards":
        return <CardsIcon />
      case "donation":
        return <DonationIcon />
      case "pix":
        return <PixIcon />
      case "insurance":
        return <InsuranceIcon />
      case "phone":
        return <PhoneIcon />
      default: 
        throw new Error('Imagen não encontrada')
    }
  }

  return(
    <div
      className="
        flex
        flex-col
        items-center
        gap-7
        bg-lightgray
        p-4
        rounded-lg
        w-[192px]
        h-[167px]
        cursor-pointer
        hover:scale-105
      "
    >
      {selectImage(image)}
      <h2 className="font-bold">{text}</h2>
    </div>
  )
}

export default ServiceBox