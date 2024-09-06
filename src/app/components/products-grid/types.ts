import { IProduct } from "@/app/types"

export interface IProductsGrid {
    items: IProduct[]
}

export interface IProductCard {
    name: string,
    description: string,
    image: string,
    rating: number
}

export interface IProductReviews {
    rating: number
}
