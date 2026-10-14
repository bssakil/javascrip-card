let date = new Date();
//console.log(date);
document.write(date);

let day = date.getDay();
//console.log(day);
document.write('  '+ day);

let month = date.getMonth();
//console.log(month);
document.write( '-' +month);

let updateDate = date.getDate();
//console.log(updateDate);
document.write('-' +updateDate);


let year = date.getFullYear();
//console.log(year);
document.write(' ' + year);

let time = date.getHours();
//console.log(time);
document.write(' ' + time);

let minutes = date.getMinutes();
//console.log(minutes);
document.write(' ' + minutes);

let sec = date.getSeconds();
//console.log(sec);
document.write(' ' + sec);

function getAge(value){
    let arrOne = value.toString().split(' ')
}