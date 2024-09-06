import Link from "next/link"
import type { IPageLink } from "./page-link.types"

export const PageLink: React.FC<IPageLink> = ({href, active, children}) => {
    return (
        <Link href={href} className={`mx-3 ${active ? 'font-bold text-blue-600' : ''}`}>{children}</Link>
    )
}