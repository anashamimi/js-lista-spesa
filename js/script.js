/*
Descrizione:
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. 
Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, 
in particolare alla variabile di indice.
*/

const listaSpesa = [
    'latte',
    'uova',
    'sale',
    'zucchero',
    'olio',
    'pasta',
    'pomodori',
    'cetrioli',
    'zucchine',
    
];

let lista = document.getElementById('lista');

let i = 0;

while (i < listaSpesa.length) {
    lista.innerHTML += `<li>${listaSpesa[i]}</li>`;
    i++;
}