function ItemCarrinho({ produto }) {
  const subtotal = produto.preco * produto.quantidade;
  const formatarPreco = (valor) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);

  return (
    <article className="cart-item">
      <h2 className="cart-item__name">{produto.nome}</h2>
      <div className="cart-item__details">
        <p>Preço unitário: {formatarPreco(produto.preco)}</p>
        <p>Quantidade: {produto.quantidade}</p>
        <p>Subtotal: {formatarPreco(subtotal)}</p>
      </div>
    </article>
  );
}

export default ItemCarrinho;
