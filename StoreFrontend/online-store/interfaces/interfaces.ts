export interface Category {
  id: string;
  name: string;
  icon?: string;
  subCategories?: Category[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface Good {
  id: string;
  title: string;
  description?: string;
  price: number;
  quantity?: number;
  imageUrl: string;
  categoryId: string;
}

export interface CartItem {
  good: Good;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (good: Good, quantity: number) => void;
  removeFromCart: (goodId: string) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
}

export type DeliveryMethod = "nova-poshta" | "ukrposhta" | "courier";

export interface FormData {
  name: string;
  secondName: string;
  phone: string;
  email: string;
  delivery: DeliveryMethod;
  city: string;
  address: string;
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCvv: string;
}
