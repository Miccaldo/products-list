import type { IHeader } from "./types";
import { Button } from "../ui/button/button";
import { Searchbar } from '../searchbar/searchbar';
import { Logo } from "../logo/logo";
import { Filters } from "../filters/filters";

export const Header: React.FC<IHeader> = ({}) => {
    return (
        <header className="bg-white sticky top-0 z-10 py-8 md:py-0 shadow-sm">
            <div>
                <div className="container mx-auto flex justify-between md:h-24 items-center flex-wrap order-1">
                    <Logo />
                    <div className="block md:flex flex-row-reverse items-center gap-x-6 order-3 md:order-2 w-full md:w-auto">
                        <Searchbar/>
                        <Filters />
                    </div>
                    <Button className="md:order-3 mr-4" color="secondary">Login</Button>
                    
                </div>
            </div>
        </header>
    )
}