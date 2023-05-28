import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ item }: { item?: ProductValues }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/products/${item?.id}`);
  };
  return (
    <ProductCardWrapper onClick={handleCardClick}>
      <Img src={String(item?.image)} alt={item?.productName} />
      <ProductCardTitle>{item?.productName}</ProductCardTitle>
      <ProductCardPrice>Rp {item?.price}</ProductCardPrice>
    </ProductCardWrapper>
  );
};

export default ProductCard;

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Img = styled.img`
  width: 266px;
  height: 266px;
  background-color: var(--color-main);
`;

const ProductCardTitle = styled.p`
  color: var(--color-text);
  font-size: 20px;
  padding-left: 10px;
`;
const ProductCardPrice = styled.p`
  color: var(--color-sub-text);
  font-size: 16px;
  padding-left: 10px;
`;
