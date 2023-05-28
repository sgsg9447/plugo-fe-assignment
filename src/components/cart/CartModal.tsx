import styled from "styled-components";
import { useState } from "react";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { LeftArrowIcon } from "@/components/common/icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ProductValues;
}

const CartModal = ({ isOpen, onClose, item }: ModalProps) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  console.log(item);
  if (!isOpen) {
    return null;
  }

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  const handleButtonClick = (value?: number) => {
    const selectedItem: selectedItem = {
      productName: item.productName,
      price: item.price,
      stock: item.stock,
      quantity: value || 0,
      image: String(item.image),
    };

    const existingItems = localStorage.getItem("selectedItems");
    let updatedItems: selectedItem[];

    if (existingItems) {
      updatedItems = [...JSON.parse(existingItems), selectedItem];
    } else {
      updatedItems = [selectedItem];
    }

    localStorage.setItem("selectedItems", JSON.stringify(updatedItems));
    setInputValue(value!);
    onClose();
  };
  const handleButtonInputClick = (value?: number) => {
    setIsInputVisible(true);
    setInputValue(value!);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };

  const handleConfirmClick = () => {
    if (inputValue <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    setIsInputVisible(false);
    setInputValue(0);
    onClose();
    const selectedItem = {
      productName: item.productName,
      price: item.price,
      stock: item.stock,
      quantity: inputValue,
      image: item.image!,
    };
    const existingItems = localStorage.getItem("selectedItems");
    let updatedItems: selectedItem[];

    if (existingItems) {
      updatedItems = [...JSON.parse(existingItems), selectedItem];
    } else {
      updatedItems = [selectedItem];
    }

    localStorage.setItem("selectedItems", JSON.stringify(updatedItems));
  };

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={handleContentClick}>
        <Button style={{ width: "10px" }} variant="text" onClick={onClose}>
          <LeftArrowIcon />
        </Button>
        <Title>Select Amount : </Title>

        <ButtonList>
          {[1, 2, 3, 4, 5].map((stockNumber) => (
            <Button
              key={stockNumber}
              variant="stockButton"
              stockNumber={stockNumber}
              stockText="In Stock"
              onClick={() => handleButtonClick(stockNumber)}
            />
          ))}
          {isInputVisible ? (
            <InputButtonBox>
              <StyledInput
                name="inputValue"
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Please enter the quantity. (ex. 6)"
              />
              <Button
                style={{ width: "100px" }}
                variant="outlined"
                onClick={handleConfirmClick}
              >
                OK
              </Button>
            </InputButtonBox>
          ) : (
            <Button
              variant="stockButton"
              onClick={handleButtonInputClick}
              stockText="+ more"
            />
          )}
        </ButtonList>
      </ModalContent>
    </ModalWrapper>
  );
};

export default CartModal;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.p`
  color: var(--color-text);
  font-size: 18px;
`;

const InputButtonBox = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledInput = styled(Input)`
  border: 1px solid black;
  width: 100%;
`;
