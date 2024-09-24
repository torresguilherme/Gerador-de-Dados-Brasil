const firstNames = [
    "Lucas", "Maria", "Pedro", "Ana", "João", "Beatriz", "Guilherme", "Sofia",
    "Miguel", "Arthur", "Davi", "Gabriel", "Matheus", "Gustavo", "Bernardo",
    "Rafael", "Enzo", "Henrique", "Nicolas", "Felipe", "Eduardo", "Daniel",
    "Vitor", "Leonardo", "Samuel", "Heitor", "Lorenzo", "Theo", "Yuri",
    "Benjamin", "Vinícius", "Joaquim", "Antony", "Caio", "Otávio", "Isaac",
    "Thiago", "Bruno", "Diego", "Luiz", "Francisco", "Murilo", "André", 
    "Rodrigo", "Raul", "Emanuel", "Vicente", "Igor", "Augusto", "Cristian", 
    "Jonathan", "Alexandre", "Bryan", "Dilan", "Ian", "Helena", "Alice", 
    "Laura", "Valentina", "Sophia", "Isabella", "Manuela", "Júlia", "Luiza", 
    "Heloísa", "Lívia", "Maria Clara", "Cecília", "Giovanna", "Beatriz", 
    "Lorena", "Rafaela", "Larissa", "Maria Eduarda", "Ana Clara", "Isabel", 
    "Emily", "Ana Luiza", "Clara", "Estela", "Yasmin", "Letícia", "Marina", 
    "Vitória", "Camila", "Nicole", "Gabriela", "Emanuelly", "Rebeca", "Elisa", 
    "Larah", "Bianca", "Sara", "Pietra", "Sofia", "Olívia", "Melissa", "Maitê", 
    "Luna", "Agatha", "Amanda", "Carolina", "Isadora", "Tainá", "Micaela"
];

const lastNames = [
    "Silva", "Santos", "Oliveira", "Costa", "Pereira", "Almeida", "Torres", 
    "Cruz", "Souza", "Rodrigues", "Carvalho", "Lima", "Fernandes", "Araújo", 
    "Melo", "Castro", "Martins", "Gomes", "Barbosa", "Pinto", "Freitas", 
    "Santana", "Rocha", "Nunes", "Moreira", "Ribeiro", "Dias", "Cardoso", 
    "Teixeira", "Correia", "Moura", "Monteiro", "Farias", "Batista", "Braga", 
    "Xavier", "Medeiros", "Ramos", "Duarte", "Freire", "Lopes", "Marques", 
    "Vieira", "Antunes", "Barros", "Santiago", "Paiva", "Cunha", "Soares", 
    "Peixoto"
];

const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "uol.com.br", "bol.com.br", "icloud.com"];

const ages = [
    "18", "19", "20", "21", "22", "23", "24", "25", 
    "26", "27", "28", "29", "30", "31", "32", "33", 
    "34", "35", "36", "37"
];

const cities = [
    "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", 
    "Fortaleza", "Brasília", "Curitiba", "Manaus", "Recife", 
    "Porto Alegre", "Goiânia", "Belém", "São Luís", "Maceió", 
    "Natal", "Teresina", "Campo Grande", "João Pessoa", 
    "Florianópolis", "Aracaju", "Vitória"
];

const countries = ["Brasil", "Brazil"];

const heights = [
    "1,65", "1,67", "1,69", "1,70", "1,72", "1,73", "1,74", "1,75", "1,80", "1,82", "1,83", "1,84", "1,85"
];


function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function generateRandomRG() {
    const sequence = [];
    
    while (sequence.length < 9) {
        const randomNumber = Math.floor(Math.random() * 10); 
        if (!sequence.includes(randomNumber)) {
            sequence.push(randomNumber);
        }
    }

    return sequence.join(''); 
}


function generateRandomData() {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const domain = getRandomElement(domains);
    const randomCity = getRandomElement(cities);
    const randomAge = getRandomElement(ages);
    const randomCountry = getRandomElement(countries);
    const randomHeight = getRandomElement(heights);
    const randomRG = generateRandomRG();

    document.getElementById("name").value = firstName;
    document.getElementById("lastname").value = lastName;
    document.getElementById("email").value = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
    document.getElementById("city").value = randomCity;
    document.getElementById("age").value = randomAge;
    document.getElementById("pais").value = randomCountry;
    document.getElementById("altura").value = randomHeight;
    document.getElementById("rg").value = randomRG;
}

