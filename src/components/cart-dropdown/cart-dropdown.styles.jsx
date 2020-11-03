import styled from "styled-components";
import styles from "styled-components";
import CostumButton from "../costum-button/costum-button.component";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartDropDownButton = styled(CostumButton)`
  margin-top: auto;
`

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;