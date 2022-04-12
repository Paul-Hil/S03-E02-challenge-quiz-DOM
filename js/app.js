function askQuestion(index) {
    let reponseUser = window.prompt(questions[index]);
    console.log(reponseUser)
    let isCorrect = checkReponse(index, reponseUser);
    addRreponseTodom(index, isCorrect)
}

function checkReponse(index, reponseUser) {
    if(reponseUser == responses[index]) {
        countTrue += 1;
        console.log("correct");
        return true;
    }
    else {
        countFalse += 1;
        console.log("faux")
        return false;
    }
}

function addRreponseTodom(index, isCorrect) {
    if(isCorrect === true) {
        // Autre solution correction
        // J'utilise ici le chevron pour m'assurer que <ul> est enfant directe de #right
        let currentPart = document.querySelector( "#right > ul" );
        // currentPart.innerHTML += "<li>" + questions[index] + "</li>";

        // Première solution
        // let currentPart = document.querySelector('.reptrue'+index);
        // currentPart.textContent = questions[index];

        // Solution correction bonus top tier 20/20
        let newListItem = document.createElement( "li" );
        newListItem.textContent = questions[index];
        currentPart.appendChild( newListItem );
        


    }
    else {
        // let currentPart = document.querySelector('.repfalse'+index);
        // currentPart.textContent = questions[index];

        let currentPart = document.querySelector( "#wrong > ul" );
        let newListItem = document.createElement( "li" );

        newListItem.textContent = questions[index];

        currentPart.appendChild(newListItem);

    };
}

function playQuizz() {
    countTrue = 0;
    countFalse = 0;
    for(let index = 0; index < questions.length; index++) {
        console.log(index);
        askQuestion(index);
    }
}

playQuizz()

