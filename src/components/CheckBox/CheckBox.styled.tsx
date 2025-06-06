import styled from "@emotion/styled";

export const CheckBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4.5px;
  margin: 10px 0px;
`;

export const Input = styled.input<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${({ checked }) => (checked ? "#000" : "transparent")};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  &:checked {
    background-color: #000;
  }

  &:checked::after {
    content: "✓";
    color: white;
    font-size: 16px;
    line-height: 1;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 400;
`;
