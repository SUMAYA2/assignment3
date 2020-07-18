function woodcalculator(chair,table,bed){
    var chaircalculation=chair*1;
    var tablecalculation=table*3;
    var bedcalculation=bed*5;
        var totalwood=chaircalculation+tablecalculation+bedcalculation;
        return totalwood;
    }
    var calculation=woodcalculator(2,1,3);
    console.log(calculation);