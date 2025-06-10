# Progetto TypeScript - Beachwear Ecosostenibile

Questo progetto ha lo scopo di sviluppare un sistema in TypeScript che modella la struttura operativa di un brand di beachwear in plastica riciclata, focalizzandosi sulle interazioni tra clienti, prodotti beachwear e processi di produzione sostenibile.

Attraverso la definizione di interfacce e classi che rappresentano i vari componenti del sistema (IProdotto, ICliente, IProcessoProduzione), il progetto dimostra come la tecnologia possa supportare l'innovazione sostenibile nel settore della moda.

Il progetto richiede solo la scrittura del codice in TypeScript.

## Funzionalità implementate

- Interfacce TypeScript:
  - `IProdotto`
  - `ICliente`
  - `IProcessoProduzione`
- Classi concrete:
  - `Prodotto`
  - `Cliente`
  - `ProcessoProduzione`
- Interazioni tra entità con metodi come:

  - `assegnaCliente(cliente: ICliente)`
  - `ordinaProdotto(prodotto: IProdotto)`
  - `aggiungiProdotto(prodotto: IProdotto)`

  ## Prerequisiti

  - Node.js
  - TypeScript
  

  ## Installazione

  1. Clona il repository:

  ``bash:

  git clone https://github.com/verodevp/projTypeScript.git
  cd projTypeScript

  2. Installa TypScript (se non già installato):

  ``bash:

  npm i -g typescript

  3. Compila il progetto:

  ``bash:

  tsc 

  ## Utilizzo

  Il progetto mostra in una semplice interfaccia HTML la descrizione delle interfacce e delle classi.
  Tutto il codice logico si trova in src/class/app.ts, dove puoi testare le interazioni tra oggetti.
  Puoi modificare i file .ts dentro src/class/ o le interfacce dentro src/interfaces e poi compilare con:
  
  ``bash:
  
  tsc
  
  ## Licenza
  
  Questo progetto è rilasciato sotto licenza MIT.
