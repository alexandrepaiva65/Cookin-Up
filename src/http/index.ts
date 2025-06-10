import type ICategoria from '@/interfaces/ICategoria';
import type Ireceita from '@/interfaces/IReceita';

export async function obterCategorias() {
  const resposta = await fetch('https://gist.githubusercontent.com/alexandrepaiva65/095767b9929c9952ac0e84c101917bf7/raw/55ee23678f47a9a1e9e58ca5f890cdd6d6862f3d/categorias.json');

  const categorias: ICategoria[] = await resposta.json();

  return categorias;
}

export async function obterReceitas() {
  const resposta = await fetch('https://gist.githubusercontent.com/alexandrepaiva65/fb2804089bf5efb9188d7d0b519ed67e/raw/9a0f35db187b912f13d02ec6018b497bbb348509/receitas.json');

  const categorias: Ireceita[] = await resposta.json();

  return categorias;
}