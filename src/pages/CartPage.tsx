import styled from "styled-components";
import { CheckBoxIcon, EmptyBoxIcon } from "@/components/common/icons";
import CartCard from "@/components/cart/CartCard";
import TotalPriceCard from "@/components/cart/TotalPriceCard";
import { useRecoilValue } from "recoil";
import { isMobileState } from "@/store/atom";
import { useEffect, useState } from "react";

type CartItem = {
  productName: string;
  quantity: number;
  price: number;
  image: string;
};

const CartPage = () => {
  const isMobile = useRecoilValue(isMobileState);

  const [combinedItems, setCombinedItems] = useState<CartItem[]>([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const [isSelected, setIsSelected] = useState<boolean[]>(
    new Array(combinedItems.length).fill(false)
  );

  const handleSelectAll = () => {
    const newIsAllSelected = !isAllSelected;
    setIsAllSelected(newIsAllSelected);
    setIsSelected(isSelected.map(() => newIsAllSelected));
  };
  const handleSelectedItemsChange = (index: number) => {
    const newIsSelected = [...isSelected];
    newIsSelected[index] = !newIsSelected[index];
    setIsSelected(newIsSelected);
  };
  useEffect(() => {
    const selectedItem: CartItem[] = JSON.parse(
      localStorage.getItem("selectedItems") ?? "[]"
    );
    const combined = selectedItem.reduce<CartItem[]>((acc, item) => {
      const existingItem = acc.find((i) => i.productName === item.productName);
      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.price = item.price;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    setCombinedItems(combined);
    setIsSelected(new Array(combined.length).fill(false));
  }, []);

  useEffect(() => {
    setIsAllSelected(isSelected.every(Boolean));
  }, [isSelected]);

  return (
    <>
      {isMobile ? (
        <>
          <MobileTitle>My Cart ({combinedItems.length})</MobileTitle>
          <MobileCartPageWrapper>
            <MobileSelectBox>
              <div onClick={handleSelectAll}>
                {isAllSelected ? (
                  <CheckBoxIcon size={24} />
                ) : (
                  <EmptyBoxIcon size={24} />
                )}
              </div>
              Select All
            </MobileSelectBox>
            <CartCard
              selectedItem={combinedItems}
              isSelected={isSelected}
              onSelectedItemsChange={handleSelectedItemsChange}
            />
            <TotalPriceCard selectedItem={combinedItems} />
          </MobileCartPageWrapper>
        </>
      ) : (
        <>
          <Title>My Cart ({combinedItems.length})</Title>
          <SelectBox onClick={handleSelectAll}>
            {isAllSelected ? (
              <CheckBoxIcon size={24} />
            ) : (
              <EmptyBoxIcon size={24} />
            )}
          </SelectBox>
          <CartPageWrapper>
            <CartCard
              selectedItem={combinedItems}
              isSelected={isSelected}
              onSelectedItemsChange={handleSelectedItemsChange}
            />
            <TotalPriceCard selectedItem={combinedItems} />
          </CartPageWrapper>
        </>
      )}
    </>
  );
};

export default CartPage;

const CartPageWrapper = styled.div`
  padding: 20px 200px;
  color: var(--color-text);
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
`;
const MobileCartPageWrapper = styled.div`
  padding: 20px;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: var(--color-sub-text);
  padding-left: 200px;
`;

const MobileSelectBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: var(--color-sub-text);
`;

const Title = styled.p`
  font-size: 20px;
  padding: 20px 200px;
`;
const MobileTitle = styled.p`
  font-size: 20px;
  padding: 20px;
`;
