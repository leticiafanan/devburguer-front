import styled from "styled-components";
import Texture from '../../assets/bg-login.svg'
import Background from '../../assets/background.svg';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url('${Background}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

`;

export const Banner = styled.div`
  background: url('${Texture}');
  background-color: #1f1f1f1f;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 180px;

  img {
    height: 130px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #61a120;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    left: calc(50%  - 25px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: #61a120;
    
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;


