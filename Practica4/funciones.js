let clockInterval;
const reloj = document.getElementById("reloj");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; // Formato de 12 horas
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    const timeString = `${hours}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
    reloj.textContent = timeString;
}

function startClock() {
    updateClock();
    clockInterval = setInterval(updateClock, 1000); // Actualiza cada segundo
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopClock() {
    clearInterval(clockInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function padZero(number) {
    return number < 10 ? `0${number}` : number;
}