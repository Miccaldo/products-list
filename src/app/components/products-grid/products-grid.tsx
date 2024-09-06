import type { IProductsGrid } from './types'
import type { IProduct } from '@/app/types'
import { ProductCard } from './product-card'

export const ProductsGrid: React.FC<IProductsGrid> = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {items && items.map((item: IProduct) => {
                const { id } = item;
                return (
                    <ProductCard 
                        key={id}
                        {...item}
                    />
                )
            })}
        </div>
    )
}