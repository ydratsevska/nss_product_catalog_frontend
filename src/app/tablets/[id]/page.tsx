'use client';

import { ProductPageContextProvider } from "@/contexts/ProductPageContextProvider";
import ProductPage from "@/components/ProductPage/ProductPage";

interface Props {
  params: {
    id: string
  }
}

export default function Page({ params }: { params: {id: string}}) {
  return (
    <ProductPageContextProvider params={params}>
      <ProductPage />
    </ProductPageContextProvider>
  )
}
