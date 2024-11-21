import React, { useState, useEffect } from 'react';
import '../styles/App.css'

const Timer = () => {
  // Inicializa o estado do tempo e do status do temporizador
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      // Inicia o temporizador
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      // Pausa o temporizador
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  // Função para iniciar ou pausar o temporizador
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Função para reiniciar o temporizador
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Temporizador: {time} segundos</h1>
      <button onClick={toggleTimer}>
        {isRunning ? 'Pausar' : 'Iniciar'}
      </button>
      <button onClick={resetTimer} style={{ marginLeft: '10px' }}>
        Reiniciar
      </button>
    </div>
  );
};

export default Timer;

