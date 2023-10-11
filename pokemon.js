/* -------------                  -------------*/
/* ------------- Deuxième version -------------*/
/* -------------                  -------------*/

class Pokemon{
    constructor (name, attack, defense, hp, luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    attackEnnemy(pokemon){
        if (this.isLucky()){
            let damage = this.attack - pokemon.defense
            //avoid attacks that would increase the life of the pokemon
            if (damage > 0){
                pokemon.hp -= damage
                console.log(`${this.name} a infligé ${damage} à ${pokemon.name}, il ne lui reste que ${pokemon.hp}hp.`)
            } else {
                console.log(`${this.name} est trop faible pour attaquer ${this.name}`)
            }

        } else {
            console.log(`${this.name} a raté son attaque`)
        }
    }

    isLucky(){
        return this.luck > Math.random()
    }
}

function playGame(){
    let pikachu = new Pokemon('Pikachu', 50, 20, 100, 0.6);
    let salameche = new Pokemon('Salamèche', 60, 10, 110, 0.7);


    while (pikachu.hp > 0 && salameche.hp > 0){

        pikachu.attackEnnemy(salameche)

        if(salameche.hp<=0){
            console.log(`${salameche.name} est mort`)
            break
        }

        salameche.attackEnnemy(pikachu)
        if(pikachu.hp<=0){
            console.log(`${pikachu.name} est mort`)
            break
        }
    }
}

//playGame()


/* -------------                  -------------*/
/* ------------- Première version -------------*/
/* -------------                  -------------*/


// class Pokemon {
//     constructor (name, attack, defense, hp, luck){
//         this.name = name;
//         this.attack = attack;
//         this.defense = defense;
//         this.hp = hp;
//         this.luck = luck;
//     }

//     attackPokemon (adversaireDefense) {
//         return this.attack - adversaireDefense
//     }

//     isLucky (){
//         return (this.luck-1 === getRandomInt(this.luck)) 
//     }
// }
    

// let pikachu = new Pokemon('Pikachu', 50, 20, 100, 3);
// let salameche = new Pokemon('Salamèche', 60, 10, 110, 2);

// while (pikachu.hp > 0 || salameche > 0){
//     if (!salameche.isLucky()) {
//         salameche.hp -= pikachu.attackPokemon(salameche.defense)
//         console.log(`Salamèche a ${salameche.hp} hp`)

//         if (salameche.hp < 0) {
//             console.log('Salamèche est dead')
//         break
//         }
//     } else {
//         console.log('Salamèche a esquivé')
//     }

//     if (!pikachu.isLucky()){
//         pikachu.hp -= salameche.attackPokemon(pikachu.defense)
//         console.log(`Pikachu a ${pikachu.hp} hp`)
//         if (pikachu.hp < 0) {
//             console.log('Pikachu est dead')
//             break
//         }
//     } else {
//         console.log('Pikachu a esquivé')
//     }
    
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

