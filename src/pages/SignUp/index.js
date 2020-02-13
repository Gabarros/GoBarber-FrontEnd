import React from 'react';
import {Link} from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img alt="Gobarber logo" src={logo} />
      <form>
        <input  placeholder="Nome Completo"/>
        <input type="email" placeholder="Seu Email" />
        <input type="password" placeholder="Insira sua senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já possuo uma conta</Link>
      </form>
    </>
  );
}
