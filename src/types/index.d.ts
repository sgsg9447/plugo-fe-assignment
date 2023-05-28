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
  createdAt: string | Date;
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

type DataType = {
  price: number;
  createdAt: string | Date;
};

type SortByType =
  | "highestPrice"
  | "lowestPrice"
  | "newest"
  | "oldest"
  | "category"
  | "color";

type SideBarProps = {
  setSelectedCategory: (category: string) => void;
  setSelectedColor: (color: string) => void;
  setSelectedSort: React.Dispatch<React.SetStateAction<SortByType>>;
};
