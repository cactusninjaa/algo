// let a = 1;
// let b = 4;
// let c = 6;

// if (a === b) {
//     console.log("c'est égal")
// } 

// if (c > b && (a+c) != 3) {
//     console.log("ok")
// } else {
//     console.log("raté")
// }

// let a = 'Nicoas est gentil';

// switch (a) {
//     case 3 : 
//         console.log("3")
//         break
//     case 4 :
//         console.log("4")
//         break
//     case "Nicolas est gentil" :
//         console.log("bg")
//         break
//     default :
//         console.log("default")

// }   

// let a = 4;
// let b = 4;
// let c = 3;

// switch (a) {
//     case b:
//         console.log('égal à b')
//         break
//     case c:
//         console.log('égal à c')
//         break
//     default:
//         console.log('default')
// }

// for (let i = 0; i < 5; i++){
//     console.log('mdr')
// }

// while (a != 0) {
//     console.log(a)
//     a --
// }

// let a = 3;

// while(a < 9) {
//     a++

//     if (a === 8) break
//     if (a === 7) continue

//     console.log(a)

// }


// let a = "jean";
// let b = "jean";
// let result = name(a, b);

// function name(name1, name2) {
//     return name1 === name2
// }   

// console.log(result)

// let names = [];
// names.push("Vincent", "Paul", "Arthur")

// names.forEach(name => {
//     name += " va à la pêche"
//     console.log(name)
// })


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

// class Student {
//     constructor(name, html, css, javascript, php) {
//         this.name = name
//         this.html = html
//         this.css = css
//         this.javascript = javascript
//         this.php = php
//     }

//     getPHPLevel() {
//         console.log(`${this.name} est de niveau ${this.php} en php`)
//     }
// }

// let grosThony = new Student('Grosthony', 1, 1, 1, 1);
// let Nicolas = new Student('Nicolas', 5, 5, 5, 5);

// grosThony.getPHPLevel()


class Pokemon{
    constructor (name, attack, defense, hp, luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    attack(pokemon){
        if (this.isLucky()){
            pokemon.hp -= poke

        } else {
            console.log('raté')
        }
    }

    isLucky(){
        return this.luck > Math.random()
    }
}
