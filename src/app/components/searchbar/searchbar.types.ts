import { IProduct } from "@/app/types"

export interface ISearchbar extends React.PropsWithChildren {
}

export interface ISearchFilter {
    productName: string
}

export interface IUseSearchbar {
    products: IProduct[],
    phrase: string
}

