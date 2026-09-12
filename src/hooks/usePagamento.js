import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const cartaoComDigitosIguais = /^(\d)\1{15}$/;
const aguardarProcessamento = () => new Promise((resolve) => setTimeout(resolve, 1000));

function usePagamento() {
  const navigate = useNavigate();
  const [processando, setProcessando] = useState(false);
  const processandoRef = useRef(false);

  const finalizarPagamento = async (cartaoNormalizado) => {
    if (processandoRef.current) {
      return;
    }

    processandoRef.current = true;
    setProcessando(true);

    try {
      await aguardarProcessamento();

      const destino = cartaoComDigitosIguais.test(cartaoNormalizado)
        ? "/falha"
        : "/sucesso";

      navigate(destino);
    } finally {
      processandoRef.current = false;
      setProcessando(false);
    }
  };

  return { finalizarPagamento, processando };
}

export default usePagamento;
