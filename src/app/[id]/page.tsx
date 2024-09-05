import type { IProduct } from "../types";

export default async function ProductPage({params}: { params: { id: number}}) {
    const product = await getProduct(params.id);
    console.log(product)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {product.id}
        {product.name}
        {product.description}
        {product.rating}
    </div>
  );
}

const getProduct = async(id: number) => {
    let data = await fetch('https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/products/' + id);
    let product = await data.json();
    return product;
}

export async function generateStaticParams() {
    let data = await fetch('https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/products');
    let products = await data.json();
    return products.map((product: IProduct) => {
        return { id: product.id}
    }) 
  }
