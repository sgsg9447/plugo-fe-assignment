import { ChangeEvent, FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { v4 as uuidv4 } from "uuid";
import { useCreateItem } from "../services";
//TODO: Img upload 구현

const DEFAULT_FORM_VALUES = {
  productName: "",
  price: 0,
  stock: 0,
  category: "",
  color: "",
  material: "",
  size: "",
  image: null,
  createdAt: new Date(),
  id: "",
};

const AdminPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [formValues, setFormValues] =
    useState<FormValuesType>(DEFAULT_FORM_VALUES);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const selectedFile = event.target.files[0];
      setImage(selectedFile);

      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        image: selectedFile,
      }));
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const createItemMutation = useCreateItem();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const itemId = uuidv4();
    const createdAt = new Date().toISOString(); // Get the current time in ISO string format
    const itemWithId = {
      ...formValues,
      id: itemId,
      createdAt: createdAt,
      image: "image",
    };
    try {
      await createItemMutation.mutateAsync(itemWithId);
      resetForm();
      alert("Product created successfully");
    } catch (error) {
      console.error("Failed to create product:", error);
      alert("Failed to create product. Please try again.");
    }
  };
  const resetForm = () => {
    setFormValues(DEFAULT_FORM_VALUES);
    setImage(null);
  };

  return (
    <ProductRegistrationPageWrapper>
      <h1>Add Product</h1>
      <ProductDetailInfoBox onSubmit={handleFormSubmit}>
        <ProductOverviewWrapper>
          <h2>Overview</h2>
          <Input
            name="productName"
            type="text"
            placeholder="Product Name"
            value={formValues.productName}
            onChange={handleInputChange}
          />
          <Input
            name="price"
            type="number"
            placeholder="Price"
            value={formValues.price}
            onChange={handleInputChange}
          />
          <Input
            name="stock"
            type="number"
            placeholder="Stock Quantity"
            value={formValues.stock}
            onChange={handleInputChange}
          />
          <Input
            name="category"
            type="text"
            placeholder="Category ex.Hijap, Top, Bottom"
            value={formValues.category}
            onChange={handleInputChange}
          />
          <ImageInputBox>
            <ImageInputText>
              {image
                ? `Selected file:
                ${
                  image.name.length > 20
                    ? image.name.substring(0, 20) + "..."
                    : image.name
                }`
                : "Product Image"}
            </ImageInputText>
            <input
              ref={fileInputRef}
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <Button variant="outlined" type="button" onClick={handleClick}>
              Select Image
            </Button>
          </ImageInputBox>
        </ProductOverviewWrapper>

        <ProductDetailWrapper>
          <h2>Detail</h2>
          <Input
            name="color"
            type="text"
            placeholder="Color ex.White, Black, Beige, Green, Red "
            value={formValues.color}
            onChange={handleInputChange}
          />
          {/* detail-material */}
          <Input
            name="material"
            type="text"
            placeholder="Meterial ex.Silk, Cotton, Linen"
            value={formValues.material}
            onChange={handleInputChange}
          />
          {/* detail-size */}
          <Input
            name="size"
            type="text"
            placeholder="Size ex.Sm, Md, Lg"
            value={formValues.size}
            onChange={handleInputChange}
          />
        </ProductDetailWrapper>

        <Button type="submit">Create Product</Button>
      </ProductDetailInfoBox>
    </ProductRegistrationPageWrapper>
  );
};

export default AdminPage;

const ProductRegistrationPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 100px 50px 100px;
`;

const ProductDetailInfoBox = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--color-sub-text);
`;
const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--color-sub-text);
`;

const ImageInputBox = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  padding-left: 10px;
  font-weight: 400;
`;

const ImageInputText = styled.p`
  width: 500px;
  font-size: 14px;
`;
