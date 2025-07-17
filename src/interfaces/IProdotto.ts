
import { ICliente } from "./ICliente"

/*
type TipoProdotto = 'costume da bagno' | 'pareo' | 'cappello';
type StatoProdotto = 'disponibile' | 'esaurito';
*/ 

export const enum TipoProdotto{
    COSTUME_DA_BAGNO = "costume da bagno",
    PAREO = "pareo",
    CAPPELLO = "cappello"
}

export const enum StatoProdotto{
    DISPONIBILE = "disponibile",
    ESAURITO = "esaurito"
}

export interface IProdotto{
    tipo: TipoProdotto,
    id: number,
    taglia: string,
    colore: string,
    stato: StatoProdotto,
    assegnaCliente(cliente: ICliente):void
}