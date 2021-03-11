// const temporaryHeading = document.querySelector('h1');
// temporaryHeading.textContent = 'MONIKA ELLMENREICH';

// document.querySelector('img').onclick = function() {
//     alert('owo');
// }

// let clickOnLalafell = document.querySelector('img')

// clickOnLalafell.onclick = function() {
//     alert('owo');
// }

// function OWOFY() {
//     alert('owo');
// }

// let clickOnLalafell = document.querySelector('img')
// clickOnLalafell.onclick = OWOFY()

let clickOnLalafell = document.querySelector('img');
clickOnLalafell.onclick = function() {
    let imageChange = clickOnLalafell.getAttribute('src')

    if(imageChange === '2020-09-09_20-53-55_Neneko_Brave Shine.png') {
        clickOnLalafell.setAttribute('src', '2020-12-23_19-03-29-813_EG11 - 03 - Ambient.png');
    } 

    else {
        clickOnLalafell.setAttribute('src', '2020-09-09_20-53-55_Neneko_Brave Shine.png');
    }
}

let lalafellChangerButton = document.querySelector('button');
let lalafellHeading = document.querySelector('h1');

function setLalafellGender() {
    let Gender = prompt('lalafell or LALAFELL');
    if (!Gender) {
        alert('lalafell or LALAFELL!');
        setLalafellGender();
    }
    else if (Gender === 'lalafell' || Gender === 'LALAFELL')  {
        localStorage.setItem('gender', Gender);
        lalafellHeading.textContent = Gender;
    }
    else {
        alert('wat');
        setLalafellGender();
    }
}

if (!localStorage.getItem('name')) {
    setLalafellGender();
}
else {
    let storedGender = localStorage.getItem('gender');
    lalafellHeading.textContent = storedGender;
}

lalafellChangerButton.onclick = function() {
    setLalafellGender();
}