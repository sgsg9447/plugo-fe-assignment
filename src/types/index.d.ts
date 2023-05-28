type ProductValues = {
  id: string;
  productName: string;
  price: number;
  stock: number;
  category: string;
  color: string;
  material: string;
  size: string;
  image: string;
};

type selectedItem = {
  productName: string;
  price: number;
  stock: number;
  quantity: number;
  image: string;
};

type BaseProductValues = Omit<ProductValues, "image">;

type FormValuesType = BaseProductValues & {
  image: File | null;
  createdAt: Date;
};

type CartItem = Omit<SelectedItem, "stock">;
