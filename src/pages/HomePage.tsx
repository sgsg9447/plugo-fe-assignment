import { Link } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Link to="/products">
      <HeroImage
        src="https://seulgi-product-images.s3.ap-northeast-2.amazonaws.com/Plugo_Banner_Website.jpg"
        alt="Product Image"
      />
    </Link>
  );
};

export default HomePage;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
`;
