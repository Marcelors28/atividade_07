import React, { useState } from 'react';
import '../styles/ComponentesNavegaveis.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('sobre');

  const renderContent = () => {
    switch (activeTab) {
      case 'sobre':
        return <p>Esta é a aba Sobre. Aqui está um pouco de informação sobre nós.</p>;
      case 'contato':
        return <p>Esta é a aba Contato. Entre em contato conosco através do número (99)9999-8888.</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button className={`tab ${activeTab === 'sobre' ? 'active' : ''}`} onClick={() => setActiveTab('sobre')}>
          Sobre
        </button>
        <button className={`tab ${activeTab === 'contato' ? 'active' : ''}`} onClick={() => setActiveTab('contato')}>
          Contato
        </button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;

