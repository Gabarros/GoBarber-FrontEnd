import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '../../store/modules/auth/actions';


const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
            .email('Email Inválido')
            .required('O email é obrigatório'),
  password: Yup.string().min(6, 'A senha precisa de ao menos 6 caracteres').required('A senha é obrigatória')
});

export default function SignUp() {

  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }){
    dispatch(signUpRequest(name, email, password));
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
