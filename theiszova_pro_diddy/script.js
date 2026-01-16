function choosePath(choice) {  
    const storyText = document.getElementById("story-text");  
    const sceneImage = document.getElementById("scene-image");  

    if (choice === 'accept') {  
        storyText.innerHTML = "P. Diddy se rozhodl pro zapeklitou spolupráci. Nyní se musí rozhodnout: Pomůže při přepravě nelegálního zboží nebo se ukryje?";  
        setSceneImage('images/diddy2.jpg');  
        displayChoices(['Přepravit zboží', 'Ukrýt se']);  
    } else if (choice === 'reject') {  
        storyText.innerHTML = "P. Diddy odmítá a rozhodne se jít na veřejné prohlášení. Co by měl říct veřejnosti?";  
        setSceneImage('images/diddy3.jpg');  
        displayChoices(['Omluvit se', 'Vysvětlit situaci']);  
    }  
}  

function setSceneImage(src) {  
    const sceneImage = document.getElementById("scene-image");  
    sceneImage.src = src;  
}  

function displayChoices(choices) {  
    const choicesDiv = document.getElementById("choices");  
    choicesDiv.innerHTML = "";   

    choices.forEach((choice) => {  
        const button = document.createElement("button");  
        
        if (button.classList.contains("btn-outline-danger")) {  
            button.className = "btn btn-danger btn-lg mx-2";  
        } else {  
            button.className = "btn btn-danger btn-lg mx-2";  
        }  
        button.innerText = choice;  
        button.onclick = () => handleChoice(choice);  
        choicesDiv.appendChild(button);  
    });  
}  

