import React, { useState, useEffect, useRef } from 'react';
import '../styles/App.css';

const CountdownTimer = () => {
  const [inputTime, setInputTime] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null); // Usando useRef para armazenar o intervalo

  const handleInputChange = (event) => {
    setInputTime(Number(event.target.value));
  };

  const startTimer = () => {
    if (inputTime > 0 && !isRunning) {
      setTime(inputTime);
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(inputTime);
  };

  // Hook useEffect para iniciar a contagem regressiva
  useEffect(() => {
    if (isRunning && time > 0) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      alert('O tempo acabou!');
      setIsRunning(false);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, time]);

  // Limpando o intervalo quando o componente é desmontado
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contagem Regressiva</h1>
      <input 
        type="number" 
        value={inputTime} 
        onChange={handleInputChange} 
        placeholder="Defina os segundos" 
        disabled={isRunning}
      />
      <div>
        <button onClick={startTimer} disabled={isRunning || inputTime <= 0}>
          Iniciar
        </button>
        <button onClick={pauseTimer} disabled={!isRunning}>
          Pausar
        </button>
        <button onClick={resetTimer} disabled={!isRunning && time === inputTime}>
          Reiniciar
        </button>
      </div>
      <h2>{time} segundos restantes</h2>
    </div>
  );
};

export default CountdownTimer;


