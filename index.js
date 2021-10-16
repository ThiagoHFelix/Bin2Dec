
const screen = document.getElementById('screen');
const mainInput = document.getElementById('main-input');    
const acceptNumbers = [0,1];

const convertBin2Dec = value => {

    let total = 0;
    const splitedValue = [...value];
    splitedValue.reverse();

    splitedValue.forEach((value,expoent) => {
        if(parseInt(value) === 0) return
        total += Math.pow(2,parseInt(expoent));
    })

    screen.innerHTML = total;
}
const handleInputChanges = e => !acceptNumbers.includes(parseInt(e.key)) ? e.preventDefault() : '';

mainInput.onkeypress = handleInputChanges;    
mainInput.onkeyup = e => convertBin2Dec(e.target.value);    

