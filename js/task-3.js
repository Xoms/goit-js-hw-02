export default function task3(){
    const str = document.querySelector('[name="task3String"]').value;
    console.log(findLongestWord(str));
}

const findLongestWord = function(string){
    let arr = string.split(' ');
    let longestWord = '';
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > longestWord.length){
            longestWord = arr[i];
        }
    }
    return longestWord;
}