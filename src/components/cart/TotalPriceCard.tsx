import styled from "styled-components";
import { ProductDetailPrice } from "@/pages/ProductDetailPage";
import { Button } from "@/components/common/Button";

const TotalPriceCard = ({ selectedItem }: { selectedItem: CartItem[] }) => {
  const totalPrice = selectedItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <TotalPriceCardWrapper>
      <Title>Summary Purchase</Title>
      <TotalPriceContent>
        <div>Product Price</div>
        <ProductDetailPrice>Rp {totalPrice}</ProductDetailPrice>
      </TotalPriceContent>
      <Button>Order</Button>
    </TotalPriceCardWrapper>
  );
};

export default TotalPriceCard;

const TotalPriceCardWrapper = styled.div`
  padding: 20px;
  width: 100%;
  background-color: var(--color-white);
  color: var(--color-sub-text);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TotalPriceContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p``;
