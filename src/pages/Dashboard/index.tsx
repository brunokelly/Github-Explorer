import React from "react";
import { FiChevronRight } from "react-icons/fi";

import { Title, Form, Repositories } from "./style";

import { logoImg } from "../../assets/img";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/45316003?v=4"
            alt="Bruno Vieira"
          />

          <div>
            <strong>rockseat/unform/</strong>
            <p>Teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
