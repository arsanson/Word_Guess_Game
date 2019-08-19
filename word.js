const letter = require("./letter")

class Word {
    constructor(word){
        this.word = word
        this.wordArr =[],
        this.wordArrPop = function(){
            for (let i=0;i<this.word.length;i++){
                this.wordArr.push(new letter(this.word[i]))
            }
        }
        this.wordDisplay = function(){
            string = ""
            for (let i=0;i<this.wordArr.length;i++){
                string.push(this.wordArr[i].letterDisplay)
            }
            return string
        },
        this.wordGuess = function(userguess){
            this.wordArr.forEach(function(element){
                element.letterGuess(userguess)
            })}

    }
}

module.exports = Word

//      Tests
/*
testword1 = new Word("Hello")
testword1.wordArrPop()
console.log(testword1)
*/