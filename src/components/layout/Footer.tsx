import { paymentIcons, shippingIcons } from "@/constants/footerIcons";
import styled from "styled-components";

const Footer = () => (
  <FooterContainer>
    <ItemContainer>
      <CompanyInfo>
        <H1>GoneGani</H1>
        <P>Phone: +6281234567890</P>
        <P>Bandung, West Java, Indonesia</P>
        <P>Since 2019</P>
      </CompanyInfo>
      <PaymentAndShippingMethod>
        <FooterTitle>Payment Method</FooterTitle>
        <FooterItem>
          {paymentIcons.map((icon) => (
            <Icon key={icon.alt} src={icon.src} alt={icon.alt} />
          ))}
        </FooterItem>
        <FooterTitle>Shipping Method</FooterTitle>
        <FooterItem>
          {shippingIcons.map((icon) => (
            <Icon key={icon.alt} src={icon.src} alt={icon.alt} />
          ))}
        </FooterItem>
      </PaymentAndShippingMethod>
      <FooterLink
        href="https://gonegani.id/terms-and-conditions"
        target="_blank"
        rel="noopener"
      >
        Terms & Conditions
      </FooterLink>
    </ItemContainer>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  background-color: var(--color-footer-background);
  color: rgba(0, 0, 0, 0.8);
  padding: 50px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CompanyInfo = styled.div``;
const PaymentAndShippingMethod = styled.div``;
const H1 = styled.h1`
  font-size: 34px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const FooterTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const FooterItem = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  font-size: 18px;
  font-weight: 400;
  text-decoration: underline;
`;

const Icon = styled.img`
  width: 32px;
`;
