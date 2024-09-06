import { useQueryParams } from "./hooks/useQueryParams";
import { ISearchParams } from "./types";
import { Pagination } from "./components/pagination/pagination";
import { ProductsGrid } from "./components/products-grid/products-grid";

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

  if(searchParams && searchParams.limit && !searchParams.page){
    searchParams.page = '1';
  }

  let data = await fetch(createQueryUrl({searchParams}));
  let products = await data.json();

  if(products === 'Not found'){
    products = [];
    totalItems = [];
  }

  return (
      <main className="container mx-auto px-4 flex min-h-vh-minus-100 flex-col items-center justify-between pt-10">
        <ProductsGrid items={products}/>
        <Pagination totalItems={totalItems}/>
      </main>
  );
}

