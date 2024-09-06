'use client'
import { ISearchbar } from "./searchbar.types"
import { IProduct } from "@/app/types"
import { useState } from "react"
import { useSearchbar } from "../../hooks/useSearchbar"
import { SearchList } from "./search-list"
import MagniferIcon from '../../../../public/magnifer.svg';


export const Searchbar: React.FC = () => {

    const { matchedProducts, handleChange, opened, openSearchList, closeSearchList, inputRef, isLoading, hasShowMore } = useSearchbar();

    return (
        <div className="pt-4 md:pt-0 px-4">
            <label className="flex border rounded-md transition-colors duration-100 items-center has-[:focus-within]:border-gray-500 cursor-pointer">
                <input ref={inputRef} className="w-full p-2 outline-none border-none rounded-md" type="text" placeholder="Search" onClick={openSearchList} onChange={handleChange} />

                <div className="px-4">
                    <MagniferIcon width={24} height={24}/>
                </div>

                <SearchList opened={opened} closeSearchList={closeSearchList} items={matchedProducts} isLoading={isLoading} hasShowMore={hasShowMore} />
            </label>
        </div>
        
    )
}