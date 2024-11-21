import React, { useState, useEffect } from 'react';
import '../styles/App.css'

const RandomColorBackground = () => {
  // Inicializa o estado da cor com uma cor padrão
  const [color, setColor] = useState('#ffffff');

  // Função para gerar uma cor aleatória em formato hexadecimal
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  // Função para atualizar a cor
  const changeColor = () => {
    setColor(generateRandomColor());
  };

  // useEffect para atualizar o fundo da página com a cor atual
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={changeColor} className="color-button">Mudar a Cor</button>
    </div>
  );
};

export default RandomColorBackground;

