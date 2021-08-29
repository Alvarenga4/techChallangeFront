import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 6vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #273479;
  transition: all .7s ease-in;
  box-shadow: 0 4px 2px -2px gray;
  &.scrolled {
    position: fixed;
    top: 0;
    left: 0;
    background-color: lightblue;
  }
`;

export const Logo = styled.img`
  height: 70px;
  width: 145px;
  margin-left: 40px;
  margin-right: 40px;
`;
