import { Button } from '../ui/button/button'
import { IProduct } from '@/app/types'
import { ProductReviews } from './product-reviews'
import Image from 'next/image'

export const ProductCard: React.FC<IProduct> = ({ name, description, image, rating, promotion, active }) => {
    return (
        <div className=' bg-white rounded-lg flex flex-col justify-between pb-6 relative max-w-xs'>
            {promotion && (
                <div className='absolute px-2 bg-orange-400 text-white rounded-sm top-8 z-1'>
                    Promo
                </div>
            )}
            <div> 
                <Image width={320} height={240} priority={true} className={`rounded-t-lg  ${!active ? 'grayscale' : ''}`} src={image} alt={name}/>
                <div className='px-4 pt-3'>
                    <h3 className='font-bold'>{name}</h3>
                    <p className='text-slate-500 h-24 overflow-hidden'>{description}</p>
                </div>
            </div>
            
            <div className='px-4 pt-4'>
                <ProductReviews rating={rating} />
                <Button className='w-full' color='primary' disabled={!active}>
                    {active ? 'Show details' : 'Unavailable'}
                </Button>
            </div>
        </div>
    )
}