let aktieruDaudzums = 0;
let pieredzeAktieriem = 0;
let kuramlielakaPieredze = 0;
let lielākaPieredze = 0;
let izrazuSkaits = 0;
let aktieruSaraksts = {
    1: {vārds: "Rolands", uzvārds: "Krilows", loma: "aktieris", izrādes: 6, pieredze: 7},
    2: {vārds: "Rinalds", uzvārds: "Bērziņš", loma: "aktieris", izrādes: 7, pieredze: 1},
    3: {vārds: "Alfrēds", uzvārds: "Novads", loma: "aktieris", izrādes: 4, pieredze: 2},
    4: {vārds: "Maiks", uzvārds: "Brikains", loma: "aktieris", izrādes: 2, pieredze: 4},
    5: {vārds: "Emīls", uzvārds: "Sahmanovs", loma: "režisors", izrādes: 5, pieredze: 3},
    6: {vārds: "Roberts", uzvārds: "Zvaigzne", loma: "aktieris", izrādes: 9, pieredze: 5},
    7: {vārds: "Kristaps", uzvārds: "Krupis", loma: "aktieris", izrādes: 8, pieredze: 6},
};

//console.log(Object.keys(aktieruSaraksts).length)

for (let i = 1; i <= Object.keys(aktieruSaraksts).length; i++) 
{
      if (aktieruSaraksts[i].loma == "režisors") 
    {
                console.log("Režisors: " + aktieruSaraksts[i].vārds + " " + aktieruSaraksts[i].uzvārds)
    }
};

for (i = 1; i <= Object.keys(aktieruSaraksts).length; i++) 
{
         izrazuSkaits = aktieruSaraksts[i].izrādes + izrazuSkaits
};

console.log("Kopējais izrāžu skaits: " + izrazuSkaits);


for (i = 1; i <= Object.keys(aktieruSaraksts).length; i++)     
{
    if (aktieruSaraksts[i].loma == "aktieris" && aktieruSaraksts[i].izrādes >= 8 && aktieruSaraksts[i].pieredze >= 3) //&& nozime and un != parbauda vai nav vienads 
    {
           console.log("Skatuves Zvaigzne: " + aktieruSaraksts[i].vārds + " " + aktieruSaraksts[i].uzvārds)
    }
    
}


for (i = 1; i <= Object.keys(aktieruSaraksts).length; i++) 
{
      if (aktieruSaraksts[i].pieredze > lielākaPieredze) 
    {
           lielākaPieredze = aktieruSaraksts[i].pieredze
           kuramlielakaPieredze = aktieruSaraksts[i].vārds + " " + aktieruSaraksts[i].uzvārds
    }  
};

//console.log(kuramlielakaPieredze)

console.log("Aktieris ar vislielāko pieredzi: " + kuramlielakaPieredze + "(" + lielākaPieredze + " gadi)");


for (i = 1; i <= Object.keys(aktieruSaraksts).length; i++) 
{
    if (aktieruSaraksts[i].loma == "aktieris") 
    {
        pieredzeAktieriem = aktieruSaraksts[i].pieredze + pieredzeAktieriem
        aktieruDaudzums = aktieruDaudzums + 1
    }
};


console.log("Kopējā pieredze aktieriem: " + pieredzeAktieriem + " gadi")
console.log("Kopējais aktieru daudzums: " + aktieruDaudzums)
console.log("Vidējā pieredze tikai aktieriem: " + pieredzeAktieriem/aktieruDaudzums + " gadi")

