import React, { useState } from 'react';
import '../styles/GaleriaDeImagensGallery.css';
import '../styles/App.css'


const images = [
  'https://via.placeholder.com/600x400/0000FF/808080?text=Imagem+1',
  'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Imagem+2',
  'https://via.placeholder.com/600x400/00FF00/000000?text=Imagem+3',
  'https://via.placeholder.com/600x400/FFFF00/0000FF?text=Imagem+4',
];

const Gallery = () => {
  // Inicializa o estado para a imagem selecionada e o índice atual
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Função para abrir o modal com a imagem selecionada
  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  // Função para navegar para a próxima imagem
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  // Função para navegar para a imagem anterior
  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Galeria de Imagens</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            onClick={() => openModal(index)}
            className="gallery-image"
          />
        ))}
      </div>
      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={selectedImage} alt="Imagem Ampliada" />
          <div className="navigation">
            <button onClick={prevImage}>Anterior</button>
            <button onClick={nextImage}>Próxima</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

