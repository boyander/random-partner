let Raffle = function() {
    this.students = [
        { name: 'Abraham Castro',           img:'./img/Abraham-Castro-01.JPG' },
        { name: 'Alber Pedraza',            img:'./img/Alber-Pedraza-01.JPG' },
        { name: 'Alberto Campos',           img:'./img/Alberto-Campos-01.JPG' },
        { name: 'Alberto Rivera',           img:'./img/Alberto-Rivera-01.JPG' },
        { name: 'Alvaro Lendinez',          img:'./img/Alvaro-Lendinez-01.JPG' },
        { name: 'Ana Figueredo',            img:'./img/Ana-Julia-Figueredo-01.JPG' },
        { name: 'Angel Sideroey',           img:'./img/Angel-Sideroey-01.JPG' },
        { name: 'Angelina Moreno',          img:'./img/Angelina-Moreno-02.JPG' },
        { name: 'Asier Cisneros',           img:'./img/Asier-Cisneros-01.JPG' },
        { name: 'Camila Maya',              img:'./img/Camila-Maya-01.JPG' },
        { name: 'Clementina Mata',          img:'./img/Clementina-Mata-01.JPG' },
        { name: 'Cristian Castillo',        img:'./img/Cristian-Castillo-01.JPG' },
        { name: 'Dario Vigil',              img:'./img/Dario-Vigil-01.JPG' },
        { name: 'Eduardo Rodes',            img:'./img/Eduardo-Rodes-01.JPG' },
        { name: 'Ernesto Monsalve',         img:'./img/Ernesto-Monsalve-01.JPG' },
        { name: 'Fran Molpeceres',          img:'./img/Fran-Molpeceres-01.JPG' },
        { name: 'Fran Romero',              img:'./img/Fran-Romero-01.JPG' },
        { name: 'Gema de Rus',              img:'./img/Gema-de-Rus-01.JPG' },
        { name: 'Jose Prieto',              img:'./img/Jose-Prieto.JPG' },
        { name: 'Juan Vallejo Najera',      img:'./img/Juan-Vallejo-Najera-02.JPG' },
        { name: 'Nadia Carreira',           img:'./img/Nadia-Carreira-01.JPG' },
        { name: 'Nikolaas Verlee',          img:'./img/Nikolaas-Verlee-01.JPG' },
        { name: 'Pablo Carmona',            img:'./img/Pablo-Carmona-01.JPG' },
        { name: 'Pablo Gutierrez',          img:'./img/Pablo-Gutierrez-01.JPG' },
        { name: 'Rocio Garcia',             img:'./img/Rocio-Garcia-01.JPG' },
        { name: 'Sara Mozaffary',           img:'./img/Sara-Mozaffary-01.JPG' },
        { name: 'Sergio de Diego',          img:'./img/Sergio-de-Diego-01.JPG' },
        { name: 'Tess de Gregorio',         img:'./img/Tess-de-Gregorio-01.JPG' },
        { name: 'Virginia Alvarez',         img:'./img/Virginia-Alvarez-01.JPG' },
        { name: 'Yurema Rebollo',           img:'./img/Yurema-Rebollo-01.JPG' },
        { name: 'Manuel Serrano',           img:'./img/Manuel-Serrano-01.png' },
        { name: 'Maria Ruiz',               img:'./img/Maria-Ruiz-01.jpg' },
        { name: 'MaJo Villafuerte',         img:'./img/Maria-Jose-Villafuerte-01.png' },
        { name: 'Alejandro Dietta',         img:'https://www.teflexpress.co.uk/includes/tefladvancedtheme/uploads/tefl-express-avatar-men.jpg' },
    ]
    this.selectedPair = [];
    this.allPairs = [];
    this.selectedPeople = 0;
    this.students = this.shuffleArray();
}

Raffle.prototype.shuffleArray = function() {
    return _.shuffle(this.students);
}

Raffle.prototype.chooseOneRandom = function() {
    randomPosition = Math.floor(Math.random()*(this.students.length-1));
    var studentSelected = this.students[randomPosition];
    this.selectedPeople++;
    this.selectedPair.push(studentSelected);
    this.students.splice(randomPosition, 1);
    return studentSelected;
}

Raffle.prototype.chooseOne = function(studentSelected){
    this.selectedPeople++;
    this.selectedPair.push(studentSelected);
}
