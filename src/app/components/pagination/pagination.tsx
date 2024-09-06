'use client';
import { ReactNode } from 'react';
import { usePagination } from '../../hooks/usePagination';
import { useQueryParams } from '../../hooks/useQueryParams';
import Link from 'next/link';
import { PageLink } from './page-link/page-link';
import type { IPagination, IMapRange } from './types';
import { useSearchParams } from 'next/navigation';

export const Pagination: React.FC<IPagination> = ({ totalItems }) => {
	const { page, limit, totalPages } = usePagination({ totalItems });
	const { createQueryUrl } = useQueryParams(process.env.NEXT_PUBLIC_BASE_URL);
	const params = Object.fromEntries(new Map(useSearchParams()));

	const buildPages = ({ n, m }: IMapRange) => {
		const result = [];
		for (let i = n; i <= m; i++) {
			const url = createQueryUrl({
				searchParams: {
					...params,
					page: i.toString(),
					limit: limit.toString(),
				},
			});
			result.push(
				<PageLink key={i} href={url} active={i === page} page={i}>
					{i}
				</PageLink>
			);
		}
		return result;
	};

	const PaginationComponent = () => {
		if (totalItems === 0) return null;
		if (totalPages < 7) {
			return buildPages({ n: 1, m: totalPages });
		} else if (totalPages > 6) {
			let firstPages: ReactNode[] = [];
			let centralPages: ReactNode[] = [];
			let lastPages: ReactNode[] = [];

			if (page === 1 || page === totalPages) {
				firstPages = buildPages({ n: 1, m: 3 });
				lastPages = buildPages({ n: totalPages - 2, m: totalPages });
			} else {
				firstPages = buildPages({
					n: 1,
					m: page - 2 > 3 ? 3 : page - 2,
				});
				centralPages = buildPages({ n: page - 1, m: page + 1 });
				lastPages = buildPages({
					n: page + 2 < totalPages - 2 ? totalPages - 2 : page + 2,
					m: totalPages,
				});
			}

			return (
				<>
					<Link
						title="First page"
						className={`${page === 1 ? 'pointer-events-none text-slate-300' : ''}`}
						href={createQueryUrl({
							searchParams: {
								page: '1',
								limit: limit.toString(),
							},
						})}
					>
						First
					</Link>
					{firstPages}
					{page - 2 > 3 && <span>...</span>}
					{centralPages}
					{page + 2 < totalPages - 2 && <span>...</span>}
					{lastPages}
					<Link
						title="Last page"
						className={`${page === totalPages ? 'pointer-events-none text-slate-300' : ''}`}
						href={createQueryUrl({
							searchParams: {
								page: totalPages.toString(),
								limit: limit.toString(),
							},
						})}
					>
						Last
					</Link>
				</>
			);
		}
	};

	return (
		<div className="my-6">
			<PaginationComponent />
		</div>
	);
};
