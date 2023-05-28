import styled from "styled-components";
import {
  CheckBoxIcon,
  EmptyBoxIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "@/components/common/icons";
import {
  InstockLabel,
  ProductDetailPrice,
  ProductDetailTitle,
} from "@/pages/ProductDetailPage";

type CartCardProps = {
  selectedItem: CartItem[];
  isSelected: boolean[];
  onSelectedItemsChange: (index: number) => void;
  increaseQuantity: (index: number) => void;
  decreaseQuantity: (index: number) => void;
  removeItem: (index: number) => void;
};

const CartCard = ({
  selectedItem,
  isSelected,
  onSelectedItemsChange,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}: CartCardProps) => {
  if (!selectedItem) {
    return null;
  }

  const handleSelect = (index: number) => {
    onSelectedItemsChange(index);
  };

  return (
    <>
      {selectedItem.map((item: CartItem, index: number) => {
        return (
          <CartCardWrapper>
            <CartCardContentBox onClick={() => handleSelect(index)}>
              {isSelected[index] ? (
                <CheckBoxIcon size={28} />
              ) : (
                <EmptyBoxIcon size={28} />
              )}

              <ProductDetailBox>
                <Img src={String(item.image)} />
                <div>
                  <InstockLabel>In Stock</InstockLabel>
                  <CartProductDetailTitle>
                    {item.productName}
                  </CartProductDetailTitle>
                  <CartProductDetailPrice>
                    Rp {item.price}
                  </CartProductDetailPrice>
                </div>
              </ProductDetailBox>
            </CartCardContentBox>
            <ButtonBox>
              <TrashIcon size={24} onClick={() => removeItem(index)} />
              <CountBox>
                <MinusIcon size={24} onClick={() => decreaseQuantity(index)} />
                <span>{item.quantity}</span>
                <PlusIcon size={24} onClick={() => increaseQuantity(index)} />
              </CountBox>
            </ButtonBox>
          </CartCardWrapper>
        );
      })}
    </>
  );
};

export default CartCard;

const CartCardWrapper = styled.div`
  background-color: var(--color-white);
  padding: 15px;
  border-bottom: 1px solid var(--color-light-gray);
  width: 100%;
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
  background-color: black;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const CountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const ProductDetailBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CartCardContentBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CartProductDetailTitle = styled(ProductDetailTitle)`
  font-size: 18px;
`;
const CartProductDetailPrice = styled(ProductDetailPrice)`
  font-size: 14px;
`;
