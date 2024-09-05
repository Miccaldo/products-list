'use client';
import { SWRConfig } from 'swr'

function localStorageProvider(): Map<string, any> {
    let map = new Map<string, any>();

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        // When initializing, we restore the data from `localStorage` into a map.
        const storedData = localStorage.getItem('app-cache');
        console.log(storedData)
        if (storedData) {
            console.log('Loading data from localStorage:', storedData);
            map = new Map<string, any>(JSON.parse(storedData));
        } else {
            console.log('No data found in localStorage');
        }

        // Before unloading the app, we write back all the data into `localStorage`.
        window.addEventListener('beforeunload', () => {
            const appCache = JSON.stringify(Array.from(map.entries()));
            console.log('Saving data to localStorage:', appCache);
            localStorage.setItem('app-cache', appCache);
        });
    }

    // We still use the map for write & read for performance.
    return map;
}

const cacheMap = new Map<string, any>();

export function memoryCacheProvider(): Map<string, any> {
    return cacheMap;
}


export const SWRProvider = ({ children } : React.PropsWithChildren) => {
  return <SWRConfig value={{ provider: memoryCacheProvider,
    revalidateOnFocus: false, // Optional: Prevent refetching on window focus
        revalidateOnReconnect: false,
   }}>{children}</SWRConfig>
};