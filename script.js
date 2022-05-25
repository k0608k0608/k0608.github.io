var pole = ["img/Stone.png", " img/Scissors.png", "img/Paper.png"];
var comphod = 0;
var polz = 0;//надо ввести переменную для хранения и пользователя тоже

function Choise(number) {
    hod.src = pole[number];
    comphod = Math.floor(Math.random() * 3);
    hodC.src = pole[comphod];
    polz = number;
   check(number);
}
function check(number) {
    if (polz == comphod) {
        SLISH.innerHTML = "Ничья!";
    }
    interval = setInterval(1000, check);


    if ((polz == 0) && (comphod == 1)) {
        SLISH.innerHTML = "Игрок выиграл!";
    }
    if ((polz == 1) && (comphod == 2)) {
        SLISH.innerHTML = "Игрок выиграл!";
    }
    if ((polz == 2) && (comphod == 0)) {
        SLISH.innerHTML = "Игрок выиграл!";
    }
    if ((polz == 1) && (comphod == 0)) {
        SLISH.innerHTML = "Компьютер выиграл!";
    }
    if ((polz == 2) && (comphod == 1)) {
        SLISH.innerHTML = "Компьютер выиграл!";
    }
    if ((polz == 0) && (comphod == 2)) {
        SLISH.innerHTML = "Компьютер выиграл!";
    }
}
      //0 - камень, 1 - ножницы, 2 - бумага
//Щубадам парампам пам ИИИИИИИИИИИИИИ кря!