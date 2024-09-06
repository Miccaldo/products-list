import { ISearchParams } from '@/app/types';

export const useQueryParams = (url: string | undefined) => {
	const createQueryUrl = ({ searchParams }: ISearchParams) => {
		let queryUrl: string | URL = '';
		if (url) {
			queryUrl = new URL(url);
			for (const parameter in searchParams) {
				queryUrl.searchParams.append(parameter, searchParams[parameter] as string);
			}
		}
		return queryUrl;
	};

	return {
		createQueryUrl,
	};
};
