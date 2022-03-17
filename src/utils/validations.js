import { ERRO_LOGIN_REQUIRED } from './resource';

export function ValidationLoginFields(username, password)
{
  if(!username || !password) return ERRO_LOGIN_REQUIRED;
}

export function ValidationRequired(nomeCampo, email)
{
  if(!email) return `Campo ${nomeCampo} é obrigatório`;
}

export function ValidationRequiredCadastro(dados)
{
  if(!dados.nome) return `Campo Nome é obrigatório`;
  if(!dados.sobrenome) return `Campo Sobrenome é obrigatório`;
  if(!dados.username) return `Campo E-mail é obrigatório`;
  if(!dados.password) return `Campo Senha é obrigatório`;
}



