import styled from "styled-components";
import {
  CategoryBox,
  Color,
  ColorBox,
  SideBarSubTitle,
  SideBarTitle,
  SortingBox,
} from "@/components/layout/SideBar";
import { useState } from "react";

const SideBarMobile: React.FC<SideBarProps> = ({
  setSelectedCategory,
  setSelectedColor,
  setSelectedSort,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleSortClick = (sort: SortByType) => {
    setSelectedSort(sort);
  };
  return (
    <SideBarMobileWrapper>
      <CategoryBox>
        <StyleSideBarTitle
          onClick={() => {
            setIsCategoryOpen(!isCategoryOpen);
          }}
        >
          Category
        </StyleSideBarTitle>
        {isCategoryOpen && (
          <>
            <SideBarSubTitle onClick={() => handleCategoryClick("hijap")}>
              Hijap
            </SideBarSubTitle>
            <SideBarSubTitle onClick={() => handleCategoryClick("dress")}>
              Dress
            </SideBarSubTitle>
            <SideBarSubTitle onClick={() => handleCategoryClick("bottom")}>
              Bottom
            </SideBarSubTitle>
            <ColorBox>
              <Color
                bgcolor="var(--color-white)"
                onClick={() => handleColorClick("white")}
              />
              <Color
                bgcolor="var(--color-light-beige)"
                onClick={() => handleColorClick("beige")}
              />
              <Color
                bgcolor="var(--color-light-green)"
                onClick={() => handleColorClick("green")}
              />
              <Color
                bgcolor="var(--color-light-pink)"
                onClick={() => handleColorClick("pink")}
              />
              <Color
                bgcolor="var(--color-black)"
                onClick={() => handleColorClick("black")}
              />
            </ColorBox>
          </>
        )}
      </CategoryBox>

      <SortingBox>
        <StyleSideBarTitle
          onClick={() => {
            setIsSortOpen(!isSortOpen);
          }}
        >
          Sort
        </StyleSideBarTitle>
        {isSortOpen && (
          <>
            <SideBarSubTitle onClick={() => handleSortClick("highestPrice")}>
              Highest Price
            </SideBarSubTitle>
            <SideBarSubTitle onClick={() => handleSortClick("lowestPrice")}>
              Lowest Price
            </SideBarSubTitle>
            <SideBarSubTitle onClick={() => handleSortClick("newest")}>
              Newest
            </SideBarSubTitle>
            <SideBarSubTitle onClick={() => handleSortClick("oldest")}>
              Oldest
            </SideBarSubTitle>
          </>
        )}
      </SortingBox>
    </SideBarMobileWrapper>
  );
};

export default SideBarMobile;

const SideBarMobileWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const StyleSideBarTitle = styled(SideBarTitle)`
  border: 1px solid var(--color-light-gray);
  border-radius: 4px;
  cursor: pointer;
`;
