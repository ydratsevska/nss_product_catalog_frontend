'use client';
import {
	createContext,
	useEffect,
	useState,
  useRef,
  ReactNode,
} from 'react';
import {ProductDescriptive} from "@/types/ProductDescriptive";
import {GetByIdResponse} from "@/types/GetByIdResponse";
import {getAllVariants, getPreferences} from "@/api/products";
import Loader from "@/components/Loader/Loader";
import {Product} from "@/types/Product";
import {redirect} from "next/navigation";

interface ProductContext {
  selectedImg: string | undefined;
  setSelectedImg: (url: string) => void;
  isLoading: Boolean;
  selectedProduct: ProductDescriptive | null;
	onColorChange: (color: string) => void;
  onCapacityChange: (capacity: string) => void;
  preferences: Product[] | null;
};

export const ProductContext = createContext<ProductContext>({
	selectedImg: '',
	setSelectedImg: () => {},
	isLoading: false,
	selectedProduct: null,
  onColorChange: () => {},
  onCapacityChange: () => {},
  preferences: null,
});

interface Data extends GetByIdResponse {
  preferences?: Product[]
}

interface Props {
  children: ReactNode,
  params: {
    id: string
  }
}

async function fetchData(id: string): Promise<Data> {
  const dataCurrent: Data = await getAllVariants(id);
  dataCurrent.preferences = await getPreferences(id);

  if (!dataCurrent) {
    throw new Error('No matching product');
  }

  return dataCurrent;
}

export function ProductPageContextProvider({ children, params }: Props) {
	const data = useRef<Data>();

  useEffect(() => {
    const fetchDataAndSetupContext = async () => {
      setIsLoading(true);
      try {
        data.current = await fetchData(params.id);
        const descriptiveProduct = data.current.variants.find(
          (variant) => data.current?.product.itemId === variant.id
        ) as ProductDescriptive;
        setSelectedProduct(descriptiveProduct);
        setSelectedImg(descriptiveProduct.images[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndSetupContext();
  }, [params.id]);

	const [
		selectedProduct,
		setSelectedProduct
	] = useState<ProductDescriptive | null>(null);
	const [
		selectedImg,
		setSelectedImg
	] = useState(selectedProduct?.images[0]);
	const [
		isLoading,
		setIsLoading,
	] = useState(true);

	const onColorChange = (newColor: string) => {
		const product = data
			.current
			?.variants
			.find(({ color, capacity}) => color === newColor && capacity === selectedProduct?.capacity) || null;
    console.log(product);

		setSelectedProduct(product);
		setSelectedImg(product?.images[0])
	}

	const onCapacityChange = (newCapacity: string) => {
		const product = data
			.current
			?.variants
			.find(({ color, capacity}) => (color === selectedProduct?.color && capacity === newCapacity)) || null
    console.log(product);

		setSelectedProduct(product);
	}


  return (
    isLoading
      ? (
        <Loader/>
      ) : (
		    <ProductContext.Provider
			    value={{
				    selectedImg,
				    isLoading,
				    selectedProduct,
            onColorChange,
            onCapacityChange,
            setSelectedImg,
            preferences: data.current?.preferences as Product[],
			    }}
		    >
			    {children}
		    </ProductContext.Provider>
      )
  );
}
