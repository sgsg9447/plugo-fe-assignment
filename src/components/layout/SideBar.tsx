import styled from "styled-components";
import { SearchIcon } from "@/components/common/icons";

const SideBar: React.FC<SideBarProps> = ({
  setSelectedCategory,
  setSelectedColor,
  setSelectedSort,
}) => {
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
    <SideBarWrapper>
      <SideBarContentBox>
        <SearchBarBox>
          <SearchIcon />
          Search
        </SearchBarBox>
        <CategoryBox>
          <SideBarTitle>Category</SideBarTitle>
          <SideBarSubTitle onClick={() => handleCategoryClick("hijap")}>
            Hijap
          </SideBarSubTitle>
          <SideBarSubTitle onClick={() => handleCategoryClick("dress")}>
            Dress
          </SideBarSubTitle>
          <SideBarSubTitle onClick={() => handleCategoryClick("bottom")}>
            Bottom
          </SideBarSubTitle>
        </CategoryBox>

        <SortingBox>
          <SideBarTitle>Sort</SideBarTitle>
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
        </SortingBox>
        <SideBarTitle>Color</SideBarTitle>
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
      </SideBarContentBox>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  width: 100%;
  max-width: 250px;
  margin-left: 20px;
  color: var(--color-sub-text);
`;
const SideBarContentBox = styled.div`
  border: 1px solid var(--color-light-gray);
  border-radius: 4px;
  padding: 20px;
`;

export const SideBarTitle = styled.p`
  font-size: 24px;
  padding: 10px;
`;

export const SideBarSubTitle = styled.p`
  font-size: 17px;
  padding: 10px;
  &:hover {
    background-color: var(--color-lightest-gray);
    border-radius: 4px;
  }
`;

const SearchBarBox = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
  &:hover {
    background-color: var(--color-lightest-gray);
    border-radius: 4px;
  }
`;

export const CategoryBox = styled.div``;
export const SortingBox = styled.div``;
export const ColorBox = styled.div`
  margin-left: 10px;
  display: flex;
  gap: 10px;
`;
export const Color = styled.div<{ bgcolor: string }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.bgcolor};
  border-radius: 50%;
  cursor: pointer;
`;

export default SideBar;
