import { IProductReviews } from "./types"
import StarIcon from '../../../../public/star.svg'
import StarOutlineIcon from '../../../../public/star-outlined.svg'

export const ProductReviews: React.FC<IProductReviews> = ({ rating }) => {

    const Stars = () => {
        const maxStars = 5;
        const starsCount = Math.ceil(rating / 2);
        const outlineStarsCount = maxStars - starsCount;

        const stars = Array.from({length: starsCount}).map((item) => <StarIcon key={item} width={16} height={16}/>);
        const outlineStars = Array.from({length: outlineStarsCount}).map((item) => <StarOutlineIcon key={item} width={16} height={16}/>);;

        return (
            <>
                {stars}
                {outlineStars}
            </>
        )
    }

    return (
        <div className="flex gap-x-2 mb-4">
            <Stars />
        </div>
    )
}