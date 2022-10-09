let footballClubs = [
    {
        name: 'Barcelona FC',
        city: 'Barcelona',
        stadium: 'Camp Nou',
        capacity: 99354,
        titles: 26,
        logo: 'img/fcbarcelona.png',
        webPage: 'https://www.fcbarcelona.com',
    },
    {
        name: 'Real Madrid FC',
        city: 'Madrid',
        stadium: 'Santiago Bernabeu',
        capacity: 81044,
        titles: 35,
        logo: 'img/fcrealmadrid.png',
        webPage: 'https://www.realmadrid.com',
    },
    {
        name: 'Atletico Madrid FC',
        city: 'Madrid',
        stadium: 'Vanda Metropolitano',
        capacity: 68456,
        titles: 11,
        logo: 'img/fcatleticomadrid.png',
        webPage: 'https://en.atleticodemadrid.com',
    },
    {
        name: 'Valencia FC',
        city: 'Valencia',
        stadium: 'Mestalla',
        capacity: 55000,
        titles: 6,
        logo: 'img/fcvalencia.png',
        webPage: ' https://www.valenciacf.com/en/',
    },
    {
        name: 'Sevilla FC',
        city: 'Sevilla',
        stadium: 'Ramon Sanchez Pizjuan',
        capacity: 43883,
        titles: 1,
        logo: 'img/fcsevilla.png',
        webPage: 'https://sevillafc.es/en',
    },
    {
        name: 'Athletic Bilbao FC',
        city: 'Bilbao',
        stadium: 'San Mames',
        capacity: 53289,
        titles: 8,
        logo: 'img/fcathleticbilbao.png',
        webPage: 'https://www.athletic-club.eus/',
    },
    {
        name: 'Real Sociedad FC',
        city: 'San Sebastian',
        stadium: 'Anoeta',
        capacity: 39500,
        titles: 2,
        logo: 'img/fcrealsociedad.png',
        webPage: 'https://www.realsociedad.eus/en',
    },
    {
        name: 'Real Betis FC',
        city: 'Sevilla',
        stadium: 'Benito Villamarin',
        capacity: 60721,
        titles: 1,
        logo: 'img/fcrealbetis.png',
        webPage: 'https://en.realbetisbalompie.es/',
    },
    {
        name: 'Villarreal FC',
        city: 'Villarreal',
        stadium: 'Estadio de la Ceramica',
        capacity: 23500,
        titles: 0,
        logo: 'img/fcvillarreal.png',
        webPage: 'https://villarrealcf.es/en/',
    },
    {
        name: 'Rayo Vallecano FC',
        city: 'Madrid',
        stadium: 'Estadio de Vallecas',
        capacity: 14505,
        titles: 0,
        logo: 'img/fcrayovallecano.png',
        webPage: 'https://www.rayovallecano.es/',
    },
    {
        name: 'Real Valladolid FC',
        city: 'Valladolid',
        stadium: 'Jose Zorrilla',
        capacity: 27518,
        titles: 0,
        logo: 'img/fcrealvalladolid.png',
        webPage: 'https://www.realvalladolid.es/',
    },
    {
        name: 'Osasuna FC',
        city: 'Pamplona',
        stadium: 'Estadio El Sadar',
        capacity: 23576,
        titles: 0,
        logo: 'img/fcosasuna.png',
        webPage: 'https://www.osasuna.es/',
    },
    {
        name: 'Celta Vigo FC',
        city: 'Vigo',
        stadium: 'Estadio Balaídos',
        capacity: 29000,
        titles: 0,
        logo: 'img/fcceltavigo.png',
        webPage: 'https://rccelta.es/en/',
    },
    {
        name: 'Mallorca FC',
        city: 'Majorca',
        stadium: 'Iberostar',
        capacity: 23142,
        titles: 0,
        logo: 'img/fcmallorca.png',
        webPage: 'https://www.rcdmallorca.es/',
    },
    {
        name: 'Girona FC',
        city: 'Girona',
        stadium: 'Estadi Montilivi',
        capacity: 13500,
        titles: 0,
        logo: 'img/fcgirona.png',
        webPage: 'https://www.gironafc.cat/en',
    },
    {
        name: 'Getafe FC',
        city: 'Madrid',
        stadium: 'Coliseum Alfonso Pérez',
        capacity: 17000,
        titles: 0,
        logo: 'img/fcgetafe.png',
        webPage: 'https://www.getafecf.com/',
    },
    {
        name: 'Espanyol FC',
        city: 'Barcelona',
        stadium: 'Estadi Cornellà-El Prat',
        capacity: 40000,
        titles: 0,
        logo: 'img/fcespanyol.png',
        webPage: 'https://www.rcdespanyol.com/en/',
    },
    {
        name: 'Almeria FC',
        city: 'Almeria',
        stadium: 'Estadio de los Juegos Mediterráneos',
        capacity: 15000,
        titles: 0,
        logo: 'img/fcalmeria.png',
        webPage: 'https://www.udalmeriasad.com/en',
    },
    {
        name: 'Cadiz FC',
        city: 'Cadiz',
        stadium: 'Estadio Nuevo Mirandilla',
        capacity: 25033,
        titles: 0,
        logo: 'img/fccadiz.png',
        webPage: 'https://www.cadizcf.com/',
    },
    {
        name: 'Elche FC',
        city: 'Elche',
        stadium: 'Manuel Martínez Valero',
        capacity: 31388,
        titles: 0,
        logo: 'img/fcelche.png',
        webPage: 'https://www.elchecf.es/',
    },
];

