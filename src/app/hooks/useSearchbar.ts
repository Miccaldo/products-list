'use client'
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { IProduct } from "@/app/types";
import { debounce } from "lodash";
import useSWR from 'swr'
import { useSearchParams } from 'next/navigation'
import { useQueryParams } from "./useQueryParams";


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
    const maxItems = 10;
    const [phrase, setPhrase] = useState('');
    const params = Object.fromEntries(new Map(useSearchParams()));

    delete params['page'];
    delete params['limit'];

    const { createQueryUrl} = useQueryParams('https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/products');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const searchUrl = useMemo(() => createQueryUrl({searchParams: { ...params, search: phrase}}), [phrase, params.promotion, params.active]);
    const { data, isLoading} = useSWR(phrase.length >= minSearchChars ? searchUrl : null, fetcher<IProduct[]>)
    const [opened, setOpened] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const openSearchList = () => {
        data && data.length > 0 && setOpened(true);
    }

    const closeSearchList = () => {
        if(inputRef.current){
            inputRef.current.blur();
        }
        setOpened(false);
    }

    useEffect(() => {
        phrase.length >= minSearchChars ? setOpened(true) : setOpened(false);
    }, [phrase])

    const debouncedCallback = useMemo(() => 
        debounce((value: string) => {
            setPhrase(value);
        }, 1000),
        []
    );

    const onPhraseChange = useCallback(
        (value: string) => {
            debouncedCallback(value);
        },
        [debouncedCallback]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        onPhraseChange(value);
    }

    return {
        opened,
        openSearchList,
        closeSearchList,
        matchedProducts: data?.slice(0, maxItems) || [],
        handleChange,
        inputRef,
        isLoading,
        hasShowMore: data ? data?.length > maxItems : false
    }
}