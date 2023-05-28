import { Link } from "react-router-dom";
import styled from "styled-components";
interface MenuItemsProps {
  items: {
    to: string;
    children: React.ReactNode;
  }[];
}

const HeaderMenuItems = ({ items }: MenuItemsProps) => (
  <MenuBar>
    {items.map(({ to, children }) => (
      <MenuLi key={to}>
        <Link to={to}>{children}</Link>
      </MenuLi>
    ))}
  </MenuBar>
);
export default HeaderMenuItems;
const MenuBar = styled.ul`
  display: flex;
  gap: 10px;
`;

const MenuLi = styled.li`
  box-sizing: border-box;
  :hover {
    border-radius: 4px;
    background-color: var(--color-light-gray);
  }
`;
