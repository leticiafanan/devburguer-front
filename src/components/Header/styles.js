import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${props => props.theme.mainBlack};
  width: 100%;
  height: 72px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;

  div{
    margin-left: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  hr {
    height: 24px;
    border: 1px solid ${props => props.theme.lightGray};
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) => 
  props.$isActive 
  ? (props) => props.theme.purple
  :  (props) => props.theme.white};

border-bottom: ${props => props.$isActive ? `1px solid $(props => props.theme.purple)` : 'none'};
  text-decoration: none;
  font-size: 14px;
  transition: color 200ms;

  &:hover {
    color: ${props => props.theme.purple};
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  margin-top: 20px;

  p{
    color: ${props => props.theme.white};
    line-height: 90%;
    font-weight: 300;

    span{
      font-weight: 700;
      color: ${props => props.theme.purple};
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
  padding: 0 56px;
`;


export const Logout = styled.button`
  color: ${props => props.theme.red};
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  border: none;
  padding: 5px;
`;



