import React, { useState } from 'react';
import '../styles/ContadorSimples.css';


const Counter = () => {
  // Inicializa o estado do contador com o valor 0
  const [count, setCount] = useState(0);

  // Função para incrementar o valor do contador
  const increment = () => {
    setCount(count + 1);
  };

  // Função para decrementar o valor do contador
  const decrement = () => {
    // Apenas decrementa se o valor atual for maior que 0
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={increment} className="increment-button">Incrementar</button>
      <button onClick={decrement} className="decrement-button">Decrementar</button>
    </div>
  );
};

export default Counter;
