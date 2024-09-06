import type { ISearchList } from "./types";
import { SearchListItem } from "./search-list-item";
import type { IProduct } from "@/app/types";
import ReactLoading from 'react-loading';
import { Overlay } from "../overlay/overlay";
import { Button } from "../ui/button/button";

export const SearchList: React.FC<ISearchList> = ({opened, items, closeSearchList, isLoading, hasShowMore}) => {
    return (
        opened && (
            <div className="px-4 absolute bg-white bottom-0 left-0 translate-y-full w-full border-y h-80 overflow-auto cursor-auto">
                {items.length > 0 ? items.map((item:IProduct) => {
                    const { id } = item;
                    return (
                        <SearchListItem key={id} {...item} />
                    )
                }) : !isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <span>No results</span>
                    </div>
                ) : null}
                {isLoading && (
                    <div className="flex items-center justify-center h-80">
                        <div>
                            <ReactLoading className="mx-auto" type="spin" color="black" height={40} width={40}/>
                            <span>Loading</span>
                        </div>
                    </div>
                )}
                {hasShowMore && (
                    <div className="container mx-auto">
                        <Button className="text-sm md:text-base block mx-auto my-4" color="primary" >Show more</Button>
                    </div>
                )}
                <Overlay onClick={closeSearchList}/>
            </div>
        ) 
    )
}