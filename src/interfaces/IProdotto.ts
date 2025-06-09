
import { ICliente } from "./ICliente"

type TipoProdotto = 'costume da bagno' | 'pareo' | 'cappello';
type StatoProdotto = 'disponibile' | 'esaurito';

export interface IProdotto{
    tipo: TipoProdotto,
    id: number,
    taglia: string,
    colore: string,
    stato: StatoProdotto,
    assegnaCliente(cliente: ICliente):void
}