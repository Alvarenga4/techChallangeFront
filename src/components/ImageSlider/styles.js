import styled from 'styled-components';

export const Slider = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
`;

export const Image = styled.img`
  width: ${prop => prop.width ? `${prop.width}%` : '80vw'};
  height: ${prop => prop.height ? `${prop.height}px` : '600px'};
  border-radius: 10px;
`;

