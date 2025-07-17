
import { ICliente } from "./ICliente"

/*
type TipoProdotto = 'costume da bagno' | 'pareo' | 'cappello';
type StatoProdotto = 'disponibile' | 'esaurito';
*/ 

export enum TipoProdotto{
    COSTUME_DA_BAGNO = "costume da bagno",
    PAREO = "pareo",
    CAPPELLO = "cappello"
}

export enum StatoProdotto{
    DISPONBILE = "disponibile",
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