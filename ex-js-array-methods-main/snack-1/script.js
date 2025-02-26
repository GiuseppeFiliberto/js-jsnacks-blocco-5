const names = ['Edoardo', 'Simone', 'Francesco'];

 //La consegna risulta essere a trabochetto, si potrebbe semplicemente far un console.log(names), ma uscirebbe fuori un log dell'array names, mentre la consegna chiede esattamente di stampre tutti i nomi in console, viene utile dunque l'utilizzo di un ciclo for+
 
 for (let i = 0; i < names.length; i++){
    const thisName = names[i];
    console.log(thisName);
    
 }

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'