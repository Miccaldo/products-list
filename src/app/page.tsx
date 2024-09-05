import type { IProduct } from "./types";
import { useQueryParams } from "./components/hooks/useQueryParams";
import { ISearchParams } from "./types";
import { Pagination } from "./components/pagination/pagination";


export default async function Products({
  searchParams,
}: ISearchParams) {
  let { createQueryUrl } = useQueryParams(process.env.API_BASE_URL + '/products');

  let noPaginationSearchParams = { ...searchParams };
  delete noPaginationSearchParams.page;
  delete noPaginationSearchParams.limit;

  let dataOnlyForTotals = await fetch(createQueryUrl({searchParams: noPaginationSearchParams}));
  let totalProducts = await dataOnlyForTotals.json();
  let totalItems = totalProducts.length;

  let data = await fetch(createQueryUrl({searchParams}));
  let products = await data.json();

  if(products === 'Not found'){
    products = [];
    totalItems = [];
  }

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {products && products.map((product: IProduct) => {
            return (
              <div key={product.id}>{product.id}</div>
            )
          })}
          <Pagination totalItems={totalItems}/>
      </main>
  );
}

