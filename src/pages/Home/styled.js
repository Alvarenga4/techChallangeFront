import styled, { css } from "styled-components";

export const Col = styled.div`
  float: left;
  width: 25%;
  padding: 0 10px;
`;

export const Row = styled.div`
  margin: 0 -5px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const CardWrapper = styled.div`
  overflow: hidden;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 32px;
  margin: 48px auto 0;
  width: 50%;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardImageHeader = styled.img`
  width: 100%;
  border: 0px;
`;

export const CardHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardLabelHeading = styled.p`
  color: #a1a1a1;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
`;

export const CardPrice = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInfo = styled.div`
  display: relative;
  margin-bottom: 10px;
  width: 100%;
`;

export const CardKmInfo = styled.p`
  font-size: 12px;
  text-align: right;
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #273479;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;