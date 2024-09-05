'use client'
import { useCallback, useEffect, useMemo, useState } from "react";
import type { IUseSearchbar, ISearchFilter } from "../searchbar/searchbar.types";
import { IProduct } from "@/app/types";
import { debounce } from "lodash";
import useSWR from 'swr'
import { useSearchParams } from 'next/navigation'
import { useQueryParams } from "./useQueryParams";
import { SWRConfig } from "swr";
import { memoryCacheProvider } from "@/app/swr-provider";


const fetcher = async <T>(
    input: RequestInfo,
    init?: RequestInit
): Promise<T> => {
    const res = await fetch(input, init);
    const data = await res.json() as Promise<T>;

    if(typeof data === "string" && data === "Not found"){
        throw new Error('Not found');
    }

    return data;
};

export const useSearchbar = () => {

    const minSearchChars = 3;
    const [phrase, setPhrase] = useState('');
    const { createQueryUrl} = useQueryParams('https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/products');
    const searchUrl = useMemo(() => createQueryUrl({searchParams: { search: phrase}}), [phrase]);
    const { data, error } = useSWR(phrase.length >= minSearchChars ? searchUrl : null, fetcher<IProduct[]>, {onSuccess: (data) => {
        const map = memoryCacheProvider();
            map.set(searchUrl as string, data);
            console.log('Data cached in memory:', data);
      },})


    const onPhraseChange = useCallback(
        debounce((value: string) => {
            setPhrase(value);
        }, 1000), [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        onPhraseChange(value);
    }

    return {
        matchedProducts: data || [],
        handleChange
    }
}