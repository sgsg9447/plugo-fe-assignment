import styled from "styled-components";
import { SearchIcon } from "@/components/common/icons";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <SideBarContentBox>
        <SearchBarBox>
          <SearchIcon />
          Search
        </SearchBarBox>
        <CategoryBox>
          <SideBarTitle>Category</SideBarTitle>
          <SideBarSubTitle>Hijap</SideBarSubTitle>
          <SideBarSubTitle>Dress</SideBarSubTitle>
          <SideBarSubTitle>Bottom</SideBarSubTitle>
        </CategoryBox>

        <SortingBox>
          <SideBarTitle>Sort</SideBarTitle>
          <SideBarSubTitle>Highes Price</SideBarSubTitle>
          <SideBarSubTitle>Lowest Price</SideBarSubTitle>
          <SideBarSubTitle>Newest</SideBarSubTitle>
          <SideBarSubTitle>Oldest</SideBarSubTitle>
        </SortingBox>
        <SideBarTitle>Color</SideBarTitle>
        <ColorBox>
          <Color bgcolor="var(--color-white)" />
          <Color bgcolor="var(--color-light-beige)" />
          <Color bgcolor="var(--color-light-green)" />
          <Color bgcolor="var(--color-light-pink)" />
          <Color bgcolor="var(--color-black)" />
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
