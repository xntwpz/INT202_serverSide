// divisible 4 
// but years divisible by 100 are not leap years,
// years divisible by 400 are leap years.

const isLeapYear = year => {
    if(0 == year%400) return true;
    if(0 == year%100) return false;
    if(0 == year%4) return true;
    return false;
}

console.log(isLeapYear(1616))