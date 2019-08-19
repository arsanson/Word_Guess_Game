class Letter {
    constructor(val){
        this.letterletterTal = val || " ",
        this.isGuessed = false,
        this.letterDisplay = function(){
            if (this.isGuessed){
                return this.val;
            }else {
                return "_";
            }
        },
        this.letterGuess = function(userguess){
            userguess = userguess.toLowerCase()
            lowerVal = this.letterVal.toLowerCase()
            if (lowerVal === userguess){
                this.isGuessed = true;
                console.log("you got it right!")
            } else{
                console.log("wrong guess! Your guess was "+userguess+" but the answer was "+val)
            }
        }
    }
}
module.exports = Letter

/*     Testing
letterT = new Letter("t")
console.log(letterT)
letterT.letterGuess("v")
letterT.letterGuess("T")
letterT.letterGuess("t")
letterT.letterGuess(letterT.val)
*/