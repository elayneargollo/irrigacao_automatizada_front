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

export function ValidationAddPlanta(dados)
{
  if(!dados.ambiente) return `Campo Ambiente é obrigatório`;
  if(!dados.porte) return `Campo Porte da Planta é obrigatório`;
  if(!dados.tipoSolo) return `Campo Solo é obrigatório`;
  if(!dados.fruto) return `Campo Fruto é obrigatório`;
  if(!dados.nome) return `Campo Nome Popular da Planta é obrigatório`;
  if(!dados.tipoPlanta) return `Campo Tipo de Planta é obrigatório`;
}



