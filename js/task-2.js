export default function task2(){
    const str = document.querySelector('[name="task2String"]').value;
    const pricePerWord = document.querySelector('[name="task2Price"]').value;
    console.log('Стоимость гравировки: ' + calculateEngravingPrice(str, pricePerWord));
}

const calculateEngravingPrice = function(message, pricePerWord){
    pricePerWord = Number.parseFloat(pricePerWord);
    if (!pricePerWord || isNaN(pricePerWord)){
        return 'Сотимость слова должна быть числом, > 0';
    }
    if (!message) {
        return 'Что гравировать?';
    }
    let arr = message.split(' ');
    return arr.length * pricePerWord
}