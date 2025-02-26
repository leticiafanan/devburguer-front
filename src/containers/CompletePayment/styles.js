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
  background-color: ${props => props.theme.mainBlack};
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
  color: ${props => props.theme.gren};
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    left: calc(50%  - 25px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: ${props => props.theme.gren};
    
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


  div{
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px ;
  }


  h1{
    width: 171;
    height: 48;
    top: 590px;
    left: 637px;
    color: ${props => props.theme.purple};

    font-family: Poppins;
    font-weight: 800;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 20px;
    margin-left: 120px ;

  flex-direction: column;
  }

  h2{
    height: 900px;
    width: 850px;
    margin-left: 250px;
    margin-top: 20px;

    font-family: Poppins;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0%;
    text-align: center;
    color:#000000
  }
  
  a{
    margin-top: -790px;
  }
  }
`




