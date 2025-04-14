function openForm() { // Open form to create set
    document.getElementById("create-set-popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeForm() {
    document.getElementById("create-set-popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function openCreate() { // Open form to create cards in a set
    document.getElementById("create-card-popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeCreate() {
    document.getElementById("create-card-popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


let setarr = [];
let temparr = [];
let currentID = null;
let currentSet = null;
let currentCard = 0;

document.getElementById("set-create").addEventListener('click', function(event) {
    event.preventDefault();

    temparr = []

    let setName = document.getElementById("create-name").value; // Name field in create set
    let setDesc = document.getElementById("create-desc").value; // description field in create set

    setarr.push({
        id: setarr.length,
        name: setName,
        description: setDesc,
        cards: []
    });

    temparr.push({
        id: setarr.length,
        name: setName,
        description: setDesc,
        cards: []
    });



    displaySets();
})

function displaySets() {
    const setDisp = document.querySelector(".display-current-cards"); // Parent div of content
    const currentCardContainer = document.getElementById("current-cards"); // Parent div of content div
    for (let i = 0; i < temparr.length; i++) { // For each in temparr

        let copyDiv = setDisp.cloneNode(true); // Copy of empty Parent div of content

        copyDiv.style.display = "flex"; // If there content the display is flex
        copyDiv.querySelector(".set-name").textContent = temparr[i].name; // Current name in temparr is set to name
        copyDiv.querySelector(".set-desc").textContent = temparr[i].description; // Current desc in temparr is set to description


        let addButton = copyDiv.querySelector("#add-cards");
        addButton.setAttribute("data-index", temparr[i].id); // Adding the data index based on the id in the array
        addButton.removeAttribute("id"); // Removes the reduntant ID from the button

        copyDiv.addEventListener("click", function(event) {
            if (event.target == event.currentTarget) { // If clicked Div is the current target
                if (!event.target.classList.contains(".blue-green-button")) { // As long as the button is not what is clicked
                    // console.log("contains")
                    let button = event.currentTarget.querySelector(".blue-green-button");
                    let dataIndex = Number(button.getAttribute("data-index")); // The number data-index
                    currentSet = setarr[dataIndex-1]; // Set the global currentSet varibale to the actual index in the setarr 
                    currentCard = 0; // Current card in card array found in setarr dictionary is first 0

                    // console.log(dataIndex)
                    // console.log(setarr)
                    console.log(setarr[dataIndex-1].cards)
                    if (setarr[dataIndex-1].cards.length > 0) { 
                        document.getElementById("displayed-set").style.display = "block";
                        document.getElementById("displayed-set-question").textContent = setarr[dataIndex-1].cards[currentCard].question;
                        document.getElementById("displayed-set-answer").textContent = setarr[dataIndex-1].cards[currentCard].answer;
                    } else {
                        alert("This set does not contain cards yet!")
                    }

                }
            }
        })


        currentCardContainer.appendChild(copyDiv);
    }
}

document.querySelector("#card-control .blue-green-button").addEventListener("click", function(event) { //Each time next card is clicked, add one to current index in list of cards

    if (currentSet.cards.length > 0 && currentSet && currentSet.cards) {
        document.getElementById("displayed-set-answer").style.display = "none";
        currentCard = (currentCard + 1) % currentSet.cards.length; // Loop to first card if end is reached
        document.getElementById("displayed-set-question").textContent = currentSet.cards[currentCard].question;
        document.getElementById("displayed-set-answer").textContent = currentSet.cards[currentCard].answer;
    }

})

document.getElementById("back-button").addEventListener("click", function(event){ // Back button, minus 1 from current index.

    if (currentSet.cards.length > 0 && currentSet && currentSet.cards) {
        document.getElementById("displayed-set-answer").style.display = "none";
        currentCard = (currentCard - 1 + currentSet.cards.length) % currentSet.cards.length; // Loops to end if at first card.
        document.getElementById("displayed-set-question").textContent = currentSet.cards[currentCard].question;
        document.getElementById("displayed-set-answer").textContent = currentSet.cards[currentCard].answer;
    }

})

document.getElementById("show-answer").addEventListener("click", function(event){ // Sets the answer to block if clicked.
    if (currentSet && currentSet.cards && currentSet.cards.length > 0) {
        document.getElementById("displayed-set-answer").style.display = "block";
    } else {
        alert("This set does not contain cards yet!")
    }
    
})

document.getElementById("current-cards").addEventListener("click", function(event) // sets the current id to index which is the data-index found in button for reference purposes.
 {
    if (event.target.matches(".blue-green-button")) {
        event.preventDefault();
        let index = event.target.getAttribute("data-index");

        currentID = Number(index);

        event.preventDefault();
        
        openCreate();

    }
});

document.getElementById("card-create").addEventListener("click", function(event) { // Makes sure the cards are added to correct array in the setarr
    event.preventDefault();

    let questionCreate = document.getElementById("add-question").value;
    let answerCreate = document.getElementById("add-answer").value;

    for (let i = 0; i < setarr.length; i++) {
        if (setarr[i].id == currentID-1) {
            setarr[i].cards.push({
                question: questionCreate,
                answer: answerCreate
            });
            console.log("Card added:", setarr[i].cards);
        }
    }
    closeCreate();

})
