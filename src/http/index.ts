import type ICategoria from '@/interfaces/ICategoria';

export async function obterCategorias() {
  const resposta = await fetch('https://gist.githubusercontent.com/alexandrepaiva65/095767b9929c9952ac0e84c101917bf7/raw/55ee23678f47a9a1e9e58ca5f890cdd6d6862f3d/categorias.json');

  const categorias: ICategoria[] = await resposta.json();

  return categorias;
}