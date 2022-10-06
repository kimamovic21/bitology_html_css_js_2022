// let brojevi = [1, 2, 3, 4, 5];

// let mapRezultat = brojevi.map((broj) => broj * 2 ); 

// 1. nacin
// let filterRezultat = brojevi.filter((broj) => {
//     if(broj > 3) {
//         return broj;
//     };
// });

// 2. nacin
// let filterRezultat = brojevi.filter((broj) => broj > 3)

// console.log('Originalni niz: ',brojevi);
// console.log('Map metoda: ', mapRezultat);
// console.log('Filter metoda: ', filterRezultat);


// let zaposleni1 = {
//     prezime: 'Imamovic',
//     ime: 'Kerim',
//     plata: 1500,
//     radnoMjesto: 'Frontend developer',
// };

// console.log(zaposleni1);

// let listaZaposlenih = [zaposleni1];
// console.log(listaZaposlenih);


let listaZaposlenih = [
    {
        prezime: 'Sergej',
        ime: 'Beganovic',
        plata: 2000,
        radnoMjesto: 'Backend developer',
    },
    {
        prezime: 'Imamovic',
        ime: 'Kerim',
        plata: 1500,
        radnoMjesto: 'Frontend developer',
    },
    {
        prezime: 'Isic-Spahovic',
        ime: 'Alma',
        plata: 3000,
        radnoMjesto: 'Database analyst',
    },
    {
        prezime: 'Sidran',
        ime: 'Hatidza',
        plata: 3500,
        radnoMjesto: 'QA analyst',
    },
    {
        prezime: 'Karic',
        ime: 'Merjema',
        plata: 3000,
        radnoMjesto: 'UX/UI Designer',
    }
];

console.log(listaZaposlenih);

// let rezultat = listaZaposlenih.filter((zaposleni) => zaposleni.plata >= 3000 );
// console.log(rezultat);

// let frontendDevelopers = listaZaposlenih.filter((zaposleni) => zaposleni.radnoMjesto === 'Frontend developer');
// console.log(frontendDevelopers);


let tijeloTabele = document.getElementById('tijelo');
tijeloTabele.innerHTML = listaZaposlenih.map((zaposleni) => {
    return `<tr>
                <td>${zaposleni.prezime}</td>
                <td>${zaposleni.ime}</td>
                <td>${zaposleni.radnoMjesto}</td>
                <td>${zaposleni.plata}</td>
           </tr>`
}).join('');

const filterFunkcija = () => {
    console.log('Plate vece od 3000'); 
    let bogatiZaposleni = listaZaposlenih.filter((zaposleni) => {
        return zaposleni.plata >= 3000;
    });
    let tijelo = document.getElementById('tijelo');
    tijelo.innerHTML = '';
    tijelo.innerHTML = bogatiZaposleni.map((zaposleni) => {
        return `<tr>
                    <td>${zaposleni.prezime}</td>
                    <td>${zaposleni.ime}</td>
                    <td>${zaposleni.radnoMjesto}</td>
                    <td>${zaposleni.plata}</td>
               </tr>`
    }).join('');
};

const plateManjeOd3000 = () => {
    console.log('Plate manje od 3000')
    let tijelo = document.getElementById('tijelo');
    tijelo.innerHTML = '';

    let manjePlate = listaZaposlenih.filter((zaposleni) => {
        return zaposleni.plata < 3000;
    });
    tijelo.innerHTML = manjePlate.map((zaposleni) => {
        return `<tr>
                    <td>${zaposleni.prezime}</td>
                    <td>${zaposleni.ime}</td>
                    <td>${zaposleni.radnoMjesto}</td>
                    <td>${zaposleni.plata}</td>
               </tr>`
    }).join('');
};



// Razlika izmedu == i ====
// let broj1 = 1; 
// let broj2 = '1';

// let rezUporedbe = broj1 == broj1;
// console.log(rezUporedbe);

// let rezUporedbe2 = broj1 === broj2;
// console.log(rezUporedbe2);
