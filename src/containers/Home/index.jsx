
import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
import { Banner, Container, Content } from "./style";


export function Home() {
  return (
    <main>
      <Banner>
       <h1>Bem-vindo(a)!</h1>
      </Banner>

      <Container>

        <Content>

          <CategoriesCarousel/>
          <OffersCarousel/>

          <div>Carrossel Produtos</div>

        </Content>

      </Container>
    </main>
  )
}