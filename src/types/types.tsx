type VariantOption = {
  variant_option_id: number;
  variant_option_name: string;
};

type Variant = {
  id: number;
  title: string;
  options: VariantOption[];
};

export type Products = {
  id: number;
  name: string;
  images: string[];
  review: number;
  liked: number;
  price: string;
  sold: number;
  sale: number;
  sale_price: string;
  variants: Variant[];
};

export type ProductData = {
  products: Products[];
};
