let kopejasStundas = 0;
let biedruSaraksts = {
1: {vārds: "Rinalds", uzvārds: "Bērziņš", loma: "biedrs", stundas: 9},
2: {vārds: "Alfrēds", uzvārds: "Lagzdiņš", loma: "biedrs", stundas: 6},
3: {vārds: "Roberts", uzvārds: "Ozols", loma: "biedrs", stundas: 7},
4: {vārds: "Mihaels", uzvārds: "Limba", loma: "vadītājs", stundas: 12},
5: {vārds: "Ronalds", uzvārds: "Krilows", loma: "biedrs", stundas: 21},
6: {vārds: "Jānis", uzvārds: "Novads", loma: "vadītājs", stundas: 18},
7: {vārds: "Viktors", uzvārds: "Riekstiņš", loma: "biedrs", stundas: 4}
 };


 //console.log(Object.keys(biedruSaraksts).length)
 
 for (let i = 1; i <= Object.keys(biedruSaraksts).length; i++) 
{
    if (biedruSaraksts[i].loma == "vadītājs") 
{
       console.log("Līderis: " + biedruSaraksts[i].vārds)
}
};


for (i = 1; i <= Object.keys(biedruSaraksts).length; i++) 
{
         kopejasStundas = biedruSaraksts[i].stundas + kopejasStundas;
 
};

console.log("Visu biedru kopējas stundas: " + kopejasStundas);


 for (let i = 1; i <= Object.keys(biedruSaraksts).length; i++) 
{
    if (biedruSaraksts[i].stundas >= 20) 
{
       console.log("Zvaigžņu brīvprātīgais: " + biedruSaraksts[i].vārds)
}
};