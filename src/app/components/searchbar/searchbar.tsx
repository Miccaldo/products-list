'use client'
import { ISearchbar } from "./searchbar.types"
import { IProduct } from "@/app/types"
import { useState } from "react"
import { useSearchbar } from "../hooks/useSearchbar"


export const Searchbar: React.FC<ISearchbar> = ({}) => {

    const [opened, setOpened] = useState<boolean>(false);
    const { matchedProducts, handleChange } = useSearchbar();

    return (
        <section>
            Searchbar
            
            <input type="text" placeholder="Search products" onChange={handleChange} />

            {matchedProducts.map((product:IProduct) => {
                const { id } = product;
                return (
                    <div key={id}>{id}</div>
                )
            })}
        </section>
    )
}