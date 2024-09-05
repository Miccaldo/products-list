'use client'
import { useEffect } from "react"
import { IProduct } from "@/app/types"
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks"
import { initProducts } from "../../../../lib/features/products"

interface IProductsClientProvider {
  products: IProduct[]
}

export const ProductsClientProvider: React.FC<IProductsClientProvider> = ({products}) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initProducts(products));
  }, [dispatch, products])

  return <></>
}