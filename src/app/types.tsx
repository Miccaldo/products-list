export interface QueryParams {
	[key: string]: string | undefined;
}

export interface ISearchParams {
	searchParams?: QueryParams;
}

export interface IProduct {
	id: number;
	name: string;
	description: string;
	image: string;
	promotion?: boolean;
	rating: number;
	active?: boolean;
}
