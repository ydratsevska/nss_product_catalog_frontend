import { Product } from "@/types/Product";
import { ProductDescriptive } from "@/types/ProductDescriptive";

export interface GetByIdResponse {
	product: Product;
	variants: ProductDescriptive[];
}
