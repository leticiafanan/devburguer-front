import { Route, Routes } from "react-router-dom";
import { Cart, Checkout, CompletePayment, EditProduct, Home, Login, Menu, NewProduct, Orders, Products, Register } from "../containers";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />

        <Route index element={<Home />} />
        <Route path="cardapio" element={<Menu />} />
        <Route path="carrinho" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="complete" element={<CompletePayment />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="pedidos" element={<Orders />} />
        <Route path="novo-produto" element={<NewProduct />} />
        <Route path="editar-produto" element={<EditProduct />} />
        <Route path="produtos" element={<Products />} />
      </Route>

    </Routes>
  );
}