class Letter {
    constructor(val){
        this.val = val || " ",
        this.isGuessed = false,
        this.displayfunc = function(){
            if (this.isGuessed){
                return this.val;
            }else {
                return " _ ";
            }
        },
        this.guessFun = function(userguess){
            userguess = userguess.toLowerCase()
            lowerVal = this.val.toLowerCase()
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
letterT.guessFun("v")
letterT.guessFun("T")
letterT.guessFun("t")
letterT.guessFun(letterT.val)
*/