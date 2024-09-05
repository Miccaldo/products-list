'use client'
import { ReactNode } from "react";
import { usePagination } from "../hooks/usePagination"
import { useQueryParams } from "../hooks/useQueryParams";
import Link from "next/link";
import { PageLink } from "./page-link/page-link";
import { usePathname } from "next/navigation";

interface IPagination {
    totalItems: number
}

interface IMapRange {
    n: number,
    m: number
}

export const Pagination: React.FC<IPagination> = ({totalItems}) => {

    const { page, limit, totalPages } = usePagination({totalItems});
    let { createQueryUrl } = useQueryParams(process.env.NEXT_PUBLIC_BASE_URL);

    const buildPages = ({n,m}:IMapRange) => {
        const result = [];
        for (let i = n; i <= m; i++) {
            let url = createQueryUrl({searchParams: { page: i.toString(), limit: limit.toString()}})
            result.push(<PageLink key={i} href={url} active={i === page}>{i}</PageLink>);
        }
        return result;
    }

    const PaginationComponent = () => {
        if(totalItems === 0) return null;
        if(totalPages < 7){
            return buildPages({n: 1, m: totalPages});
        }else if(totalPages > 6){
            let firstPages: ReactNode[] = [];
            let centralPages: ReactNode[] = [];
            let lastPages: ReactNode[] = [];

            if(page === 1 || page === totalPages){
                firstPages = buildPages({n: 1, m: 3});
                lastPages = buildPages({n: totalPages - 2, m: totalPages});
            }else{
                firstPages = buildPages({n: 1, m: page-2 > 3 ? 3 : page - 2});
                centralPages = buildPages({n: page - 1, m: page + 1});
                lastPages = buildPages({n: page +2 < totalPages - 2 ? totalPages - 2 : page + 2, m: totalPages});
            }

            return (
                <>
                    <Link href={createQueryUrl({searchParams: { page: '1', limit: limit.toString()}})}>FIRST</Link>
                    {firstPages}
                    {(page-2 > 3) && <span>...</span>}
                    {centralPages}
                    {(page +2 < totalPages - 2) && <span>...</span>}
                    {lastPages}
                    <Link href={createQueryUrl({searchParams: { page: totalPages.toString(), limit: limit.toString()}})}>LAST</Link>
                </>
            )
        }
    }
    
    return (
        <div>
            <PaginationComponent />
        </div>
    )
}