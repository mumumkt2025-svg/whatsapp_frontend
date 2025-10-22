// client/src/components/Message.js - VERSÃO DE TESTE PARA DEBUG

import React from 'react';
import './Message.css';

// ESTA É UMA VERSÃO SUPER SIMPLES PARA ENCONTRAR O ERRO
function Message({ message }) {

  // Converte o conteúdo da mensagem em texto para a gente poder ver
  const contentAsText = JSON.stringify(message);

  if (message.sender === 'bot') {
    return (
      <div className="message-container bot-message">
        <div className="message-bubble other-message-bubble">
          <pre>{contentAsText}</pre> {/* Usamos <pre> para formatar bem */}
        </div>
      </div>
    );
  }

  if (message.sender === 'me') {
    return (
      <div className="message-container my-message-container">
        <div className="message-bubble my-message-bubble">
          <pre>{contentAsText}</pre>
        </div>
      </div>
    );
  }

  if (message.sender === 'system') {
     return (
      <div className="system-message-container">
        <div className="system-message-bubble">
            <pre>{contentAsText}</pre>
        </div>
      </div>
    );
  }

  return null;
}

export default Message;
:heart:
Clique para reagir
:white_check_mark:
Clique para reagir
:rainbow_flag:
Clique para reagir
Adicionar reação
Responder
Encaminhar
Mais

Conversar em @Du
﻿
Perfil de Du
Adicionar amigo
Mais

Batata
Envie a reação
Responder
Du
Adicionar nota (visível apenas para você)
du997
Modo streamer ativado
