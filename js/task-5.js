export default function task5(){
    const str = document.querySelector('[name="task5String"]').value;

    console.log(checkForSpam(str));
    
}

const checkForSpam = function(msg){
    const reSpam = /spam/i;
    const reSale = /sale/i;
    return (reSpam.test(msg) || reSale.test(msg))
}