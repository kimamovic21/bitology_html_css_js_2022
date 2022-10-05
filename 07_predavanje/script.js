// let mojaFunkcija = function mojaFunkcija () {
//     console.log('Hello world');
// };
// mojaFunkcija ();


// let mojaFunkcija = function () {
//     console.log('Hello world');
// };
// mojaFunkcija ();


// let mojaFunkcija = () => console.log('Hello world');
// mojaFunkcija();


// let mojaFunkcija = (x, y) => console.log(x + y);
// mojaFunkcija(2, 3);


// Array - niz 
// let lista = [1,2,3,4,5];
// console.log(lista);
// console.log(lista[2]);
// lista.push(6);
// lista.push(7);
// lista.pop()

// console.log(lista);

// const imeUvelikaSlova = (ime) => console.log(ime.toUpperCase());
// imeUvelikaSlova('kerim');


let imena = ['Alma', 'Hatidza', 'Kerim', 'Merjema', 'Sergej'];
// imena.push('Meris');
// imena.push('Almin');
// imena.pop();
console.log(imena);

let novaImena = imena.map((ime) => ime.toUpperCase());
console.log(novaImena);


let brojevi = [1, 2, 3, 4, 5];
console.log(brojevi);

// const pomnoziSaDva = (broj) => {
//     return broj * 2;
// }

// let rezultat = brojevi.map(pomnoziSaDva = (broj) => {
//     return broj * 2;
// }); 
let noviRezultat = brojevi.map((broj) => broj * 2 ); 
console.log(noviRezultat);

// let rezultat = pomnoziSaDva(10);
// console.log(rezultat);




// Moji primjeri

let auta = ['BMW', 'audi', 'mercededs'];
console.log(auta);

auta.push('Golf', 'Skoda');
console.log(auta);


let voce = ['banane', 'kruske', 'jabuke', 'sljive', 'maline'];
console.log(voce);

let novoVoce = voce.map((novo) => {
    return novo.toUpperCase();
});
console.log(novoVoce);


let povrce = ['krompir', 'paradajz', 'mrkva', 'krastavac', 'luk'];
console.log(povrce);

let novoPovrce = povrce.map((novo) => novo.charAt(0));
console.log(novoPovrce);
