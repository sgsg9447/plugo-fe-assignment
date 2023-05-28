import styled from "styled-components";
import { Link } from "react-router-dom";
import { LOGO_URL } from "@/constants/url";
import HeaderMenuItems from "@/components/layout/header/HeaderMenuItems";
import { ProfileIcon, SearchIcon } from "@/components/common/icons";

const Header = () => {
  const menuItems = [
    { to: "/", children: <Span>HOME</Span> },
    { to: "/products", children: <Span>ALL PRODUCT</Span> },
    { to: "/admin", children: <Span>ADMIN</Span> },
    { to: "/cart", children: <Span>CART</Span> },
  ];
  const sideMenuItems = [
    {
      to: "/search",
      children: (
        <IconBox>
          <SearchIcon />
        </IconBox>
      ),
    },
    {
      to: "/profile",
      children: (
        <IconBox>
          <ProfileIcon />
        </IconBox>
      ),
    },
  ];
  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <Logo src={LOGO_URL} alt="gonemani-logo" />
        </Link>
        <HeaderMenuItems items={menuItems} />
        <HeaderMenuItems items={sideMenuItems} />
      </HeaderWrapper>
      <div style={{ height: "86px" }} />
    </>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: 86px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const Logo = styled.img`
  height: 88px;
  max-width: 100%;
`;

const Span = styled.span`
  padding: 10px;
`;

const IconBox = styled.div`
  padding: 6px;
  font-size: 20px;
`;
