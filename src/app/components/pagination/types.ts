export interface IPagination {
    totalItems: number
}

export interface IMapRange {
    n: number,
    m: number
}
export interface IPageLink extends React.PropsWithChildren {
    href: URL | string,
    active?: boolean,
    page: number
}