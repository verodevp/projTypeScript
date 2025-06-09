import { IProdotto } from "./IProdotto";
type MetodoPagamento = 'carta di credito' | 'paypal' | 'contrassegno'

export interface ICliente{
    nome: string,
    cognome: string,
    email: string,
    pagamento: MetodoPagamento,
    ordinaProdotto(prodotto: IProdotto): void
}