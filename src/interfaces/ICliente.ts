import { IProdotto } from "./IProdotto";

export const enum MetodoPagamento{
    CARTA_DI_CREDITO ="carta di credito",
    PAYPAL="paypal",
    CONTRASSEGNO ="contrassegno"
}
/*
type MetodoPagamento = 'carta di credito' | 'paypal' | 'contrassegno'
*/

export interface ICliente{
    nome: string,
    cognome: string,
    email: string,
    pagamento: MetodoPagamento,
    ordinaProdotto(prodotto: IProdotto): void
}