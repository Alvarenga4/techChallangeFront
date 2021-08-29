import styled from "styled-components";
import Button from '@material-ui/core/Button';

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

export const Container = styled.div`
  margin-top: ${props => props.mt ? `${props.mt}px` : '10px'};
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
  padding-top: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

export const CardBody = styled.div`
  margin-top: 23px;
`;

export const CardTitle = styled.label`
  text-transform: uppercase;
  margin-left: ${props => props.ml ? `${props.ml}px` : '0'};
  margin-top: ${props => props.mt ? `${props.mt}px` : '10px'};
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

export const CardButton = styled(Button)`
  margin-top: 50px;
  width: 100%;
  height: 45px;
`