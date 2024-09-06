import { useQueryParams } from "./useQueryParams"
import { useSearchParams } from "next/navigation"
import { useRouter } from 'next/navigation'
import type { FormValues } from "../components/filters/types"
import { QueryParams } from "@/app/types"

export const useFilters = () => {
    const params = Object.fromEntries(new Map(useSearchParams()));
    const router = useRouter()
    const { createQueryUrl } = useQueryParams(process.env.NEXT_PUBLIC_BASE_URL);

    let active = params.active ? JSON.parse(params.active) : false;
    let promotion = params.promotion ? JSON.parse(params.promotion) : false;
    const initialValues: FormValues = { active, promotion };

    const convertToQueryParams = (values: FormValues, params: QueryParams): QueryParams => {
        const queryParams = Object.fromEntries(
            Object.entries(values)
              .filter(([key, value]) => {
                delete params[key];
                return value;
              })
              .map(([key, value]: [string, boolean]) => [key, value.toString()])
          );
        
          return queryParams;
    }

    const handleSubmit = (
        values: FormValues
      ) => {
        const queryParams = convertToQueryParams(values, params);
      
        const filterUrl = createQueryUrl({ searchParams: { ...params, ...queryParams, page: '1' } }) as URL;
        router.push(filterUrl.href);
      };

    return {
        initialValues,
        handleSubmit
    }
}