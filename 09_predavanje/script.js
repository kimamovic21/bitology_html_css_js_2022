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

ucitajZaposlene();

function ucitajZaposlene() {
    let tijeloTabele = document.getElementById('tijelo');
    tijeloTabele.innerHTML = listaZaposlenih.map((zaposleni) => {
        return `<tr>
                    <td>${zaposleni.prezime}</td>
                    <td>${zaposleni.ime}</td>
                    <td>${zaposleni.radnoMjesto}</td>
                    <td>${zaposleni.plata}</td>
                    <td><img src="https://www.w3schools.com/howto/img_avatar.png" width="50px" alt="Random image" /></td>
                    <td><button class="btn btn-danger" onclick="izbrisi('${zaposleni.prezime}')">Izbrisi</button></td>
               </tr>`
    }).join('');
}

const izbrisi = (prezime) => {
    // console.log(prezime);
    let filtriraniZaposleni = listaZaposlenih.filter((zaposleni) =>  zaposleni.prezime !== prezime);
    // ako prezime zaposlenog nije jednako prezimenu kojeg smo mi izbrisali
    listaZaposlenih = filtriraniZaposleni;
    let tijeloTabele = document.getElementById('tijelo');
    tijeloTabele.innerHTML = listaZaposlenih.map((zaposleni) => {
        return `<tr>
                    <td>${zaposleni.prezime}</td>
                    <td>${zaposleni.ime}</td>
                    <td>${zaposleni.radnoMjesto}</td>
                    <td>${zaposleni.plata}</td>
                    <td><img src="https://www.w3schools.com/howto/img_avatar.png" width="50px" alt="Random image" /></td>
                    <td><button class="btn btn-danger" onclick="izbrisi('${zaposleni.prezime}')">Izbrisi</button></td>
               </tr>`
    }).join('');
}

function snimi() {
    // console.log('pokrenuta funkcija snimi');
    let prezimeValue = document.getElementById('prezime').value;
    let imeValue = document.getElementById('ime').value;
    let radnoMjestoValue = document.getElementById('radnoMjesto').value;
    let plataValue = document.getElementById('plata').value;
    // console.log(prezimeValue, imeValue, radnoMjestoValue, plataValue);

    let noviZaposleni = {
        prezime: prezimeValue,
        ime: imeValue,
        plata: plataValue,
        radnoMjesto: radnoMjestoValue,
    };
    // console.log(noviZaposleni);
    listaZaposlenih.push(noviZaposleni);
    console.log(listaZaposlenih);
    ucitajZaposlene();
};

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
