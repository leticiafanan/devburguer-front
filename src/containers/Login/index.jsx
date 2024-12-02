import { 
  Container, 
  Form, 
  InputContainer, 
  LeftContainer,  
  RightContainer, 
  Title 
} from "./styles";
import Logo from '../../assets/logo.svg';
import { Button } from "../../components/Button";

export function Login() {
    return(
      <Container>

        <LeftContainer>
          <img src={Logo} alt="logo-dev-burguer"/>
        </LeftContainer>

        <RightContainer>

          <Title>
          Olá, seja bem vindo ao <span> Dev Burguer!</span> 
          <br/>
          Acesse com seu <span> Login e senha.</span>
          </Title>

          <Form>

            <InputContainer>
              <label>Email</label>
              <input type="email" />
            </InputContainer>

            <InputContainer>
              <label>Senha</label>
              <input type="password" />
            </InputContainer>

            <Button>Entrar</Button>

          </Form>

          <p>Não possui conta? <a> Clique aqui.</a></p>



        </RightContainer>
      </Container>
    )
};