footballClubs.sort((a, b) => a.name.localeCompare(b.name))

console.log(footballClubs);

let clubLogos = document.getElementById('club-logos');
clubLogos.innerHTML = footballClubs.map((club) => {
    return `<a href="${club.webPage}" target="_blank"> 
                <img class="club-logos__img" src="${club.logo}" alt="Club logo"/> 
           </a>`
}).join('');


let tableBody = document.getElementById('tbody');
// console.log(tableBody);
tableBody.innerHTML = footballClubs.map((club) => {
    return `<tr>
                <td>${club.name}</td>
                <td>${club.city}</td>
                <td>${club.stadium}</td>
                <td>${club.capacity}</td>
                <td>${club.titles}</td>
                <td><img src=${club.logo} alt="Club logo"/></td>
           </tr>`
}).join('');


const capacityGreaterThan40000 = () => {
    console.log('Capacity greater than 40000');
    let clubs = footballClubs.filter((club) => {
        return club.capacity >= 40000;
    });
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    clubs.sort((a,b) => b.capacity - a.capacity);
    tbody.innerHTML = clubs.map((club) => {
        return `<tr>
                <td>${club.name}</td>
                <td>${club.city}</td>
                <td>${club.stadium}</td>
                <td>${club.capacity}</td>
                <td>${club.titles}</td>
                <td><img src=${club.logo} alt="Club logo"/></td>
           </tr>`
    }).join('');
};


const capacityLessThan40000 = () => {
    console.log('Capacity less than 40000');
    let clubs = footballClubs.filter((club) => {
        return club.capacity < 40000;
    });
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    clubs.sort((a,b) => b.capacity - a.capacity);
    tbody.innerHTML = clubs.map((club) => {
        return `<tr>
                <td>${club.name}</td>
                <td>${club.city}</td>
                <td>${club.stadium}</td>
                <td>${club.capacity}</td>
                <td>${club.titles}</td>
                <td><img src=${club.logo} alt="Club logo"/></td>
           </tr>`
    }).join('');
};


const moreThan10titles = () => {
    console.log('More than 10 titles');
    let clubs = footballClubs.filter((club) => {
        return club.titles > 10;
    });
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    clubs.sort((a,b) => b.titles - a.titles);
    tbody.innerHTML = clubs.map((club) => {
        return `<tr>
                <td>${club.name}</td>
                <td>${club.city}</td>
                <td>${club.stadium}</td>
                <td>${club.capacity}</td>
                <td>${club.titles}</td>
                <td><img src=${club.logo} alt="Club logo"/></td>
           </tr>`
    }).join('');
};


const lessThan10titles = () => {
    console.log('Less than 10 titles');
    let clubs = footballClubs.filter((club) => {
        return (club.titles > 0 && club.titles < 10);
    });
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    clubs.sort((a,b) => b.titles - a.titles);
    tbody.innerHTML = clubs.map((club) => {
        return `<tr>
                <td>${club.name}</td>
                <td>${club.city}</td>
                <td>${club.stadium}</td>
                <td>${club.capacity}</td>
                <td>${club.titles}</td>
                <td><img src=${club.logo} alt="Club logo"/></td>
           </tr>`
    }).join('');
};


const resetFunction = () => {
    console.log('Reset button')
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    tbody.innerHTML = footballClubs.map((club) => {
        return `<tr>
                <td>${club.name}</td>
                <td>${club.city}</td>
                <td>${club.stadium}</td>
                <td>${club.capacity}</td>
                <td>${club.titles}</td>
                <td><img src=${club.logo} alt="Club logo"/></td>
           </tr>`
    }).join('');
};
