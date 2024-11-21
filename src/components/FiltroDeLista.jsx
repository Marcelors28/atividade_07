import React, { useState } from 'react';
import '../styles/FiltroDelista.css';

const NameFilter = () => {
  // Inicializa o estado da lista de nomes e do filtro
  const [names, setNames] = useState(['Suellen', 'Marcelo', 'Pedro', 'Rafael', 'Vanessa']);
  const [filter, setFilter] = useState('');

  // Função para atualizar o valor do filtro
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filtra os nomes ignorando maiúsculas e minúsculas
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Nomes</h1>
      <input 
        type="text" 
        value={filter} 
        onChange={handleFilterChange} 
        placeholder="Filtrar nomes" 
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameFilter;

