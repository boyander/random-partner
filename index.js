window.onload = function(e){ 
    let newGame = {
        raffle: new Raffle()
    }
    var flag = "";

    document.getElementById("start").onclick = function(){
        document.getElementById("home-page").style.display = "none";
        flag = "real";
        drawCards();
        startRaffle(4000);
    };
    document.getElementById("try").onclick = function(){
        document.getElementById("home-page").style.display = "none";
        flag = "try";
        drawCards();
        startRaffle(1500);
    };

    function drawCards() {
        var html = '';
        newGame.raffle.students.forEach(function(pic, index) {
            var sanitizedName = pic.name.split(' ').join('_');
            html += '<div class= "card" name="' + pic.name + '">';
            html += '<div class="back"';
            html += '    name="' + pic.name + '" pic_path="'+ pic.img + '">';
            html += '<img src="https://www.ironhack.com/assets/shared/logo.svg" alt="">';
            html += '</div>';
            html += '</div>';
            if(index === 4 || index == 33) {
                html += '<div class="spacer"></div>';
            }
        });
        document.getElementById('board').innerHTML = html;
    }
    

    function startRaffle(interval) {
        var interval = setInterval(() => {
                var selectedStudent = newGame.raffle.chooseOneRandom();
                var selectedCard = document.querySelector("[name='"+selectedStudent.name+"']");
                selectedCard.children[0].children[0].src="";
                selectedCard.children[0].style.backgroundImage = "url('"+selectedStudent.img+"')";
                if (newGame.raffle.selectedPeople % 2 == 0) {
                    writePair(newGame.raffle.selectedPair);
                    newGame.raffle.allPairs.push(newGame.raffle.selectedPair)
                    newGame.raffle.selectedPair = [];
                }
                if(newGame.raffle.selectedPair.length == (newGame.raffle.students.length)/2){
                    allPairsDone(interval)
                }
        }, interval)     
    }

    function startClicks(){
        var classname = document.getElementsByClassName("card");
        Array.from(classname).forEach(function(element) {
            element.addEventListener('click', clicked);
        });
        function clicked(e) {
                var selectedCard = e.target; 
                selectedCard.className += " block-card";
                var studentName = e.target.getAttribute("name");
                var selectedStudent = newGame.raffle.students.filter(e => {
                    return e.name == studentName;
                })
                selectedStudent = selectedStudent[0];
                newGame.raffle.chooseOne(selectedStudent);
                selectedCard.children[0].children[0].src="";
                selectedCard.children[0].style.backgroundImage = "url('"+selectedStudent.img+"')";
                if (newGame.raffle.selectedPeople % 2 == 0) {
                    writePair(newGame.raffle.selectedPair);
                    newGame.raffle.allPairs.push(newGame.raffle.selectedPair)
                    newGame.raffle.selectedPair = [];
                }
            if (newGame.raffle.selectedPeople == newGame.raffle.students.length) {
                allPairsDone("nothing")
            }
        } 
}
    
   
    function allPairsDone(interval) {
        clearInterval(interval);
        if (flag == "try") {
            printTheResumee(); 
        } else {
            printFinalResumee();
        }
        
    }

    function writePair(pair) {
        var divContainer = document.createElement("div");
        divContainer.className = "pair-container"
        pair.forEach( e => {
            var node = document.createElement("div");
            node.className = "student-container"
            var paragraph = document.createElement("p"); 
            paragraph.className = "student-name"         
            var textnode = document.createTextNode(e.name);
            var img = document.createElement('img');
            img.className = "student-img"
            img.src = e.img; 
            paragraph.appendChild(textnode)
            node.appendChild(img);        
            node.appendChild(paragraph);                            
            divContainer.appendChild(node)
        });
        document.getElementById("students-list").appendChild(divContainer);
    }

    function printTheResumee() {
        var html = "";
        document.getElementById("students-list").innerHTML = '<h2>Students Pairs</h2>'
        document.getElementById("students-list").style.display = "none";
        newGame.raffle.allPairs.forEach( (e,i) => {
            html += `<div class="pair-resumee-container">`
            html += `<div class="number-container">${i+1}</div>`
            html += `<div class="student-resumee-container">`
            html += `<img src="${e[0].img}" alt="" />`
            html += `<p>${e[0].name}</p>`
            html += `</div>`
            html += `<div class="student-resumee-container">`
            html += `<img src="${e[1].img}" alt="" />`
            html += `<p>${e[1].name}</p>`
            html += `</div>`
            html += `</div>`
        })
        html += `<div class="footer-div">Revisa que tu nombre esté incluido! Y si todo está correcto ---> <button id="start-after-try">LET'S MAKE IT REAL</button></div>`
        document.getElementById("try-resumee").style.display = "flex";
        document.getElementById("try-resumee").innerHTML = html;
        document.getElementById("start-after-try").onclick = function(){
            document.getElementById("try-resumee").style.display = "none";
            flag = "real"
            document.getElementById('board').innerHTML = "";
            newGame.raffle = new Raffle();
            document.getElementById("students-list").style.display = "inherit";
            drawCards();
            startClicks();
        };
    }

    function printFinalResumee() {
        var html = "";
        document.getElementById("students-list").innerHTML = '<h2>Students Pairs</h2>'
        document.getElementById("students-list").style.display = "none";
        newGame.raffle.allPairs.forEach( (e,i) => {
            html += `<div class="pair-resumee-container">`
            html += `<div class="number-container">${i+1}</div>`
            html += `<div class="student-resumee-container">`
            html += `<img src="${e[0].img}" alt="" />`
            html += `<p>${e[0].name}</p>`
            html += `</div>`
            html += `<div class="student-resumee-container">`
            html += `<img src="${e[1].img}" alt="" />`
            html += `<p>${e[1].name}</p>`
            html += `</div>`
            html += `</div>`
        });
        html += `<div></div>`
        document.getElementById("try-resumee").style.display = "flex";
        document.getElementById("try-resumee").innerHTML = html;
    }
}
