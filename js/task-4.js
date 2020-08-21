export default function task4(){        

    const str = document.querySelector('[name="task4String"]').value;
    
    console.log(formatString(str));
}

const formatString = function(str){
    let resultStr  = str;
    if (str.length > 40) {
        resultStr = str.slice(0, 39) + '...';
    } 
    return resultStr
}