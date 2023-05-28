import styled from "styled-components";
import { Button } from "../components/common/Button";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isMobileState } from "../store/atom";
import { CartIcon, ChatIcon } from "@/components/common/icons";
import { item } from "@/testData";
import CartModal from "@/components/cart/CartModal";

const ProductDetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useRecoilValue(isMobileState);
  // const { id } = useParams();
  //TODO : data연결
  // const { data: item } = useGetItem(id!) as { data: ProductValues };
  const handleCartClick = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {item &&
        (isMobile ? (
          <MobileProductDetailPageWrapper>
            <MobileImg />
            <div>
              <ProductDetailInfoBox>
                <ProductInfoWrapper>
                  {item.stock > 0 ? (
                    <InstockLabel>In Stock</InstockLabel>
                  ) : (
                    <InstockLabel>Sold Out</InstockLabel>
                  )}

                  <ProductDetailTitle>{item.productName}</ProductDetailTitle>
                  <ProductDetailPrice>Rp {item.price}</ProductDetailPrice>
                </ProductInfoWrapper>

                <Button Icon={<CartIcon size={18} />} onClick={handleCartClick}>
                  Add To Cart
                </Button>
                <ProductDetailWrapper>
                  <p>Color : {item.color}</p>
                  <p>Material : {item.material}</p>
                  <p>Size : {item.size}</p>
                </ProductDetailWrapper>

                <Button variant="outlined" Icon={<ChatIcon size={18} />}>
                  Product inquiry
                </Button>
              </ProductDetailInfoBox>
            </div>
          </MobileProductDetailPageWrapper>
        ) : (
          <ProductDetailPageWrapper>
            <Img src={String(item.image)} />
            <div>
              <ProductDetailInfoBox>
                <ProductInfoWrapper>
                  {item.stock > 0 ? (
                    <InstockLabel>In Stock</InstockLabel>
                  ) : (
                    <InstockLabel>Sold Out</InstockLabel>
                  )}

                  <ProductDetailTitle>{item.productName}</ProductDetailTitle>
                  <ProductDetailPrice>Rp {item.price}</ProductDetailPrice>
                </ProductInfoWrapper>

                <Button Icon={<CartIcon size={18} />} onClick={handleCartClick}>
                  Add To Cart
                </Button>
                <ProductDetailWrapper>
                  <p>Color : {item.color}</p>
                  <p>Material : {item.material}</p>
                  <p>Size : {item.size}</p>
                </ProductDetailWrapper>

                <Button variant="outlined" Icon={<ChatIcon size={18} />}>
                  Product inquiry
                </Button>
              </ProductDetailInfoBox>
            </div>
          </ProductDetailPageWrapper>
        ))}
      {isModalOpen && (
        <CartModal isOpen={isModalOpen} onClose={closeModal} item={item} />
      )}
    </>
  );
};

export default ProductDetailPage;

const ProductDetailPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 20px;
  padding: 0 100px 50px 100px;
`;
const MobileProductDetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

const ProductDetailInfoBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--color-text);
`;
const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--color-sub-text);
`;

const Img = styled.img`
  width: 500px;
  height: 680px;
  background-color: black;
`;
const MobileImg = styled.img`
  width: 100%;
  height: 300px;
  background-color: black;
`;

export const InstockLabel = styled.div`
  background-color: var(--color-main);
  max-width: 100px;
  max-height: 40px;
  text-align: center;
  color: white;
  padding: 4px;
  border-radius: 2px;
`;

export const ProductDetailTitle = styled.p`
  font-size: 24px;
`;

export const ProductDetailPrice = styled.p`
  color: var(--color-sub-text);
  font-size: 16px;
`;
