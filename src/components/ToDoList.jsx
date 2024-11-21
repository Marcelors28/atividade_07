import React, { useState } from 'react';
import '../styles/App.css'

const TodoApp = () => {
  // Inicializa o estado com uma lista de tarefas vazia
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showPending, setShowPending] = useState(false);

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Função para remover uma tarefa
  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  // Função para marcar uma tarefa como concluída
  const toggleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  // Função para alternar a exibição de tarefas pendentes
  const toggleShowPending = () => {
    setShowPending(!showPending);
  };

  // Filtra as tarefas com base no estado de exibição
  const filteredTasks = showPending ? tasks.filter(task => !task.completed) : tasks;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Tarefas</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Adicionar nova tarefa" 
      />
      <button onClick={addTask}>Adicionar</button>
      <button onClick={toggleShowPending}>
        {showPending ? 'Mostrar Todas' : 'Mostrar Pendentes'}
      </button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredTasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleCompleteTask(index)} style={{ cursor: 'pointer' }}>
              {task.text}
            </span>
            <button onClick={() => removeTask(index)} style={{ marginLeft: '10px' }}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
