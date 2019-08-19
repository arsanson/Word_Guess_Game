const inquirer = require("inquirer")
const word = require("./word")
const randomWords = require("random-words")

randomWord = randomWords()
userGuessNum = 0
formattedWord = new word(randomWord)
formattedWord.wordArrPop()
formattedWord.wordDisplay()


function gameRound (){
    inquirer.prompt(

    ).then(function(){
        
    })
}


console.log(randomWord)
