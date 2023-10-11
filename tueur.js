let killer = {
    name: 'Jason',
    hp: 100
}

let characters = []
let charactersDead = []

let names = [
    'Phillipe',
    'Michel',
    'Anthony',
    'Maxence', 
    'Jeff',
    'Thomas',
    'Guillaume',
    'Nicolas',
    'Alexis',
    'Olivier',
    'Remi'
]

let caracteristiques = [
    'nerd',
    'blond',
    'sportif',
    'beau gosse',
    'débile'
]

class Characthers{
    constructor(name, caracteristique, deadLuck, hitLuck, criticalLuck){
        this.name = name;
        this.caracteristique = caracteristique;
        this.deadLuck = deadLuck;
        this.hitLuck = hitLuck;
        this.criticalLuck = criticalLuck;
        this.living = true
    }

}

function getRandomInArray(array){
    let randomNumber = getRandomInt(array.length)
    let randomChoice = array[randomNumber]
    //delete the name to avoid having two identical characters
    array.splice(randomNumber, 1)
    return randomChoice
}

function randomLuckStat(){
    let deadLuck = (Math.round(Math.random()*10))/10;
    let hitLuck = (Math.round(Math.random() * (1-deadLuck) *10))/10
    let criticalLuck = (Math.round((1 - (deadLuck + hitLuck))*10))/10;
    let luck = [
        deadLuck,
        hitLuck,
        criticalLuck]
    return luck
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createCharacters(charactersNumber){
    for (let i=0; i<charactersNumber; i++){
        let luck = randomLuckStat();
        characters.push(new Characthers(
            getRandomInArray(names), 
            getRandomInArray(caracteristiques), 
            luck[0], 
            luck[1], 
            luck[2]
            ))
    }
}


function playGame(){
    createCharacters(5);
    let charactersAlive = characters.length;

    while (killer.hp >= 0 && charactersAlive > 0){

        for (let i = 0; i < characters.length; i++){
            const randomNumber = Math.random();

            if (characters[i].living === true){
                if (randomNumber <= characters[i].deadLuck){
                    console.log(`${characters[i].name} le ${characters[i].caracteristique} est mort`)
                    characters[i].living = false
                    charactersDead.push(characters[i].name)
                    charactersAlive --
                } else if (randomNumber <= characters[i].deadLuck + characters[i].hitLuck){
                    killer.hp -= 10;
                    console.log(`${killer.name} touché par ${characters[i].name} le ${characters[i].caracteristique}, il ne lui reste que ${killer.hp} hp . `);
                } else {
                    killer.hp -= 15
                    console.log(`${killer.name} touché, il lui reste ${killer.hp} hp et ${characters[i].name} le ${characters[i].caracteristique} est mort`);
                    characters[i].living = false
                    charactersDead.push(characters[i].name)
                    charactersAlive --
                }
            } 
        }
    }

    if (killer.hp > 0){
        console.log(`${killer.name} le tueur a gagné il lui restait ${killer.hp} points de vie`)
    } else {
        console.log(`${killer.name} est mort mais il a tué ${charactersDead} avant de mourir`)
    }
}
        


// playGame()