function brickcalculator(floor){

    if(floor<=10)
    {
        var feet1 =floor*15;
        var brick=feet1*1000;
    }
    else if(floor>=11 && floor<=20)
    
    {
        var feet2=floor*12;
        var brick=feet2*1000;
    }
    else if(floor=>21)
    {
        var feet3=floor*10;
        var brick=feet3*1000;
    }
    
    return brick;
    }
    var result=brickcalculator(30);
    console.log(result);