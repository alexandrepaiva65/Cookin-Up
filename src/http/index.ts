import type ICategoria from '@/interfaces/ICategoria';
import type IReceita from '@/interfaces/IReceita';


async function obterDadosURL<T>(url: string): Promise<T> {
  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error(`Erro ao buscar dados de ${url}: ${resposta.statusText}`);
  }

  return resposta.json() as Promise<T>;
}

export async function obterCategorias(): Promise<ICategoria[]> {
  return obterDadosURL<ICategoria[]>(
  'https://gist.githubusercontent.com/alexandrepaiva65/095767b9929c9952ac0e84c101917bf7/raw/55ee23678f47a9a1e9e58ca5f890cdd6d6862f3d/categorias.json'  );
}

export async function obterReceitas(): Promise<IReceita[]> {
  return obterDadosURL<IReceita[]>(
  'https://gist.githubusercontent.com/alexandrepaiva65/fb2804089bf5efb9188d7d0b519ed67e/raw/9a0f35db187b912f13d02ec6018b497bbb348509/receitas.json'  );
}

