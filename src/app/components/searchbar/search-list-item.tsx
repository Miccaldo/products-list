import { IProduct } from "@/app/types";
import { Button } from "../ui/button/button";

export const SearchListItem: React.FC<IProduct> = ({name, description, image, promotion, active}) => {
    return (
        <div className="container mx-auto flex justify-between mt-3 pb-3 border-b flex-wrap sm:flex-nowrap">
            <div className="flex">
                <div className="w-24 flex-shrink-0 relative">
                    <img className={`h-full w-full ${!active ? 'grayscale' : ''}`} src={image} alt={name}/>
                    {promotion && (
                        <div className="bg-orange-400 text-white rounded-sm top-0 absolute text-xs">
                        Promo
                        </div>
                    )} 
                </div>
                <div className="mx-2">
                    <h4 className="text-lg">{name}</h4>
                    <p className="text-xs md:text-base text-slate-500 max-w-lg h-12 overflow-hidden">{description}</p>
                </div>
            </div>
            <Button className="block w-full mx-auto sm:mx-0 mt-2 sm:mt-0 sm:w-24 sm:h-20 shrink-0 text-xs" color="primary" disabled={!active}>
                {active ? 'Show details' : 'Unavailable'}
            </Button>
        </div>
    ) 
}