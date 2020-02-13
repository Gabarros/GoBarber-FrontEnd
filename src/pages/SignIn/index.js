import React from 'react';
import {Link} from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img alt="Gobarber logo" src={logo} />

      <form>
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Insira sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuitamente</Link>
      </form>
    </>
  );
}
