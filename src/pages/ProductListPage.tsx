import styled from "styled-components";
import ProductCard from "@/components/products/ProductCard";
import SideBar from "@/components/layout/SideBar";
import SideBarMobile from "@/components/layout/SideBarMobile";
import { useGetItems } from "@/services";
import { useRecoilValue } from "recoil";
import { isMobileState } from "@/store/atom";
import { useSortedData } from "@/hooks/useSortedData";
import { useState } from "react";

const ProductListPage = () => {
  const isMobile = useRecoilValue(isMobileState);
  const { data: items, isLoading, error } = useGetItems();
  const [selectedCategory, setSelectedCategory] = useState(""); // Selected category state
  const [selectedSort, setSelectedSort] = useState<SortByType>("newest"); // Selected sort state
  const sortedItems: ProductValues[] = useSortedData(items, selectedSort);
  const [selectedColor, setSelectedColor] = useState(""); // Selected color state
  const filteredItems = sortedItems.filter((item) => {
    const isCategoryMatched =
      selectedCategory === "" || item.category === selectedCategory;
    const isColorMatched = selectedColor === "" || item.color === selectedColor;
    return isCategoryMatched && isColorMatched;
  });

  return (
    <>
      {isMobile ? (
        <MobileProductListPageWrapper>
          <SideBarMobile
            setSelectedCategory={setSelectedCategory}
            setSelectedColor={setSelectedColor}
            setSelectedSort={setSelectedSort}
          />
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            ""
          ) : (
            <ProductCardBox>
              {filteredItems.map((item: ProductValues) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </ProductCardBox>
          )}
        </MobileProductListPageWrapper>
      ) : (
        <ProductListPageWrapper>
          <SideBar
            setSelectedCategory={setSelectedCategory}
            setSelectedColor={setSelectedColor}
            setSelectedSort={setSelectedSort}
          />
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            ""
          ) : (
            <ProductCardBox>
              {filteredItems.map((item: ProductValues) => (
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
