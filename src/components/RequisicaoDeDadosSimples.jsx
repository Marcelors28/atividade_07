import React, { useState, useEffect } from 'react';
import '../styles/App.css'

const Posts = () => {
  // Inicializa os estados para armazenar os posts e o estado de carregamento
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Função para buscar os posts da API
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    }
    setLoading(false);
  };

  // useEffect para fazer a requisição à API ao carregar o componente
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Posts</h1>
      <button onClick={fetchPosts} disabled={loading}>
        {loading ? 'Carregando...' : 'Recarregar Dados'}
      </button>
      {loading ? (
        <p>Carregando posts...</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: '20px' }}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;

