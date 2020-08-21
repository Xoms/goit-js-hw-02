
export function task1Handler(){
    const str = document.querySelector("[name=task1String]").value;
    console.log(str);
    const arr = str.split(', ');
    console.log (arr);
    logItems(arr);
}

const logItems = function (array){
    for (let i = 0; i < array.length; i++){
        console.log(`${i+1} - ${array[i]}`);
    }
}