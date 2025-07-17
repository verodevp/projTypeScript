
import { IProdotto } from "../interfaces/IProdotto";
import { ICliente } from "../interfaces/ICliente";
import { IProcessoProduzione } from "../interfaces/IProcessoProduzione";
import {TipoProdotto}  from "../interfaces/IProdotto";
import {StatoProdotto} from "../interfaces/IProdotto";
import { MetodoPagamento } from "../interfaces/ICliente";


// CLASSE PRODOTTO
class Prodotto implements IProdotto{


tipo: TipoProdotto;
 id: number;
 taglia: string;
 colore: string;
 stato: StatoProdotto;

    //costruttore per inizializzare le proprietà
    constructor(tipo: TipoProdotto, id: number,taglia: string, colore: string, stato: StatoProdotto){
        this.tipo= tipo;
        this.id=id;
        this.taglia= taglia;
        this.colore = colore;
        this.stato= stato
    }

    //implementazione dei metodi dell'interfaccia
     assegnaCliente(cliente: ICliente): void {
     if(this.stato=== StatoProdotto.DISPONBILE){
        
        console.log(`Articolo: ${this.tipo} ordinato da ${cliente.nome} ${cliente.cognome}, email : ${cliente.email}`)
     }else{
        console.log("Spiacenti, l'articolo selezionato non è al momento disponibile")
     }
 }
}


// CLASSE CLIENTE
class Cliente implements ICliente{
    nome: string;
    cognome: string;
    email: string;
    pagamento: MetodoPagamento;
    constructor(nome:string, cognome:string, email : string, pagamento: MetodoPagamento){
        this.nome=nome;
        this.cognome=cognome;
        this.email=email;
        this.pagamento=pagamento
    }

    ordinaProdotto(prodotto: IProdotto): void {
        prodotto.assegnaCliente(this)
        
    }
    
}

//CLASSE PROCESSO PRODUZIONE
class ProcessoProduzione implements IProcessoProduzione{
    nome: string;
    descrizione: string;
    prodotti: IProdotto[];
    
    constructor(nome:string, descrizione: string, prodotti:IProdotto[]){
        this.nome =nome;
        this.descrizione = descrizione;
        this.prodotti = prodotti
    }

    aggiungiProdotto(prodotto: IProdotto): void {
       
        this.prodotti.push(prodotto)
        console.log(`Prodotto ${prodotto.tipo} aggiunto al processo ${this.nome}`);

    }

}


let costumeSnero= new Prodotto (TipoProdotto.COSTUME_DA_BAGNO,2,'S','nero', StatoProdotto.DISPONBILE)
let cappelloSbianco= new Prodotto(TipoProdotto.CAPPELLO, 1, 'S', 'bianco', StatoProdotto.DISPONBILE)


let clienteMarcoVerdi= new Cliente('Marco', 'Verdi', 'marcoverdi@gmail.com', MetodoPagamento.PAYPAL)
console.log(costumeSnero.stato)
console.log(costumeSnero.tipo)
costumeSnero.assegnaCliente(clienteMarcoVerdi)



let processoRaccoltaRifiuti= new ProcessoProduzione('Raccolta dei rifiuti plastici marini', 'Raccolta di plastica, reti da pesca dismesse e altri materiali plastici abbandonati nei mari, tramite partnership con cooperative e ONG locali.', [])

processoRaccoltaRifiuti.aggiungiProdotto(costumeSnero)
console.log(processoRaccoltaRifiuti.prodotti)

let processoRigenerazioneFilato = new ProcessoProduzione('Rigenerazione del filato', ' I materiali plastici vengono trasformati in filati attraverso processi di fusione e estrusione, dando vita a una nuova materia prima sostenibile.', [])
console.log(processoRigenerazioneFilato.descrizione)

processoRigenerazioneFilato.aggiungiProdotto(cappelloSbianco)
console.log(processoRigenerazioneFilato.prodotti)

let clienteVeronicaFabiani= new Cliente('Veronica', 'Fabiani', 'veronica@gmail.com', MetodoPagamento.CARTA_DI_CREDITO)
clienteVeronicaFabiani.ordinaProdotto(cappelloSbianco)

let pareoSverde= new Prodotto(TipoProdotto.CAPPELLO, 3, 'S', 'verde', StatoProdotto.ESAURITO)
clienteVeronicaFabiani.ordinaProdotto(pareoSverde)

let pareoMblu= new Prodotto(TipoProdotto.PAREO, 3, 'M', 'blu', StatoProdotto.DISPONBILE )
let clienteMartinaRossi= new Cliente('Martina', 'Rossi', 'martina@gmail.com', MetodoPagamento.PAYPAL)
clienteMartinaRossi.ordinaProdotto(pareoMblu)
pareoMblu.assegnaCliente(clienteMartinaRossi)

console.log(processoRaccoltaRifiuti.prodotti)

processoRigenerazioneFilato.aggiungiProdotto(pareoMblu)
console.log(processoRigenerazioneFilato.prodotti)