function handleChoice(choice) {  
    const storyText = document.getElementById("story-text");  
    const sceneImage = document.getElementById("scene-image");  

    if (choice === 'Přepravit zboží') {  
        storyText.innerHTML = "P. Diddy se pustil do riskantní přepravy. Na cestě ho chytila policie!";  
        setSceneImage('images/diddy4.jpg');  
        displayChoices(['Uprchnout', 'Postřílet cajty']);  
    } else if (choice === 'Ukrýt se') {  
        storyText.innerHTML = "P. Diddy se úspěšně ukryl. Ale co teď udělat?";  
        setSceneImage('images/diddy5.jpg');  
        displayChoices(['Zavolat Jay-Z', 'Vyhledat únikový plán']);  
    }  

    else if (choice === 'Omluvit se') {  
        storyText.innerHTML = "P. Diddy se veřejně omluvil a lidé ho začali zase podporovat. Ale co dál?";  
        setSceneImage('images/diddy6.jpg');  
        displayChoices(['Investovat do charity', 'Zůstat v anonymitě']);  
    } else if (choice === 'Vysvětlit situaci') {  
        storyText.innerHTML = "Diddy se snažil vysvětlit svůj pohled na situaci. Jak to dopadne?";  
        setSceneImage('images/diddy7.jpg');  
        displayChoices(['Získat podporu', 'Ztratit fanoušky']);  
    }  

    else if (choice === 'Uprchnout') {  
        storyText.innerHTML = "P. Diddy se mu podařilo uniknout, ale riskoval všechno.";  
        setSceneImage('images/diddy8.jpg');  
        displayChoices(['Změnit identitu', 'Vrátit se do normálního života']);  
    } else if (choice === 'Postřílet cajty') {  
        storyText.innerHTML = "P. Diddy zastavil policii a vysvětlil nelegálnost.";  
        setSceneImage('images/diddy9.jpg');  
        displayChoices(['Hlídat situaci', 'Hledat východisko']);  
    }  

    else if (choice === 'Zavolat Jay-Z') {  
        storyText.innerHTML = "P. Diddy se spojuje s Jay-Z a plánují útěk.";  
        setSceneImage('images/diddy10.jpg');
        displayChoices(['Uprchnout společně', 'Zůstat a čelit následkům']);  
    } else if (choice === 'Vyhledat únikový plán') {  
        storyText.innerHTML = "P. Diddy našel plán, jak uniknout z města.";  
        setSceneImage('images/diddy11.jpg');
        displayChoices(['Uprchnout v noci', 'Zůstat a riskovat']);  
    }  

    else if (choice === 'Investovat do charity') {  
        storyText.innerHTML = "P. Diddy získal reputaci a pomohl mnoha lidem! (VÍTĚZSTVÍ)";  
        setSceneImage('images/diddy12.jpg'); 
        showWinModal();  
    } else if (choice === 'Zůstat v anonymitě') {  
        storyText.innerHTML = "P. Diddy ztratil svou identitu, ale žije v klidu. (NEUTRALITA)";  
        setSceneImage('images/diddy13.jpg'); 
        showLoseModal();  
    }  

    else if (choice === 'Získat podporu') {  
        storyText.innerHTML = "Fanoušci se sešli a Diddy se stal hrdinou! (VÍTĚZSTVÍ)";  
        setSceneImage('images/diddy14.jpg');  
        showWinModal();  
    } else if (choice === 'Ztratit fanoušky') {  
        storyText.innerHTML = "P. Diddy byl opuštěn, umřel sám a v zapomnění. (NEÚSPĚCH)";  
        setSceneImage('images/diddy15.jpg'); 
        showLoseModal();  
    }  

    else if (choice === 'Změnit identitu') {  
        storyText.innerHTML = "P. Diddy změnil svou identitu a žije v utajení, ale s výčitkami. (NEÚSPĚCH)";  
        setSceneImage('images/diddy16.jpg');  
        showLoseModal();  
    } else if (choice === 'Vrátit se do normálního života') {  
        storyText.innerHTML = "P. Diddy se snaží vrátit k normálnímu životu, ale přežití je těžké. (NEÚSPĚCH)";  
        setSceneImage('images/diddy17.jpg');  
        showLoseModal();  
    }  

    else if (choice === 'Hlídat situaci') {  
        storyText.innerHTML = "P. Diddy se stal tajným agentem a zastavil nelegální aktivity s policejní pomocí! (VÍTĚZSTVÍ)";  
        setSceneImage('images/diddy18.jpg'); 
        showWinModal();  
    } else if (choice === 'Hledat východisko') {  
        storyText.innerHTML = "P. Diddy narazil na nebezpečné situace, které ho potopily. (NEÚSPĚCH)";  
        setSceneImage('images/diddy19.jpg'); 
        showLoseModal();  
    }  

    else if (choice === 'Uprchnout společně') {  
        storyText.innerHTML = "Společně se přáteli dostali pryč a začali nový život. (VÍTĚZSTVÍ)";  
        setSceneImage('images/diddy20.jpg'); 
        showWinModal();  
    } else if (choice === 'Zůstat a čelit následkům') {  
        storyText.innerHTML = "P. Diddy čelil následkům, ale zůstal silný v těžkých časech. (NEUTRALITA)";  
        setSceneImage('images/diddy21.jpg'); 
        showLoseModal();  
    }  

    else if (choice === 'Uprchnout v noci') {  
        storyText.innerHTML = "P. Diddy uspěl a žije v bezpečí. (VÍTĚZSTVÍ)";  
        setSceneImage('images/diddy22.jpg');   
        showWinModal();  
    } else if (choice === 'Zůstat a riskovat') {  
        storyText.innerHTML = "P. Diddy se dostal do potíží a byl chycen. (NEÚSPĚCH)";  
        setSceneImage('images/diddy23.jpg');  
        showLoseModal();  
    }  
}  

function displayEndChoices() {  
    const choicesDiv = document.getElementById("choices");  
    choicesDiv.innerHTML = `  
        <button class="btn btn-danger btn-lg mx-2" onclick="restartGame()">Hru restartovat</button>  
    `;  
}  

function restartGame() {  
    const storyText = document.getElementById("story-text");  
    const sceneImage = document.getElementById("scene-image");  
    storyText.innerHTML = "Vítejte! P. Diddy dostává nabídku na riskantní spolupráci...";  
    sceneImage.src = 'images/diddy.jpg';  
    displayChoices(['Přijmout nabídku', 'Odmítnout nabídku']);  
}  

function showLoseModal() {  
    const loseModal = new bootstrap.Modal(document.getElementById('loseModal'));  
    loseModal.show();  
}  

function showWinModal() {  
    const winModal = new bootstrap.Modal(document.getElementById('winModal'));  
    winModal.show();  
}  

window.onload = () => {  
    const sceneImage = document.getElementById("scene-image");  
    sceneImage.src = 'images/diddy.jpg';  
};