import type { Categoria} from "./categoria";

export interface Produto {
    id: number;
    nome: string;
    preco: number;
    foto: string;
    categoria: Categoria[] | null;
}