function toggleLeftLight() { 
    document
    .getElementById("image")
    .setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif");  
    document.getElementById("leftStatus").innerHTML = "Lampu Menyala"; 
    const date = new Date(); 
    const hour = date.getHours(); 
    const minute = date.getMinutes(); 
    const second = date.getSeconds(); 
    document.getElementById("leftButton").innerHTML = 
    "Menyala: " + 
    hour + 
    ":" + 
    (minute < 10 ? "0" + minute : minute) + 
    ":" + 
    (second < 10 ? "0" + second : second); 
    setTimeout(() => { 
        
    document 
        .getElementById("image") 
        .setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif"); 
    document.getElementById("leftStatus").innerHTML = "Lampu Mati"; 
    const date = new Date(); 
    const hour = date.getHours(); 
    const minute = date.getMinutes(); 
    const second = date.getSeconds(); 
    document.getElementById("leftButton").innerHTML = 
        "Mati: " + 
        hour + 
        ":" + 
        (minute < 10 ? "0" + minute : minute) + 
        ":" + 
        (second < 10 ? "0" + second : second); 
    }, 3000); 
}

function toggleRightLight() {
    document
    .getElementById("image2")
    .setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif");
    document.getElementById("rightStatus").innerHTML = "Lampu Menyala";
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    document.getElementById("rightLight").innerHTML =
    "Menyala: " +
    hour +
    ":" +
    (minute < 10 ? "0" + minute : minute) +
    ":" +
    (second < 10 ? "0" + second : second);
}
function toggleRightLightOn() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    document.getElementById("rightLight").innerHTML =
    "Mati: " +
    hour +
    ":" +
    (minute < 10 ? "0" + minute : minute) +
    ":" +
    (second < 10 ? "0" + second : second);
    document
    .getElementById("image2")
    .setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif");
    document.getElementById("rightStatus").innerHTML = "Lampu Mati";
}

function validateAgeInput(input) {
    const value = input.value;
    if (!/^\d*$/.finaltugas2(value)) {
        input.value = value.slice(0, -1);
    }
}


function checkAge() {
    const ageInput = parseInt(document.getElementById('ageInput').value);
    const ageResult = document.getElementById('ageResult');

    if (isNaN(ageInput)) {
        ageResult.textContent = "Masukkan usia yang valid.";
        return;
    }

    let category;
    if (ageInput >= 0 && ageInput <= 2) {
        category = "Bayi";
    } else if (ageInput >= 3 && ageInput <= 5) {
        category = "Balita (Masa Perkembangan)";
    } else if (ageInput >= 6 && ageInput <= 12) {
        category = "Anak-anak (Masa Aktif)";
    } else if (ageInput >= 13 && ageInput <= 18) {
        category = "Remaja (Masa Pengembangan Jati Diri)";
    } else if (ageInput >= 19 && ageInput <= 32) {
        category = "Dewasa (Masa Produktif)";
    } else if (ageInput >= 33 && ageInput <= 59) {
        category = "Dewasa (Masa Penuaan)";
    } else if (ageInput >= 60) {
        category = "Tua/Lansia (Masa Akhir)";
    } else {
        category = "Usia tidak valid";
    }

    ageResult.textContent = ` ${category}.`;
}

let targetNumber = Math.floor(Math.random() * 10) + 1;
let wrongGuessCount = 0;

function guessNumber() {
    const userGuess = parseInt(document.getElementById('guessNumberInput').value);
    const resultElement = document.getElementById('guessResult');

    if (userGuess === targetNumber) {
        resultElement.textContent = "Selamat! Tebakan Anda benar.";

        targetNumber = Math.floor(Math.random() * 10) + 1;
        wrongGuessCount = 0;
    } else {
        wrongGuessCount++;
        if (wrongGuessCount % 30 === 0) {
            resultElement.textContent = "Berhentilah berjudi kawan, dosa!!";
        } else {
            resultElement.textContent = "Tebakan salah. Coba lagi!";
        }
    }
}

function calculate() {
    const angka1 = parseFloat(document.getElementById('angka1').value);
    const angka2 = parseFloat(document.getElementById('angka2').value);
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('hasil');

    if (isNaN(angka1) || isNaN(angka2)) {
        resultElement.textContent = "Masukkan angka yang valid.";
        return;
    }

    let hasil;
    switch (operation) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '/':
            hasil = angka2 !== 0 ? angka1 / angka2 : "Tidak bisa membagi dengan nol";
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
    }

    resultElement.textContent = hasil;
}

function clearInput() {
    document.getElementById('angka1').value = '';
    document.getElementById('angka2').value = '';
    document.getElementById('hasil').textContent = '';
}

function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const tempUnit = document.getElementById('tempUnit').value;
    const resultElement = document.getElementById('tempResult');

    if (isNaN(tempInput)) {
        resultElement.textContent = "Masukkan suhu yang valid.";
        return;
    }

    let convertedTemp;
    switch (tempUnit) {
        case 'CtoF':
            convertedTemp = (tempInput * 9 / 5) + 32;
            resultElement.textContent = `${tempInput}°C adalah ${convertedTemp.toFixed(2)}°F`;
            break;
        case 'FtoC':
            convertedTemp = (tempInput - 32) * 5 / 9;
            resultElement.textContent = `${tempInput}°F adalah ${convertedTemp.toFixed(2)}°C`;
            break;
        case 'CtoK':
            convertedTemp = tempInput + 273.15;
            resultElement.textContent = `${tempInput}°C adalah ${convertedTemp.toFixed(2)}K`;
            break;
        case 'KtoC':
            convertedTemp = tempInput - 273.15;
            resultElement.textContent = `${tempInput}K adalah ${convertedTemp.toFixed(2)}°C`;
            break;
        case 'FtoK':
            convertedTemp = (tempInput - 32) * 5 / 9 + 273.15;
            resultElement.textContent = `${tempInput}°F adalah ${convertedTemp.toFixed(2)}K`;
            break;
        case 'KtoF':
            convertedTemp = (tempInput - 273.15) * 9 / 5 + 32;
            resultElement.textContent = `${tempInput}K adalah ${convertedTemp.toFixed(2)}°F`;
            break;
    }
}