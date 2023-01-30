// элемент для отрисовки 
let d = document.querySelector('div');


let days = 11; // Дней в периоде
let evenDayAmount = 200; // Количество протеина в чётные дни
let oddDayAmount = 100; // Количество протеина в нечётные дни
let total = 0; // Общее количество протеина


for (let day = 1; day <= days; day++) {
if (day % 2 === 0) { total += evenDayAmount}
else {total += oddDayAmount};
}




// вывод конечного значения на стрницу
  d.innerHTML = total;