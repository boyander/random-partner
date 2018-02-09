let Raffle = function() {
    this.students = [
        { name:'Adrián',      img:'./img/Adrian.JPG'},
        { name:'Alberto Salmerón',      img:'./img/albertoSalmeron.JPG'},
        { name:'Alberto Sánchez',      img:'./img/albertoSanchez.JPG'},
        { name:'Alberto Soler',      img:'./img/albertoSoler.JPG'},
        { name:'Alfio',      img:'./img/alfio.JPG'},
        { name:'Álvaro Martínez',      img:'./img/alvaroMartinez.JPG'},
        { name:'Álvaro Mata',      img:'./img/alvaroMata.JPG'},
        { name:'Álvaro Riaño',      img:'./img/alvaroRiaño.JPG'},
        { name:'Ana',      img:'./img/ana.JPG'},
        { name:'Beltrán',      img:'./img/beltran.JPG'},
        { name:'Carlos Lorente',      img:'./img/carlosLorente.JPG'},
        { name:'Carlos San Martín',      img:'./img/carlosSanMartin.JPG'},
        { name:'Enrique',      img:'./img/enrique.JPG'},
        { name:'Giorgio',      img:'./img/giorgio.JPG'},
        { name:'Jesús del Río',      img:'./img/jesusDelRio.JPG'},
        { name:'Jesús Silva',      img:'./img/jesusSilva.JPG'},
        { name:'Jorge',      img:'./img/jorge.JPG'},
        { name:'Jose Antonio',      img:'./img/joseAntonio.JPG'},
        { name:'Kathia',      img:'./img/kathia.JPG'},
        { name:'Lucas',      img:'./img/lucas.JPG'},
        { name:'Nacho',      img:'./img/nacho.JPG'},
        { name:'Robert',      img:'./img/robert.JPG'},
        { name:'Sebastien',      img:'./img/sebastien.JPG'},
        { name:'Sergio',      img:'./img/sergio.JPG'},
        { name:'Susana',      img:'./img/susana.JPG'},
        { name:'100Fuegos',      img:'./img/100fue.JPG'},
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
