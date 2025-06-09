"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CLASSE PRODOTTO
var Prodotto = /** @class */ (function () {
    //costruttore per inizializzare le proprietà
    function Prodotto(tipo, id, taglia, colore, stato) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    //implementazione dei metodi dell'interfaccia
    Prodotto.prototype.assegnaCliente = function (cliente) {
        if (this.stato === 'disponibile') {
            console.log("Articolo: ".concat(this.tipo, " ordinato da ").concat(cliente.nome, " ").concat(cliente.cognome, ", email : ").concat(cliente.email));
        }
        else {
            console.log("Spiacenti, l'articolo selezionato non è al momento disponibile");
        }
    };
    return Prodotto;
}());
// CLASSE CLIENTE
var Cliente = /** @class */ (function () {
    function Cliente(nome, cognome, email, pagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.pagamento = pagamento;
    }
    Cliente.prototype.ordinaProdotto = function (prodotto) {
        prodotto.assegnaCliente(this);
    };
    return Cliente;
}());
//CLASSE PROCESSO PRODUZIONE
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nome, descrizione, prodotti) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.prodotti = prodotti;
    }
    ProcessoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        this.prodotti.push(prodotto);
        console.log("Prodotto ".concat(prodotto.tipo, " aggiunto al processo ").concat(this.nome));
    };
    return ProcessoProduzione;
}());
var costumeSnero = new Prodotto('costume da bagno', 2, 'S', 'nero', 'disponibile');
var cappelloSbianco = new Prodotto('cappello', 1, 'S', 'bianco', 'disponibile');
var clienteMarcoVerdi = new Cliente('Marco', 'Verdi', 'marcoverdi@gmail.com', 'paypal');
console.log(costumeSnero.stato);
console.log(costumeSnero.tipo);
costumeSnero.assegnaCliente(clienteMarcoVerdi);
var processoRaccoltaRifiuti = new ProcessoProduzione('Raccolta dei rifiuti plastici marini', 'Raccolta di plastica, reti da pesca dismesse e altri materiali plastici abbandonati nei mari, tramite partnership con cooperative e ONG locali.', []);
processoRaccoltaRifiuti.aggiungiProdotto(costumeSnero);
console.log(processoRaccoltaRifiuti.prodotti);
var processoRigenerazioneFilato = new ProcessoProduzione('Rigenerazione del filato', ' I materiali plastici vengono trasformati in filati attraverso processi di fusione e estrusione, dando vita a una nuova materia prima sostenibile.', []);
console.log(processoRigenerazioneFilato.descrizione);
processoRigenerazioneFilato.aggiungiProdotto(cappelloSbianco);
console.log(processoRigenerazioneFilato.prodotti);
var clienteVeronicaFabiani = new Cliente('Veronica', 'Fabiani', 'veronica@gmail.com', 'carta di credito');
clienteVeronicaFabiani.ordinaProdotto(cappelloSbianco);
var pareoSverde = new Prodotto('pareo', 3, 'S', 'verde', 'esaurito');
clienteVeronicaFabiani.ordinaProdotto(pareoSverde);
var pareoMblu = new Prodotto('pareo', 3, 'M', 'blu', 'disponibile');
var clienteMartinaRossi = new Cliente('Martina', 'Rossi', 'martina@gmail.com', 'paypal');
clienteMartinaRossi.ordinaProdotto(pareoMblu);
pareoMblu.assegnaCliente(clienteMartinaRossi);
console.log(processoRaccoltaRifiuti.prodotti);
processoRigenerazioneFilato.aggiungiProdotto(pareoMblu);
console.log(processoRigenerazioneFilato.prodotti);
