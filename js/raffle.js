class Raffle {
    constructor(){
        this.students = _.shuffle([
            { name: 'Adrián', img: './img/Adrian.JPG' },
            { name: 'Alberto Salmerón', img: './img/albertoSalmeron.JPG' },
            { name: 'Alberto Sánchez', img: './img/albertoSanchez.JPG' },
            { name: 'Alberto Soler', img: './img/albertoSoler.JPG' },
            { name: 'Alfio', img: './img/alfio.JPG' },
            { name: 'Álvaro Martínez', img: './img/alvaroMartinez.JPG' },
            { name: 'Álvaro Mata', img: './img/alvaroMata.JPG' },
            { name: 'Álvaro Riaño', img: './img/alvaroRiaño.JPG' },
            { name: 'Ana', img: './img/ana.JPG' },
            { name: 'Beltrán', img: './img/beltran.JPG' },
            { name: 'Carlos Lorente', img: './img/carlosLorente.JPG' },
            { name: 'Carlos San Martín', img: './img/carlosSanMartin.JPG' },
            { name: 'Enrique', img: './img/enrique.JPG' },
            { name: 'Giorgio', img: './img/giorgio.JPG' },
            { name: 'Jesús del Río', img: './img/jesusDelRio.JPG' },
            { name: 'Jesús Silva', img: './img/jesusSilva.JPG' },
            { name: 'Jorge', img: './img/jorge.JPG' },
            { name: 'Jose Antonio', img: './img/joseAntonio.JPG' },
            { name: 'Kathia', img: './img/kathia.JPG' },
            { name: 'Lucas', img: './img/lucas.JPG' },
            { name: 'Nacho', img: './img/nacho.JPG' },
            { name: 'Robert', img: './img/robert.JPG' },
            { name: 'Sebastien', img: './img/sebastien.JPG' },
            { name: 'Sergio', img: './img/sergio.JPG' },
            { name: 'Susana', img: './img/susana.JPG' },
            { name: '100Fuegos', img: './img/100fue.JPG' },
        ]);
        this.students.forEach(e => {
            this.addCard(e);
        });

        this.finalPairs = [];

        $(".card").on('click', e => {
            let total =  $(".card.clicked").length;
            if(!$(e.currentTarget).hasClass('clicked')){
                $(e.currentTarget).addClass('clicked');
                let name = $(e.currentTarget).attr('attr-name');
                console.log(`Added to pairs ${name}`);
                this.addPaired(name);
            }
        });
    }

    addCard(card){
        let card_el = $(`
        <div class="card" attr-name="${card.name}">
            <div class="side back">
                <img src="https://www.ironhack.com/assets/shared/logo.svg">
            </div>
            <div class="side front">
                <img src="${card.img}">
            </div>
        </div>
        `);
        $("#board").append(card_el)
    }

    addPaired(name){
        this.finalPairs.push(name);
        let chunks = _.chunk(this.finalPairs, 2);
        let pairs = $("#pairs");
        pairs.empty();
        console.log("Rewriting pairs");
        console.log(chunks);
        chunks.forEach(ch => {
            console.log("add pair")
            let pair = $(`
                <div class="pair">
                  <span>${ch[0]}</span>
                   - 
                  <span>${ch[1] ? ch[1] : '....'}</span>
                </div>
            `);
            pairs.append(pair);
        })
    }
}
