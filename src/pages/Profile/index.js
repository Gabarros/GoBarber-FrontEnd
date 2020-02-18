import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  oldPassword: Yup.string().required('Campo obrigatório!').min(6, 'A senha precisa de ao menos 6 caracteres!'),
  password: Yup.string('Campo obrigatório!').min(6, 'A senha precisa de ao menos 6 caracteres!'),
  confirmPassword: Yup.string('campo obrigatório!').min(6, 'A senha precisa de ao menos 6 caracteres!')
})

export default function Profile() {

  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data){
    dispatch(updateProfileRequest(data));

  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu Email"/>
        <hr/>
        <Input type="password" name="oldPassword" placeholder="Sua senha atual"  />
        <Input type="password" name="password" placeholder="Sua nova senha" />
        <Input type="password" name="confirmPassword" placeholder="Confirme sua senha" />
        
        <button type="submit"> Atualizar Perfil </button>
      </Form>

      <button type="button">Sair do GoBarber</button>

    </Container>
  );
}
