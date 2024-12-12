export const formartPrice = (value) => {
  return new Intl.NumberFormat('pT-BR', {
    style: "currency",
    currency: 'BRL'
  }).format(value/100);
};