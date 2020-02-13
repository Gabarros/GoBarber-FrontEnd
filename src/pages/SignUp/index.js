import React from 'react';
import {Link} from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

export default function SignUp() {

  const schema = Yup.object().shape({
    nome: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
              .email('Email Inválido')
              .required('O email é obrigatório'),
    password: Yup.string().min(6, 'A senha precisa de ao menos 6 caracteres').required('A senha é obrigatória')
  });

  function handleSubmit(data){
    console.tron.log(data);
  }

  return (
    <>
      <img alt="Gobarber logo" src={logo} />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name"  placeholder="Nome Completo"/>
        <Input name="email" type="email" placeholder="Seu Email" />
        <Input name="password" type="password" placeholder="Insira sua senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já possuo uma conta</Link>
      </Form>
    </>
  );
}
