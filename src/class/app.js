// CLASSE PRODOTTO
class Prodotto {
    //costruttore per inizializzare le proprietà
    constructor(tipo, id, taglia, colore, stato) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    //implementazione dei metodi dell'interfaccia
    assegnaCliente(cliente) {
        if (this.stato === 'disponibile') {
            console.log(`Articolo: ${this.tipo} ordinato da ${cliente.nome} ${cliente.cognome}, email : ${cliente.email}`);
        }
        else {
            console.log("Spiacenti, l'articolo selezionato non è al momento disponibile");
        }
    }
}
// CLASSE CLIENTE
class Cliente {
    constructor(nome, cognome, email, pagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.pagamento = pagamento;
    }
    ordinaProdotto(prodotto) {
        prodotto.assegnaCliente(this);
    }
}
//CLASSE PROCESSO PRODUZIONE
class ProcessoProduzione {
    constructor(nome, descrizione, prodotti) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.prodotti = prodotti;
    }
    aggiungiProdotto(prodotto) {
        this.prodotti.push(prodotto);
        console.log(`Prodotto ${prodotto.tipo} aggiunto al processo ${this.nome}`);
    }
}
let costumeSnero = new Prodotto('costume da bagno', 2, 'S', 'nero', 'disponibile');
let cappelloSbianco = new Prodotto('cappello', 1, 'S', 'bianco', 'disponibile');
let clienteMarcoVerdi = new Cliente('Marco', 'Verdi', 'marcoverdi@gmail.com', 'paypal');
console.log(costumeSnero.stato);
console.log(costumeSnero.tipo);
costumeSnero.assegnaCliente(clienteMarcoVerdi);
let processoRaccoltaRifiuti = new ProcessoProduzione('Raccolta dei rifiuti plastici marini', 'Raccolta di plastica, reti da pesca dismesse e altri materiali plastici abbandonati nei mari, tramite partnership con cooperative e ONG locali.', []);
processoRaccoltaRifiuti.aggiungiProdotto(costumeSnero);
console.log(processoRaccoltaRifiuti.prodotti);
let processoRigenerazioneFilato = new ProcessoProduzione('Rigenerazione del filato', ' I materiali plastici vengono trasformati in filati attraverso processi di fusione e estrusione, dando vita a una nuova materia prima sostenibile.', []);
console.log(processoRigenerazioneFilato.descrizione);
processoRigenerazioneFilato.aggiungiProdotto(cappelloSbianco);
console.log(processoRigenerazioneFilato.prodotti);
let clienteVeronicaFabiani = new Cliente('Veronica', 'Fabiani', 'veronica@gmail.com', 'carta di credito');
clienteVeronicaFabiani.ordinaProdotto(cappelloSbianco);
let pareoSverde = new Prodotto('pareo', 3, 'S', 'verde', 'esaurito');
clienteVeronicaFabiani.ordinaProdotto(pareoSverde);
let pareoMblu = new Prodotto('pareo', 3, 'M', 'blu', 'disponibile');
let clienteMartinaRossi = new Cliente('Martina', 'Rossi', 'martina@gmail.com', 'paypal');
clienteMartinaRossi.ordinaProdotto(pareoMblu);
pareoMblu.assegnaCliente(clienteMartinaRossi);
console.log(processoRaccoltaRifiuti.prodotti);
processoRigenerazioneFilato.aggiungiProdotto(pareoMblu);
console.log(processoRigenerazioneFilato.prodotti);
export {};
