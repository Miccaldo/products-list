import { IProduct } from "@/app/types"

export interface ISearchbar {
    className?: string
}

export interface ISearchFilter {
    productName: string
}

export interface ISearchList {
    items: IProduct[],
    opened: boolean,
    closeSearchList: () => void,
    isLoading: boolean,
    hasShowMore: boolean
}

export interface IUseSearchbar {
    products: IProduct[],
    phrase: string
}

