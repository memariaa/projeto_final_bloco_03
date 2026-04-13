import type { Produto } from "./produto";

export interface Categoria {
    id: number;
    nome: string;
    produto?: Produto[] | null;
}