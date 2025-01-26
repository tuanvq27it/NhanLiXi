let prizes10 = [];

function showPrize(prize, index) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('popup-message');

    const lixi = document.getElementById('lixi' + index);

    lixi.style.visibility = 'hidden';

    message.textContent = `Chúc mừng bạn nhận được ${prize}!`;
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function returnToIndex() {
    window.location.href = 'index.html';
}

function chontieplixi(){
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

function gotoChooseLixi() {
    const popup = document.getElementById('popup-setup');
    popup.style.display = 'none';
    overlay.style.display = 'none';
    const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

    let arrayPrize = [];

    for(let i = 0; i < array.length; i++){
        let length10 = document.getElementById('gia' + array[i]);
        let array10 = createArray(prizes10,length10.value, array[i] + ',000đ');
        if(Number(length10.value) > 0){
            arrayPrize = [...arrayPrize, ...array10]
            array10 = [];
            prizes10 = [];
        }
    }

    arrayPrize.sort(() => Math.random() - 0.5);

    const container = document.getElementById('lixi-container');

    // Tạo ô lì xì
    arrayPrize.forEach((_, index) => {
        const button = document.createElement('button');
        button.className = 'lixi';
        button.id = 'lixi' + (index + 1)
        button.textContent = 'Lì Xì ' + (index + 1);
        button.onclick = () => showPrize(arrayPrize[index], (index + 1));
        container.appendChild(button);
    });
}

function createArray(array, length, value) {
    for(let i = 0; i < length; i++){
        array.push(value)
    }
    return array;
}