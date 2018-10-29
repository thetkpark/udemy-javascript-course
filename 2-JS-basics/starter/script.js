var value ={
    bills: [124,48,268,180,42],
    tips: [],
    final: [],
    calcTip: function(){
        var i;
        for(i=0;i<this.bills.length;i++){
        if(this.bills[i]<50) {
            this.tips[i]=0.2*this.bills[i];
            this.final[i]=this.tips[i]+this.bills[i];
        }
        else if(this.bills[i] > 50 && this.bills[i] < 200){
            this.tips[i]=0.15*this.bills[i];
            this.final[i]=this.tips[i]+this.bills[i];
        }
        else if(this.bills[i] > 200){
            this.tips[i]=0.1*this.bills[i];
            this.final[i]=this.tips[i]+this.bills[i];
        }
    }
}

}
value.calcTip();
console.log(value.tips,value.final);





