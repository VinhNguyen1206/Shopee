import { type To } from "react-router-dom";

export type LoginOtpProps = {
  link1?: To;
};

export type LoginQrProps = {
  link1?: To;
};
export type LoginProps = {
  link1?: To;
  link2?: To;
  link3?: To;
};

export type VariantOption = {
  variant_option_id: number;
  variant_option_name: string;
};

export type Variant = {
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
  sold: string;
  sale: number;
  sale_price: number;
  variants: Variant[];
};

export type ProductData = {
  products: Products[];
};

export type CartProduct = {
  id: number;
  name: string;
  images: string[];
  sale_price: number;
  quantity: number;
  chooseVariants: ChooseVariants[];
};

export type CartState = {
  products: CartProduct[];
};

export type ChooseVariants = {
  variant_id: number;
  variant_title: string;
  option_id: number;
  option_name: string;
};
