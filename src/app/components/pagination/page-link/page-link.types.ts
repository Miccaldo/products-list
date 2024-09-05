export interface IPageLink extends React.PropsWithChildren {
    href: URL | string,
    active?: boolean
}