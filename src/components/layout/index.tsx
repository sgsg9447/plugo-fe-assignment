import { PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Main>
        {children}
        <Footer />
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  overflow: auto;
  height: calc(100vh - 86px);
  /* padding: 0 20px; */
`;
