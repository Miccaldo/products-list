import { useSearchParams } from 'next/navigation';

interface IUsePagination {
	totalItems: number;
}

export const usePagination = ({ totalItems }: IUsePagination) => {
	const searchParams = useSearchParams();

	let page: string | number | null = searchParams.get('page');
	page = page ? parseInt(page) : 1;

	let limit: string | number | null = searchParams.get('limit');
	limit = limit ? parseInt(limit) : totalItems;

	const totalPages = Math.ceil(totalItems / limit);

	const isNextPage = page < totalPages;
	const isPreviousPage = page > 1;

	return {
		page,
		limit,
		totalPages,
		isNextPage,
		isPreviousPage,
	};
};
