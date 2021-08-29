import styled, { css } from "styled-components";
import InputMask from "react-input-mask";

export const Container = styled.div`
  align-items: center;
`;

export const HeaderSession = styled.div`
  display: block;
  height: 380px;
  max-height: 380px;
`;

export const Image = styled.img`
  height: 500px;
  width: 100%;
`;

export const Input = styled(InputMask)`
  width: 100%;
  height: 45px;
  padding-left: 10px;
  margin-top: 10px;
  border: 1px solid #c8c8c8;
  border-radius: 8px;
  font-size: 24px;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #000;
  font-weight: bold;
`;
export const SubTile = styled.p`
  font-size: 24px;
  color: #000;
`;