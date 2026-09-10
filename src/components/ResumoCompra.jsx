function ResumoCompra({ produtos }) {
  const total = produtos.reduce(
    (soma, produto) => soma + produto.preco * produto.quantidade,
    0,
  );
  const totalFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  return <p>Total: {totalFormatado}</p>;
}

export default ResumoCompra;
