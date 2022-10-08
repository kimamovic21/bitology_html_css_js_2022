let footballClubs = [
    {
        name: 'FC Barcelona',
        city: 'Barcelona',
        stadium: 'Camp Nou',
        capacity: 99354,
        titles: 26,
        logo: 'img/fcbarcelona.png',
    },
    {
        name: 'FC Real Madrid',
        city: 'Madrid',
        stadium: 'Santiago Bernabeu',
        capacity: 81044,
        titles: 35,
        logo: 'img/fcrealmadrid.png',
    },
    {
        name: 'FC Atletico Madrid',
        city: 'Madrid',
        stadium: 'Vanda Metropolitano',
        capacity: 68456,
        titles: 11,
        logo: 'img/fcatleticomadrid.png',
    },
    {
        name: 'FC Valencia',
        city: 'Valencia',
        stadium: 'Mestalla',
        capacity: 55000,
        titles: 6,
        logo: 'img/fcvalencia.png'
    },
    {
        name: 'FC Sevilla',
        city: 'Sevilla',
        stadium: 'Ramon Sanchez Pizjuan',
        capacity: 43883,
        titles: 1,
        logo: 'img/fcsevilla.png'
    },
    {
        name: 'FC Athletic Bilbao',
        city: 'Bilbao',
        stadium: 'San Mames',
        capacity: 53289,
        titles: 8,
        logo: 'img/fcathleticbilbao.png',
    },
    {
        name: 'FC Real Sociedad',
        city: 'San Sebastian',
        stadium: 'Anoeta',
        capacity: 39500,
        titles: 2,
        logo: '',
    },
    {
        name: 'FC Real Betis',
        city: 'Sevilla',
        stadium: 'Benito Villamarin',
        capacity: 60721,
        titles: 1,
        logo: '',
    },
    {
        name: 'FC Villarreal',
        city: 'Villarreal',
        stadium: 'Estadio de la Ceramica',
        capacity: 23500,
        titles: 0,
        logo: '',
    },
    {
        name: 'FC Rayo Vallecano',
        city: 'Madrid',
        stadium: 'Estadio de Vallecas',
        capacity: 14505,
        titles: 0,
        logo: '',
    },
    {
        name: 'FC Real Valladolid',
        city: 'Valladolid',
        stadium: 'Jose Zorrilla',
        capacity: 27518,
        titles: 0,
        logo: '',
    },
    {
        name: 'FC Osasuna',
        city: 'Pamplona',
        stadium: 'Estadio El Sadar',
        capacity: 23576,
        titles: 0,
        logo: '',
    },
    {
        name: 'FC Celta Vigo',
        city: 'Vigo',
        stadium: 'Estadio Balaídos',
        capacity: 29000,
        titles: 0,
        logo: '',
    },
    {
        name: 'FC Mallorca',
        city: 'Majorca',
        stadium: 'Iberostar',
        capacity: 23142,
        titles: 0,
        logo: '',
    },
    {
        name: 'FC Girona',
        city: 'Girona',
        stadium: 'Estadi Montilivi',
        capacity: 13500,
        titles: 0,
        logo: '',
    },
    {
        name: 'FC Getafe',
        city: 'Madrid',
        stadium: 'Coliseum Alfonso Pérez',
        capacity: 17000,
        titles: 0,
        logo: '',
    },
    {
        name: 'FC Espanyol',
        city: 'Barcelona',
        stadium: 'Estadi Cornellà-El Prat',
        capacity: 40000,
        titles: 0,
        logo: '',
    },
    {
        name: 'FC Almeria',
        city: 'Almeria',
        stadium: 'Estadio de los Juegos Mediterráneos',
        capacity: 15000,
        titles: 0,
        logo: '',
    },
    {
        name: 'FC Cadiz',
        city: 'Cadiz',
        stadium: 'Estadio Nuevo Mirandilla',
        capacity: 25033,
        titles: 0,
        logo: '',
    },
    {
        name: 'FC Elche',
        city: 'Elche',
        stadium: 'Manuel Martínez Valero',
        capacity: 31388,
        titles: 0,
        logo: '',
    },
];

// footballClubs.sort(function(a, b){
//     return b.titles - a.titles
// });

// console.log(footballClubs);


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
