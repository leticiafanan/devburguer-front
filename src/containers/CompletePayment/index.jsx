import Logo from '../../assets/logo.svg';
import Voltar from '../../assets/voltar.png';
import Complete from '../../assets/mdi_message-check.png';
import { Banner, Container, Content, Title} from './styles';
import { useNavigate } from 'react-router-dom';



export function CompletePayment() {


  const navigate = useNavigate();  

  const handleBackClick = () => {  
    navigate('/');
  }
  return (
    <Container>
      <Banner>
        <img src={Logo} alt='logo devburguer'/>
      </Banner>
      <Title>Checkout - Pedido</Title>

      <Content>
      <div>
        <img src={Complete} />

        <h1>Obrigado!</h1>

        <h2>Seu pedido já está em produção e logo sairá
        para entrega. Agradecemos a preferência!</h2>

        <a onClick={handleBackClick}>  
            <img src={Voltar} alt="Voltar" />  
          </a>

        </div>
      
      </Content>

      </Container>  
  );  
} 
