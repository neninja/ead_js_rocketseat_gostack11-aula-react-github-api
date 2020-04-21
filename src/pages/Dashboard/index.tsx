import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {/* semanticamente quando algo é clicável deve ser uma âncora (link)
        ou botão */}
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/29121828"
            alt="Felipe Silva"
          />
          <div>
            <strong>nenitf/dotfiles</strong>
            <p>Meus arquivos de configuração</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/29121828"
            alt="Felipe Silva"
          />
          <div>
            <strong>nenitf/dotfiles</strong>
            <p>Meus arquivos de configuração</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/29121828"
            alt="Felipe Silva"
          />
          <div>
            <strong>nenitf/dotfiles</strong>
            <p>Meus arquivos de configuração</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
