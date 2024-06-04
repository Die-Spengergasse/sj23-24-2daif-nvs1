// State

const state = {
    fragen: fragen,
    punktzahl: 0,
    aktuelleFrageIndex: 0,
    aktuelleFrageAnzeige: 1
};

// get / set



// dom node refs
const quiz$ = document.getElementById("quiz");

// creation fns

function createFrageContainer(idx) {
    const rw = document.createElement("div");
    frageContainer.innerHTML = `<h6>(${aktuelleFrageAnzeige}/${fragen.length})</h6> <h5>${aktuelleFrage.frage}</h5>`;
}


// render

function render() {
    const index = state.aktuelleFrageIndex;
    const fragen = state.fragen;
    const aktuelleFrageAnzeige = state.aktuelleFrageAnzeige;

    quiz$.innerHTML = '';
    if (index >= fragen.length) {
        quiz$.innerHTML = `<h4>Dein Punktestand: ${punktzahl} von ${fragen.length}</h4>`;
        return;
    }

    const aktuelleFrage = fragen[index];
    const frageContainer = createFrageContainer(aktuelleFrageAnzeige);

    const optionenContainer = document.createElement("div");
    optionenContainer.classList.add("row", "mt-4");

    aktuelleFrage.optionen.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("col-6", "mb-3");

        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option", "btn", "btn-light", "bg-white", "btn-block", "border");
        optionButton.addEventListener("click", () => handleAnswer(option, aktuelleFrage.antwort));

        optionElement.appendChild(optionButton);
        optionenContainer.appendChild(optionElement);
    });

    frageContainer.appendChild(optionenContainer);
    quiz$.appendChild(frageContainer);
}

function handleAnswer(ausgewählteOption, richtigeAntwort) {
    if (ausgewählteOption === richtigeAntwort) {
        punktzahl++;
    }

    renderQuestion(++aktuelleFrageIndex);
    renderQuestion(++aktuelleFrageAnzeige);

}

renderQuestion(aktuelleFrageIndex);