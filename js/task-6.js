export default function task6(){
    let num = prompt("Введите число:");
    console.log(num);
    let total = [];
    while (num !== null) {
        console.log("Вы ввели: " + num);
        if (!isNaN(num)) {
            total.push(Number.parseInt(num));
            console.log (total);
            num = prompt("Введите число:");
        } else {
            console.log("Введите число");
            num = prompt("Введите число:");
        }
    }
    let sum = total.reduce((acc, cur) => acc + cur)
    alert(`Общая сумма чисел = ${sum}`);
}