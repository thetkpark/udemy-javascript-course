var bill = {
    finalCostCal: function (tip){
        if(tip < 50) {
            return tip + (tip*20/100);
        }
        else if(tip > 50 && tip < 200){
            return tip + (tip*15/100);
        }
        else if(tip > 200){
            return tip + (tip*10/100);
        }
    },
    cost: [124,48,268,180,42],
}
var totalCost = [];
for(var i=0;i<bill.cost.length;i++){
    totalCost[i] = bill.finalCostCal(bill.cost[i]);
}

console.log(totalCost);

