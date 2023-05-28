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

const SideBarMobile = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

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
            <SideBarSubTitle>Hijap</SideBarSubTitle>
            <SideBarSubTitle>Dress</SideBarSubTitle>
            <SideBarSubTitle>Bottom</SideBarSubTitle>
            <ColorBox>
              <Color bgcolor="var(--color-white)" />
              <Color bgcolor="var(--color-light-beige)" />
              <Color bgcolor="var(--color-light-green)" />
              <Color bgcolor="var(--color-light-pink)" />
              <Color bgcolor="var(--color-black)" />
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
            <SideBarSubTitle>Highes Price</SideBarSubTitle>
            <SideBarSubTitle>Lowest Price</SideBarSubTitle>
            <SideBarSubTitle>Newest</SideBarSubTitle>
            <SideBarSubTitle>Oldest</SideBarSubTitle>
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
