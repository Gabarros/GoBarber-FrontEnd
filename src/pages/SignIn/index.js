import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
            .email('Email Inválido')
            .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
});

export default function SignIn() {

  function handleSubmit(data){
    console.tron.log(data);

  }
  return (
    <>
      <img alt="Gobarber logo" src={logo} />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Insira sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuitamente</Link>
      </Form>
    </>
  );
}
