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
            if (this.val === userguess.toLowerCase){
                this.isGuessed = true;
            } else{
                console.log("wrong guess!")
            }
        }
    }
}