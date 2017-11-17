let Raffle = function() {
    this.students = [
        { name: 'Manu Avello',         img:'http://lorempixel.com/400/400' },
        { name: 'Manu Del Pino',       img:'http://lorempixel.com/400/400' },
        { name: 'Yaiza Garcia',        img:'http://lorempixel.com/400/400' },
        { name: 'Victor Rodriguez',    img:'http://lorempixel.com/400/400' },
        { name: 'Andrei Campos',       img:'http://lorempixel.com/400/400' },
        { name: 'Anto Briattore',      img:'http://lorempixel.com/400/400' },
        { name: 'Pablo Onieva',        img:'http://lorempixel.com/400/400' },
        { name: 'Lluis Arévalos',      img:'http://lorempixel.com/400/400' },
        { name: 'Papu Arza',           img:'http://lorempixel.com/400/400' },
        { name: 'Mikel Rumayor',       img:'http://lorempixel.com/400/400' },
        { name: 'Miguel Moracho',      img:'http://lorempixel.com/400/400' },
        { name: 'Raul Vega',           img:'http://lorempixel.com/400/400' },
        { name: 'Alfonso Huéscar',     img:'http://lorempixel.com/400/400' },
        { name: 'Clauda Lozada',       img:'http://lorempixel.com/400/400' },
        { name: 'Alvaro López',        img:'http://lorempixel.com/400/400' },
        { name: 'Alberto Marcos',      img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 1',            img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 2',            img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 3',            img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 4',            img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 5',            img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 6',            img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 7',            img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 8',            img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 9',            img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 10',           img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 11',           img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 12',           img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 13',           img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 14',           img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 15',           img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 16',           img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 17',           img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 18',           img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 19',           img:'http://lorempixel.com/400/400' },
        { name: 'Alumno 20',           img:'http://lorempixel.com/400/400' },
    ]
    this.selectedPair = [];
    this.allPairs = [];
    this.selectedPeople = 0;
    this.students = this.shuffleArray();
}

Raffle.prototype.shuffleArray = function() {
    return this.students;
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
