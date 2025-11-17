let ngatti = parseInt( prompt(`Inserisci il numero di gatti da mettere in fila`) );
let fila = parseInt( prompt(`Dimmi da quanti gatti deve essere composta ogni fila`) );

let nfile = Math.floor(ngatti / fila);
let resto = ngatti - (nfile * fila);
let scarto = (nfile+1) * fila - ngatti;


console.log(`Ci sono ${nfile} file di gatti, ne mancano ${scarto} per completare un'altra fila, quindi ne avanzano ${resto}`);
