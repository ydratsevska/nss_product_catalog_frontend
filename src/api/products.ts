import { client } from '@/utils/fetchClient';
import { Product } from "@/types/Product";
import {GetByIdResponse} from "@/types/GetByIdResponse";
import {GetSortedDataResponse} from "@/types/GetSortedDataResponse";

export const getAll = (): Promise<Product[]> => {
  return client.get('/products')
};

export const getAllByCategory = (category: string): Promise<Product[]> => {
  return client.get(`/products?type=${category}`)
}

export const getProductsWithDiscount = (): Promise<Product[]> => {
  return client.get(`/products/discount`);
};

export const getProductsNew = (): Promise<Product[]> => {
  return client.get('/products/new');
};

export const getAllVariants = (id: string): Promise<GetByIdResponse> => {
  return client.get(`/products/${id}?variants=true`);
};

export const getPreferences = (id: string): Promise<Product[]> => {
  return client.get(`/products/${id}/recommended`)
}

export default async function getSortedData(type: string, sort: string, limit: string, offset: string): Promise<GetSortedDataResponse> {
  return client.get(
    `/products?${
      type ? `type=${type}&` : ''
    }sort=${sort}&limit=${limit}&offset=${(Number(offset) - 1) * Number(limit)}`,
  )
}
