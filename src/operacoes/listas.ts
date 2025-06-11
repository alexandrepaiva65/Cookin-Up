export function itensDeLista1EstaoEmLista2<T>(lista1: T[], lista2: T[]): boolean {
    return lista1.every(item => lista2.includes(item));
}