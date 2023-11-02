'use client';

import { ProductPageContextProvider } from "@/contexts/ProductPageContextProvider";
import ProductPage from "@/components/ProductPage/ProductPage";

interface Props {
  params: {
    id: string
    category: string
  }
}

export default function Page({ params }: Props) {
  return (
    <ProductPageContextProvider params={params}>
      <ProductPage />
    </ProductPageContextProvider>
  )
}
