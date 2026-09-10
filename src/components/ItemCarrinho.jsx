function ItemCarrinho({ produto }) {
  const subtotal = produto.preco * produto.quantidade;
  const formatarPreco = (valor) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);

  return (
    <article>
      <h2>{produto.nome}</h2>
      <p>Preço unitário: {formatarPreco(produto.preco)}</p>
      <p>Quantidade: {produto.quantidade}</p>
      <p>Subtotal: {formatarPreco(subtotal)}</p>
    </article>
  );
}

export default ItemCarrinho;
