import styled from "styled-components";
import InputMask from "react-input-mask";
import Button from '@material-ui/core/Button';

export const Container = styled.div`
  margin-top: ${props => props.mt ? props.mt : '-100px'};
  margin-bottom: ${props => props.mb ? props.mb : '50px'};
  margin-left: 150px;
  margin-right: 150px;
`;

export const Card = styled.div`
  position: relative;
  text-align: start;
  min-height: ${props => props.height ? `${props.height}vh` : '40vh'};
  width: ${props => props.width ? `${props.width}%` : '100%'};
  margin-bottom: ${props => props.mb ? props.mb : '50px'};
  margin-top: ${props => props.mt ? props.mt : '0'};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

export const CardBody = styled.div`
  margin-top: 23px;
`;

export const CardTitle = styled.label`
  text-transform: uppercase;
  font-size: ${props => props.size ? `${props.size}px` : '32px'};
  color: ${props => props.color ? props.color : '#000'};
  font-weight: bolder;
`;

export const CardDescription = styled.p`
  margin-top: ${props => props.mt ? `${props.mt}px` : '0'};
  font-size: ${props => props.size ? `${props.size}px` : '16px'};
  color: ${props => props.color ? props.color : '#a1a1a1'};
  font-weight: bolder;
`;

export const CardBodyTitle = styled.label`
  font-size: ${props => props.size ? `${props.size}px` : '14px'};
  color: ${props => props.color ? props.color : '#a1a1a1'};
  font-weight: bolder;
`;

export const CardSaleInfo = styled.label`
  margin-top: ${props => props.mt ? `${props.mt}px` : '0'};
  font-size: ${props => props.size ? `${props.size}px` : '14px'};
  color: ${props => props.color ? props.color : '#a1a1a1'};
  font-weight: bolder;
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
  color: #000;
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

export const CardButton = styled(Button)`
  margin-top: ${props => props.mt ? `${props.mt}px` : '0'};
  width: 100%;
  height: 45px;
`