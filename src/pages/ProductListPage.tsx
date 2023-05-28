import styled from "styled-components";
import ProductCard from "@/components/products/ProductCard";
import SideBar from "@/components/layout/SideBar";
import SideBarMobile from "@/components/layout/SideBarMobile";
import { useGetItems } from "@/services";
import { useRecoilValue } from "recoil";
import { isMobileState } from "@/store/atom";
import { useSortedData } from "@/hooks/useSortedData";

const ProductListPage = () => {
  const isMobile = useRecoilValue(isMobileState);
  const { data: items, isLoading, error } = useGetItems();
  const sortedItems: ProductValues[] = useSortedData(items, "oldest"); // Ensure sortedItems is of type ProductValues[]

  return (
    <>
      {isMobile ? (
        <MobileProductListPageWrapper>
          <SideBarMobile />
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            ""
          ) : (
            <ProductCardBox>
              {sortedItems.map((item: ProductValues) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </ProductCardBox>
          )}
        </MobileProductListPageWrapper>
      ) : (
        <ProductListPageWrapper>
          <SideBar />
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            ""
          ) : (
            <ProductCardBox>
              {sortedItems.map((item: ProductValues) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </ProductCardBox>
          )}
        </ProductListPageWrapper>
      )}
    </>
  );
};

export default ProductListPage;

const ProductCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
`;

const MobileProductListPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  margin-bottom: 10px;
`;

const ProductListPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 10px;
  margin-bottom: 10px;
`;
