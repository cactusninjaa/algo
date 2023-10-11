let personnage = {
    name: 'Jhon',
    mentalHealthPoint: 10
  };
  
let music = [
    'Anissa - Wejdene',
    'Flashback - Gazo',
    'Rodé - So La Lune',
    'Goulag - Kaaris',
    'Matuidi Charo - Niska'
];
  
let trajet = {
    radio: '',
    redLight: 30,
    taxiChange: 0
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function chooseMusic() {
    let randomNuber = getRandomInt(5);
    trajet.radio = music[randomNuber];
    trajet.taxiChange += 1;
};

function verifyMusic() {
    if (trajet.radio === 'Anissa - Wejdene') personnage.mentalHealthPoint -= 1;
};

function checkLife() {
    return personnage.mentalHealthPoint != 0;
};

function winCheck() {
    switch (checkLife()){
        case true :
        console.log(`Bien joué vous avez gagné avec ${personnage.mentalHealthPoint} point de vie !`)
        break
        case false : 
        console.log(`Dommage vous êtes mort au bout de ${trajet.taxiChange} changements de taxis !`)
        break
        default :
        console.log('error')
    }
};

function playGame() {
    for (trajet.redLight; trajet.redLight != 0; trajet.redLight --) {
        chooseMusic();
        verifyMusic();
        if (!checkLife()) {
        console.log('explosion');
        break;
        };
    };
    winCheck();
}; 
  
//playGame()
  
  
  
  