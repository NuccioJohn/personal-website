
let johnsBDay = new Date('July 15, 87 00:20:18 GMT+00:00');

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

document.querySelector("#age").innerHTML = calculateAge(johnsBDay);