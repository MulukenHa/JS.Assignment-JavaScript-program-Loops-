
//task1
function IsLeapYear(year){
    if (year % 4 == 0) {
        return true
    }
    else if( year % 100 == 0 && year % 400 == 0){
        return True
    }
    return false
}




//task2
function IsSunday(){
    for (var year = 2014; year <= 2050; year++) {
        var d = new Date(year, 0, 1);
        if (d.getDay() === 0) {
            return true;
        }
    }
    return false
}


// task3
for (var i=0; i<=15; i++){
    if (i % 2 == 0){
        console.log("Even Number.")
    }
    else{
        console.log("Odd Number.")
    }
}



//task4
function IsPalindrom(str){
    l=0
    r=str.length-1
    while (l <= r){
        if (str[l] == str[r]){
            l += 1
            r -= 1
        }
        else{
            return false
        }
    }
    return true
}

