import type { IHeader } from "./header.types";
import { Button } from "../ui/button/button";
import { Searchbar } from '../searchbar/searchbar';
import { Logo } from "../logo/logo";
import { SWRProvider } from "@/app/swr-provider";
import { Filters } from "../filters/filters";

export const Header: React.FC<IHeader> = ({}) => {
    return (
        <header>
            <Logo />
            <Filters />
            <SWRProvider>
                <Searchbar />
            </SWRProvider>
            <Button>Login</Button>
        </header>
    )
}